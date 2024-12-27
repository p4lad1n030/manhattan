
import Input from "../../components/Input";
import Menu from "../../components/Menu";
import ServicesOffers from './../../components/servicesOfers/index';


const CreateProfile = () => {
  return (
    <>

      <Menu />
      <section className="p-5">
        <article className="flex flex-col bg-gcor05 p-1 rounded">
          <h1 className="font-gvibes text-5xl my-5 md:left-0 text-center text-white drop-shadow-md">Ola Garota, aqui é seu espaço mostre quem você quer que eles pensem que você é!</h1>

          <div className="w-full md:flex  items-center relative bg-white  rounded-lg mb-5">
            <h1 className="font-ral italic bg-white absolute -top-3  md:left-0 rounded-lg ">Pra começar, identifique-se, garota</h1>

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
            <h1 className="font-ral italic bg-white absolute -top-3  md:left-0 rounded-lg text-center">Deixe um recado pra atiçar a imaginação deles...</h1>
            <textarea className="border-2 w-4/5 outline-none shadow-lg" onChange={(e) => { console.log(e.target.value); }} rows={5} cols={33} placeholder="Provoque e Prometa...." value={''} />
          </div>

          <div className="w-full md:flex  items-center relative bg-white  rounded-lg mb-5">
            <h1 className="font-ral italic bg-white absolute -top-3  md:left-0 rounded-lg text-center">Agora descreva quem é você, garota!</h1>

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
          <div className="w-full md:flex  items-center relative bg-white  rounded-lg mb-5 h-[120px]">
            <h1 className="font-ral italic bg-white absolute -top-3  md:left-0 rounded-lg text-center">O que você topa fazer, garota?</h1>
            
           <ServicesOffers />



          </div>

        </article>
      </section>
    </>

  );
}

export default CreateProfile;
