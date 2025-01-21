import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../services";
import { SiLoop } from "react-icons/si";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import { useSelector, useDispatch } from "react-redux";
import { isLogged, useloginSlice } from "../../redux/loginSlice";

interface FooterProps {
  profile?: boolean
  
}
const Footer = ({ profile }: FooterProps) => {
  const [loading, setLoading] = useState<boolean>();
  const navigate = useNavigate()
  const islogged = useSelector(useloginSlice)
  const dispatch = useDispatch();
  

  const logOut = () => {
    setLoading(true)
    signOut(auth).then(() => {
      dispatch(isLogged(''))
      // Sign-out successful.
      setTimeout(function() {
        // body
        navigate('/', { replace: true })
      },700);
    }).catch((error) => {
      // An error happened.
      console.log(error);
      setLoading(false)
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const uid = user?.uid
      dispatch(isLogged(uid as string))
    })
    unsubscribe()
    console.log(islogged);
    return () => {
      unsubscribe()
    }
}, [isLogged]);
  
  return (
    <footer className="w-full fixed bottom-0 left-0 overflow-hidden max-h-[60px] bg-gcor flex md:justify-around items-center ">
      <div className=" w-full flex md:justify-around justify-between items-center  text-white p-1">

        { islogged.userLogged  ?
          <button type="button" className="bg-vviolet p-2 w-20 rounded-xl hover:bg-white hover:text-ppink font-robotoc border-white border hover:border-vviolet" aria-label="Cadastro" onClick={logOut}>
          {loading ? <SiLoop size={25} className="animate-spin  mx-auto ..." /> : 'Sair'}
          </button>
          : null
        
      }

        {profile && !islogged.userLogged ?
          <Link to={'https://api.whatsapp.com/send?phone=5551997960975'}>
            <button type="button" className="bg-vviolet p-2 w-26 rounded-xl hover:bg-white hover:text-ppink font-robotoc border-white border hover:border-vviolet text-nowrap" aria-label="Contratar ela">
            Contratar ela
            </button>
          </Link>
          :
          null
        }

        <div className="flex items-center gap-2">
          <p className="text-center p-1 md:text-nowrap">Desenvolvido por</p>
          <Link to={'https://api.whatsapp.com/send?phone=5551989736328'}>
            <img src={logo} alt="" className="h-[80px]" />
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
