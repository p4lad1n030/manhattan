
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FormEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowRoundBack, IoMdLock, IoMdMail } from "react-icons/io";
import { SiLoop } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services";
import toast from './../../../node_modules/react-hot-toast/src/index';
import { useDispatch } from "react-redux";
import { isLogged } from "../../redux/loginSlice";

const Login = () => {
  const dispatch = useDispatch()
  const [userEmail, setUserEmail] = useState<string>('');
  const [passWord, setPassWord] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingGoogle, setLoadingGoogle] = useState<boolean>(false);
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    signInWithEmailAndPassword(auth, userEmail, passWord).then((res) => {   
      if (auth.currentUser?.uid === '9ZDHa32eMlWJuvYk7AGmWhmN5NM2') {
        navigate('/admin', { replace: true })
        dispatch(isLogged(res.user.uid))
        return
      }
      dispatch(isLogged(res.user.uid))
      navigate('/createprofile', { replace: true })
    }).catch((err) => {
      setLoading(false)
      const errorCode = err.code;
      const errorMessage = err.message;
      switch (errorCode) {
        case 'auth/invalid-credential' : toast.error('Usuário não cadastrado!')
          break
        case 'auth/invalid-email' : toast.error('Email Invalido')
          break
        default: "Erro ao conectar!"
        
      }
      console.log('erro code ' + errorCode, '\nerro message ' + errorMessage);
      // The email of the user's account used.
      
    }).finally(() => {
      setLoading(false)

    })

  }
  const SigInG = () => {
    setLoadingGoogle(true)
    signInWithPopup(auth, provider)
      .then(() => {        
        navigate('/createprofile', { replace: true })
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        switch (errorCode) {
          case 'auth/popup-closed-by-user': toast.error('Login cancelado pelo usuário!')
            break
          default: toast.error('Erro ao conectar')

        }
        console.log(errorCode, errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        console.log(email);
        
        setLoadingGoogle(false)
      }).finally(() => {
        setLoadingGoogle(false)

      })
  }


  return (
    <section className="h-screen flex flex-col p-2 video" >



      <div className="bg-gcor p-2 w-12 h-12 flex justify-center items-center rounded-full   shadow-lg md:mt-6 md:ml-6 mb-2 md:mb-0">
        <Link to='/'>
          <IoMdArrowRoundBack color="#fff" size={24} />
        </Link>
      </div>

      <article className="w-full md:w-2/4 m-auto flex flex-col justify-center items-center bg-gcor  rounded-3xl shadow-lg ">
        <h1 className="font-gvibes text-5xl  text-center text-white mt-3">Faça Login Para Acessar, Garota</h1>

        <form className="w-[100%] md:w-full p-2 h-3/4 flex flex-col justify-center items-center   rounded-3xl" onSubmit={handleSubmit}>
          <div className="relative w-full md:w-3/4 mb-12">
            <input type="text" className="w-full rounded-lg h-10 pl-10 font-robotoc placeholder:font-robotoc shadow-lg outline-none" aria-label="email" placeholder="Digite seu email..." onChange={(e) => setUserEmail(e.target.value)} autoComplete="email" />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <IoMdMail className="text-vviolet" size={24} />
            </span>
          </div>
          <div className="relative w-full md:w-3/4">
            <input type="password" id='pass' className="w-full rounded-lg h-10 pl-10 font-robotoc placeholder:font-robotoc shadow-lg outline-none" aria-label="password" placeholder="Digite sua senha..." onChange={(e) => setPassWord(e.target.value)} autoComplete="current-password" />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <IoMdLock className="text-vviolet" size={24} />
            </span>
          </div>
          <p className="self-end md:mr-24 text-xs text-white font-robotoc shadow-lg">Não possui conta?
            <Link to={'/register'}><span className="font-semibold underline cursor-pointer"> Registre-se</span></Link></p>

          <button type="submit" className="bg-vviolet text-white p-2 w-20 rounded-xl hover:bg-white hover:text-ppink font-robotoc border-white border hover:border-vviolet" aria-label="Acessar">
            {loading ? <SiLoop size={25} className="animate-spin  mx-auto ..." /> : 'Acessar'}
          </button>
        </form>
        <div className="flex flex-col justify-center items-center my-2">
          <h3 className="font-ral text-xl font-semibold text-white">Ou acesse usando</h3>

          <button type="button" className="flex justify-center items-center bg-vviolet text-white p-2 w-20 rounded-xl hover:bg-white hover:text-ppink font-robotoc border-white border hover:border-vviolet" aria-label="Google" onClick={SigInG}>
            {loadingGoogle ? <SiLoop size={25} className="animate-spin  mx-auto ..." /> : <><FcGoogle size={24} />oogle</>}
          </button>
        </div>

      </article>

    </section>
  );
}

export default Login;
