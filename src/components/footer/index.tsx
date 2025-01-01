import { signOut } from "firebase/auth";
import { auth } from "../../services";
import { SiLoop } from "react-icons/si";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const [loading, setLoading] = useState<boolean>();
  const navigate = useNavigate()
  const logOut = () => {
    setLoading(true)
    signOut(auth).then(() => {
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

  
  return (
    <footer className="w-full fixed bottom-0 left-0 mx-auto">
      <div className="flex justify-around items-center bg-gcor text-white p-2">
        <button type="button" className="bg-vviolet p-2 w-20 rounded-xl hover:bg-white hover:text-ppink font-robotoc border-white border hover:border-vviolet" aria-label="Cadastro" onClick={logOut}>{loading ? <SiLoop size={25} className="animate-spin  mx-auto ..." /> : 'Sair'} </button>
        <p>© 2021 All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
