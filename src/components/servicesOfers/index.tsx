import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";


const ServicesOffers = () => {

  const [button1, setButton1] = useState<boolean>(false);


  const [preferences, setPreferences] = useState({
    likesIceCream: false,
    likesChocolate: false,
    likesMovies: false,
  });

  const handleCheckboxChange = (event: { target: { name: string; checked: boolean; }; }) => {
    const { name, checked } = event.target;
    setPreferences((prevPreferences) => ({ ...prevPreferences, [name]: checked, }));
  };

  return (
    <div className="w-full mt-4 flex flex-wrap justify-around ">

      <div className="flex md:w-4/12 flex-col ">
        <div className="flex items-center w-full   bg-orange-300 ">
          <input id="checkbox1" type="checkbox" className="hidden" />
          <label htmlFor="checkbox1" className="flex w-full font-ral bg-violet-600">
            <span className="w-5 h-5 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-blue-500 peer-checked:border-transparent" />
            <h4 className="cursor-pointer text-center bg-teal-500" >Sexo Vaginal com Preservativo:</h4>
          </label>
          <IoIosArrowDropdown size={24} className="drop-shadow cursor-pointer" onClick={() => { setButton1(!button1) }} />
        </div>
        {button1 &&
          <p className="font-robotoc italic text-center">
            Aceita receber penetração vaginal com preservativo de seus clientes.
          </p>
        }
      </div>
      

      {/* {<IoIosArrowDropup /> } */}
    </div>
  );
}


export default ServicesOffers;



/*
const UserPreferences = () => {
  const [preferences, setPreferences] = useState({
    likesIceCream: false, likesChocolate: false, likesMovies: false, // Adicione mais preferências conforme necessário });
    const handleCheckboxChange = (event) => { const { name, checked } = event.target; setPreferences((prevPreferences) => ({ ...prevPreferences, [name]: checked, })); }; return( <div> <h3>Preferências do Usuário</h3> <label> <input type="checkbox" name="likesIceCream" checked={preferences.likesIceCream} onChange={handleCheckboxChange} /> Gosta de Sorvete </label> <label> <input type="checkbox" name="likesChocolate" checked={preferences.likesChocolate} onChange={handleCheckboxChange} /> Gosta de Chocolate </label> <label> <input type="checkbox" name="likesMovies" checked={preferences.likesMovies} onChange={handleCheckboxChange} /> Gosta de Filmes </label>  <p>Preferências: {JSON.stringify(preferences)}</p> </div > );
}; export default UserPreferences;
 */
