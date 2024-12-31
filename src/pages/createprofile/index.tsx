

import { MdAddPhotoAlternate } from "react-icons/md";
// import DontOffers from "../../components/DontOffers";
import Input from "../../components/Input";
import Menu from "../../components/Menu";
import ServicesOffers from './../../components/servicesOfers/index';
import Footer from "../../components/footer";


const CreateProfile = () => {
  return (
    <>

      <Menu />
      <section className="p-1 ">
        <article className="flex flex-col bg-gcor05 p-1 rounded relative ">
          <h1 className="font-gvibes text-5xl my-5 md:left-0 text-center text-white drop-shadow-md ">Ola Garota, aqui é seu espaço mostre quem você quer que eles pensem que você é!</h1>

          <div className="w-full md:flex  items-center relative bg-white  rounded-lg mb-5">
            <h1 className="font-ral italic bg-white absolute -top-3  md:left-0 rounded-lg px-1">Pra começar, identifique-se, garota</h1>

            <div className="flex flex-col h-32  my-1 md:mt-8 justify-center items-center md:w-1/3">
              <Input placeholder="Nome" />
              <Input placeholder=" Idade" />
            </div>
            <div className="flex flex-col h-32  my-1 md:mt-8 justify-center items-center md:w-1/3">
              <Input placeholder="Peso" />
              <Input placeholder="Altura...Ex:1m 80cm" />
              <Input placeholder="Idioma" />
            </div>
            <div className="flex flex-col h-32  my-1 md:mt-8 justify-center items-center md:w-1/3">
              <Input placeholder=" Genero" />
              <Input placeholder=" Fumante?" />
            </div>

          </div>

          <div className="w-full flex flex-col justify-center items-center relative bg-white  rounded-lg h-56 mb-5">
            <h1 className="font-ral italic bg-white absolute -top-3  md:left-0 rounded-lg text-center px-1">Deixe um recado pra atiçar a imaginação deles...</h1>
            <textarea className="border-2 w-4/5 outline-none shadow-lg placeholder:p-1" onChange={(e) => { console.log(e.target.value); }} rows={5} cols={33} placeholder="Provoque e Prometa...." value={''} />
          </div>

          <div className="w-full md:flex  items-center relative bg-white  rounded-lg mb-5">
            <h1 className="font-ral italic bg-white absolute -top-3  md:left-0 rounded-lg text-center px-1">Agora descreva quem é você, garota!</h1>

            <div className="flex flex-col h-32  mt-4 md:my-1 md:mt-8 justify-center items-center md:w-1/3">
              <Input placeholder="Cor dos olhos" />
              <Input placeholder=" Cor do cabelo" />
            </div>
            <div className="flex flex-col h-32  my-1 md:mt-8 justify-center items-center md:w-1/3">
              <Input placeholder="Cumprimento do cabelo" />
              <Input placeholder="Etnia" />
              <Input placeholder="Silicone" />
            </div>
            <div className="flex flex-col h-32  my-1 md:mt-8 justify-center items-center md:w-1/3">
              <Input placeholder="Tamanho do pé" />
              <Input placeholder="Piercing?" />

            </div>

          </div>
          <div className="w-full md:flex  items-center relative bg-white  rounded-lg mb-5 ">
            <h1 className="font-ral italic bg-white absolute -top-3  md:left-0 rounded-lg text-center px-1">O que você topa fazer, garota?</h1>

            <ServicesOffers />

          </div>

          {/* <div className="w-full md:flex  items-center relative bg-white  rounded-lg mb-5 ">
            <h1 className="font-ral italic bg-white absolute -top-3  md:left-0 rounded-lg text-center px-1">O que você não topa fazer, garota?</h1>

            <DontOffers />

          </div> */}

          <div className="w-full flex flex-wrap items-center justify-center md:flex-col md:justify-around relative bg-white  rounded-lg mb-5 p-1">
            <h1 className="font-ral italic bg-white absolute -top-3  md:left-0 rounded-lg text-center px-1">Agora arrase! Escolha as suas melhores fotos, garota</h1>
            <div className="mt-8 flex justify-around items-center w-full mb-5">
              <input id="file" type="file" className="hidden peer" aria-label="file" />
              <label htmlFor="file" className="peer cursor-pointer flex justify-center items-center bg-gcor text-white rounded-lg p-2 mt-5 md:mt-0">
                <MdAddPhotoAlternate size={48} />
              </label>
            </div>
            <div className="bg-gcor05 w-full  rounded-lg flex flex-wrap justify-center items-center p-2">
              <img src="https://placehold.co/300x200?text=Sua+Foto+Aqui" alt="" className=" border-2 border-white rounded-xl m-1" />
              <img src="https://placehold.co/300x200?text=Sua+Foto+Aqui" alt="" className=" border-2 border-white rounded-xl m-1" />
              <img src="https://placehold.co/300x200?text=Sua+Foto+Aqui" alt="" className=" border-2 border-white rounded-xl m-1" />
              <img src="https://placehold.co/300x200?text=Sua+Foto+Aqui" alt="" className=" border-2 border-white rounded-xl m-1" />
              <img src="https://placehold.co/300x200?text=Sua+Foto+Aqui" alt="" className=" border-2 border-white rounded-xl m-1" />
            </div>

          </div>
          <div className="w-full md:flex justify-center  items-center relative bg-white  rounded-lg mb-5 ">
            <h1 className="font-ral italic bg-white absolute -top-3  md:left-0 rounded-lg text-center px-1">Agora quanto custa a sua companhia, garota?</h1>
            <div className="mt-8 flex flex-wrap justify-around items-center w-full md:w-1/2 mb-5">
              <Input placeholder="30 min" />
              <Input placeholder="2 horas" />
              <Input placeholder="3 horas" />
            </div>
          </div>
          <div className="w-full md:flex justify-center  items-center relative bg-white  rounded-lg mb-5 ">
            <h1 className="font-ral italic bg-white absolute -top-3  md:left-0 rounded-lg text-center px-1">Financeiro</h1>
            <div className="mt-8 flex flex-wrap justify-around items-center w-full md:p-8 mb-5 overflow-x-auto">
              <table className="min-w-full  p-2">
                <thead className="bg-vviolet text-white font-ral">
                  <tr>
                    <th className="border-r-2 whitespace-nowrap">Programas</th>
                    <th className="border-r-2 whitespace-nowrap">Data</th>
                    <th className="whitespace-nowrap">Total </th>
                  </tr>
                </thead>
                <tbody className="text-center font-robotoc bg-ppink06 text-white">
                  <tr className="border-2 ">
                    <td className="font-light px-6 py-4 whitespace-nowrap">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td className="font-light px-6 py-4 whitespace-nowrap">Malcolm Lockyer</td>
                    <td className="font-light px-6 py-4 whitespace-nowrap">1961</td>
                  </tr>
                  <tr className="border-2 ">
                    <td className="font-light px-6 py-4 whitespace-nowrap">Witchy Woman</td>
                    <td className="font-light px-6 py-4 whitespace-nowrap">The Eagles</td>
                    <td className="font-light px-6 py-4 whitespace-nowrap">1972</td>
                  </tr>
                  <tr className="border-2 ">
                    <td className="font-light px-6 py-4 whitespace-nowrap">Shining Star</td>
                    <td className="font-light px-6 py-4 whitespace-nowrap">Earth, Wind, and Fire</td>
                    <td className="font-light px-6 py-4 whitespace-nowrap">1975</td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        <Footer />
        </article>
      </section>
    </>

  );
}

export default CreateProfile;
