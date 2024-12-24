import clsx from "clsx";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import  './menu.css';


const Menu = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  return (
    <>
    <header className="bg-gcor text-white px-1 h-16 flex items-center justify-between" >
      <Link to={'/'}><h1 className="text-5xl font-gvibes ">Manhattan</h1></Link>

      <button type="button" className="md:hidden" aria-label="menu" onClick={()=>{setIsOpened(!isOpened)}}>
      <FaBars size={24} />
      </button>

        <menu className={'hidden md:flex'}>
          <div className="flex justify-between flex-wrap w-full">
          <Link to='/Admin'>
            <button type="button" className="bg-vviolet p-2 w-20 rounded-xl hover:bg-white hover:text-ppink font-robotoc font-medium" aria-label="Admin">Admin</button>
          </Link>
          <Link to='/cadastro'><button type="button" className="bg-vviolet p-2 w-20 rounded-xl hover:bg-white hover:text-ppink font-robotoc" aria-label="Cadastro">Cadastro</button></Link>
          <Link to='/login'><button type="button" className="bg-vviolet p-2 w-20 rounded-xl hover:bg-white hover:text-ppink font-robotoc" aria-label="Login">Login</button></Link>
        </div>
      </menu>
       
      </header>
      <menu className={clsx('menu-transition bg-gcor p-1', {
        'menu-hidden': !isOpened,
        'menu-visible': isOpened
      })}>
        <div className="flex justify-between flex-wrap w-full text-white ">
          <Link to='/Admin'>
            <button type="button" className="bg-vviolet p-2 w-20 rounded-xl hover:bg-white hover:text-ppink font-robotoc font-medium shadow-lg" aria-label="Admin">Admin</button>
          </Link>
          <Link to='/cadastro'><button type="button" className="bg-vviolet p-2 w-20 rounded-xl hover:bg-white hover:text-ppink font-robotoc font-medium shadow-lg" aria-label="Cadastro">Cadastro</button></Link>
          <Link to='/login'><button type="button" className="bg-vviolet p-2 w-20 rounded-xl hover:bg-white hover:text-ppink font-robotoc font-medium shadow-lg" aria-label="Login">Login</button></Link>
        </div>
      </menu>
      
    </>
  );
}

export default Menu;
