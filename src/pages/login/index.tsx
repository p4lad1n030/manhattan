
import { FormEvent, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowRoundBack, IoMdLock, IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";


const Login = () => {
  // 1318X642
    const [userEmail, setUserEmail] = useState<string>('');
  const [passWord, setPassWord] = useState<string>('');
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }
  return (
    <section className="h-screen flex flex-col p-2 video" >


      <div className="bg-gcor p-2 w-12 h-12 flex justify-center items-center rounded-full mt-6  shadow-lg">
        <Link to='/'>
          <IoMdArrowRoundBack color="#fff" size={24} />
        </Link>
      </div>

      <article className="w-full md:w-2/4 m-auto flex flex-col justify-center items-center bg-gcor  rounded-3xl shadow-lg ">
        <h1 className="font-gvibes text-5xl  text-center text-white mt-3">Faça Login Para Acessar, Garota</h1>

        <form className="w-[100%] md:w-full p-2 h-3/4 flex flex-col justify-center items-center   rounded-3xl" onSubmit={handleSubmit}>
          <div className="relative w-full md:w-3/4 mb-12">
            <input type="text" className="w-full rounded-lg h-10 pl-10 font-robotoc placeholder:font-robotoc shadow-lg" aria-label="email" placeholder="Digite seu email..." />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <IoMdMail className="text-vviolet" size={24} />
            </span>
          </div>
          <div className="relative w-full md:w-3/4">
            <input type="password" id='pass' className="w-full rounded-lg h-10 pl-10 font-robotoc placeholder:font-robotoc shadow-lg" aria-label="password" placeholder="Digite sua senha..." />
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <IoMdLock className="text-vviolet" size={24} />
            </span>
          </div>
          <p className="self-end md:mr-24 text-xs text-white font-robotoc shadow-lg">Não possui conta?
            <Link to={'/cadastro'}><span className="font-semibold underline cursor-pointer"> Registre-se</span></Link></p>

          <button type="submit" className="bg-vviolet p-2 w-20 rounded-lg hover:bg-white hover:text-ppink font-robotoc font-medium text-white shadow-lg mt-2" aria-label="Acessar">Acessar</button>
        </form>
        <div className="flex flex-col justify-center items-center my-2">
          <h3 className="font-ral text-xl font-semibold text-white">Ou acesse usando</h3>
          <button type="button" className="flex justify-center items-center bg-vviolet p-2 w-28 rounded-md hover:bg-white hover:text-ppink font-robotoc font-medium text-white shadow-lg" aria-label="Google">
               <FcGoogle size={24}/>oogle 
          </button>
        </div>

      </article>

    </section>
  );
}

export default Login;
