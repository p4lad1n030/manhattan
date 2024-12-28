import { useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { clsx } from 'clsx';


const DontOffers = () => {

  const [button1, setButton1] = useState<boolean>(false);
  const [button2, setButton2] = useState<boolean>(false);
  const [button3, setButton3] = useState<boolean>(false);
  const [button4, setButton4] = useState<boolean>(false);
  const [button5, setButton5] = useState<boolean>(false);
  const [button6, setButton6] = useState<boolean>(false);
  const [button7, setButton7] = useState<boolean>(false);
  const [button8, setButton8] = useState<boolean>(false);
  const [button9, setButton9] = useState<boolean>(false);
  const [button10, setButton10] = useState<boolean>(false);
  const [button11, setButton11] = useState<boolean>(false);
  const [button12, setButton12] = useState<boolean>(false);
  const [button13, setButton13] = useState<boolean>(false);
  const [button14, setButton14] = useState<boolean>(false);
  const [button15, setButton15] = useState<boolean>(false);
  const [button16, setButton16] = useState<boolean>(false);
  const [button17, setButton17] = useState<boolean>(false);
  const [button18, setButton18] = useState<boolean>(false);
  const [button19, setButton19] = useState<boolean>(false);
  const [button20, setButton20] = useState<boolean>(false);
  const [button21, setButton21] = useState<boolean>(false);
  const [button22, setButton22] = useState<boolean>(false);
  const [button23, setButton23] = useState<boolean>(false);
  const [button24, setButton24] = useState<boolean>(false);
  const [button25, setButton25] = useState<boolean>(false);
  const [button26, setButton26] = useState<boolean>(false);
  const [button27, setButton27] = useState<boolean>(false);
  const [button28, setButton28] = useState<boolean>(false);
  const [button29, setButton29] = useState<boolean>(false);
  const [button30, setButton30] = useState<boolean>(false);
  const [button31, setButton31] = useState<boolean>(false);
  const [button32, setButton32] = useState<boolean>(false);


  const [servicesOffers, setServicesOffers] = useState({
    nsexoVag: false,
    nsexoOral: false,
    nsexoAnal: false,
    nbeijoGreg: false,
    nbeijoBoca: false,
    nmasturb: false,
    nsexoOralSemPreser: false,
    nsexoVirtu: false,
    npenetraComAcessorio: false,
    nutilizzaAcessEroti: false,
    npodolatria: false,
    nstriptease: false,
    nmassagemTradi: false,
    nmassagemTantric: false,
    nduplapenetra: false,
    ntriplapenetra: false,
    ndomina: false,
    nusaFantasia: false,
    nfazRolePlay: false,
    npodeFilma: false,
    nvoyerismo: false,
    nbandag: false,
    nsadomaso: false,
    nfisting: false,
    nfaceFuck: false,
    nquirofilia: false,
    nsquirt: false,
    nchuvaDourada: false,
    nchuvaMarro: false,
    ntrampling: false,
    nacompanha: false,
    nviagem: false,
  });

  const handleCheckboxChange = (event: { target: { name: string; checked: boolean; }; }) => {
    const { name, checked } = event.target;
    setServicesOffers((prevServices) => ({ ...prevServices, [name]: checked, }));
  };


  return (
    <div className="w-full mt-4 flex flex-wrap justify-around pt-7">

      <div className="flex md:w-4/12 flex-col p-2">
        <div className="flex items-center w-full   ">
          <div className="w-5 h-5">
            <input id="ncheckbox1" type="checkbox" name="nsexoVag" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nsexoVag} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox1" className="flex w-full font-ral ">
            <h4 className="cursor-pointer text-center font-ral font-semibold" >Sexo Vaginal com Preservativo</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button1
            })} onClick={() => { setButton1(!button1) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button1,
          'opacity-100': button1
        })}>
          Aceita receber penetração vaginal com preservativo de seus clientes.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2">
        <div className="flex items-center w-full   ">
          <div className="w-5 h-5">
            <input id="ncheckbox2" type="checkbox" name="nsexoOral" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nsexoOral} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox2" className="flex w-full font-ral ">
            <h4 className="cursor-pointer text-center font-ral font-semibold" >Sexo Oral com Preservativo</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button2
            })} onClick={() => { setButton2(!button2) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button2,
          'opacity-100': button2
        })}>
          Realiza sexo oral com preservativo em seus clientes.
          Aceita receber sexo oral com preservativo de seus clientes.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full  ">
          <div className="w-5 h-5">
            <input id="ncheckbox3" type="checkbox" name="nsexoAnal" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nsexoAnal} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox3" className="flex w-full font-ral ">
            <h4 className="cursor-pointer text-center font-ral font-semibold" >Sexo Anal com Preservativo</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button3
            })} onClick={() => { setButton3(!button3) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button3,
          'opacity-100': button3
        })}>

          Faz penetração anal com preservativo em seus clientes.
          Aceita receber penetração anal com preservativo de seus clientes.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox4" type="checkbox" name="nbeijoGreg" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nbeijoGreg} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox4" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >     Beijo Grego</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button4
            })} onClick={() => { setButton4(!button4) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button4,
          'opacity-100': button4
        })}>
          Recebe beijo grego de seus clientes. Beijo grego é a técnica de receber carícias no ânus com a boca de seus clientes.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox5" type="checkbox" name="nbeijoBoca" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nbeijoBoca} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox5" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >     Beijo na Boca</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button5
            })} onClick={() => { setButton5(!button5) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button5,
          'opacity-100': button5
        })}>
          Realiza beijo na boca com seus clientes <br />
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox6" type="checkbox" name="nmasturb" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nmasturb} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox6" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >     Masturbação</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button6
            })} onClick={() => { setButton6(!button6) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button6,
          'opacity-100': button6
        })}>
          Realiza masturbação em seus clientes.
          Aceita receber masturbação de seus clientes.<br />
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox7" type="checkbox" name="nsexoOralSemPreser" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nsexoOralSemPreser} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox7" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >     Sexo Oral sem Preservativo</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button7
            })} onClick={() => { setButton7(!button7) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button7,
          'opacity-100': button7
        })}>
          Realiza sexo oral sem preservativo em seus clientes.
          Aceita receber sexo oral sem preservativo de seus clientes.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox8" type="checkbox" name="nsexoVirtu" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nsexoVirtu} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox8" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >     Sexo Virtual</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button8
            })} onClick={() => { setButton8(!button8) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button8,
          'opacity-100': button8
        })}>
          Sexo à distância por meio de texto, áudio e vídeo online. Sem contato físico
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox9" type="checkbox" name="npenetraComAcessorio" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.npenetraComAcessorio} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox9" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >     Penetração com Acessórios Sexuais</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button9
            })} onClick={() => { setButton9(!button9) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button9,
          'opacity-100': button9
        })}>
          Faz penetração com acessórios sexuais em seus clientes.
          Recebe penetração com acessórios sexuais em seus clientes.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox10" type="checkbox" name="nutilizzaAcessEroti" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nutilizzaAcessEroti} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox10" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Utiliza Acessórios Eróticos</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button10
            })} onClick={() => { setButton10(!button10) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button10,
          'opacity-100': button10
        })}>
          Utiliza acessórios eróticos para sensualização e excitação com de seus clientes.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox11" type="checkbox" name="npodolatria" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.npodolatria} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox11" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Podolatria</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button11
            })} onClick={() => { setButton11(!button11) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button11,
          'opacity-100': button11
        })}>
          Faz podolatria em seus clientes. Podolatria é a prática de idolatrar pés de seus clientes.
          Aceita receber podolatria de seus clientes. Podolatria é a prática de ter seus pés idolatrados por seus clientes.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox12" type="checkbox" name="nstriptease" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nstriptease} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox12" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Striptease</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button12
            })} onClick={() => { setButton12(!button12) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button12,
          'opacity-100': button12
        })}>
          Tirar a roupa de forma lenta e sensual, normalmente, com dança.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox13" type="checkbox" name="nmassagemTradi" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nmassagemTradi} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox13" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Massagem Tradicional</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button13
            })} onClick={() => { setButton13(!button13) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button13,
          'opacity-100': button13
        })}>
          Realiza massagem relaxante em seus clientes.
          Aceita receber massagem de seus clientes.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox14" type="checkbox" name="nmassagemTantric" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nmassagemTantric} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox14" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Massagem Tântrica</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button14
            })} onClick={() => { setButton14(!button14) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button14,
          'opacity-100': button14
        })}>
          Realiza massagem tântrica em seus clientes. Este é um tipo de massagem que expande a sensibilidade e proporciona vivências sexuais mais intensas.
          Aceita receber massagem tântrica de seus clientes. Este é um tipo de massagem que expande a sensibilidade e proporciona vivências sexuais mais intensas.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox15" type="checkbox" name="nduplapenetra" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nduplapenetra} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox15" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Dupla Penetração</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button15
            })} onClick={() => { setButton15(!button15) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button15,
          'opacity-100': button15
        })}>
          Participa de dupla penetração em seus clientes.
          Aceita receber dupla penetração de seus clientes.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox16" type="checkbox" name="ntriplapenetra" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.ntriplapenetra} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox16" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Tripla Penetração</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button16
            })} onClick={() => { setButton16(!button16) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button16,
          'opacity-100': button16
        })}>
          Participa de tripla penetração em seus clientes.
          Aceita receber tripla penetração de seus clientes.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox17" type="checkbox" name="ndomina" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.ndomina} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox17" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Dominação</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button17
            })} onClick={() => { setButton17(!button17) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button17,
          'opacity-100': button17
        })}>
          Faz dominação em seus clientes. É um conjunto de comportamentos, costumes e rituais que envolvem submissão de seu cliente sobre a sua dominação.
          Aceita receber dominação de seus clientes, agindo com submissão. É um conjunto de comportamentos, costumes e rituais que envolvem a sua submissão sobre a dominação de seus clientes.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox18" type="checkbox" name="nusaFantasia" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nusaFantasia} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox18" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Usa Roupas Fantasiosas ou Uniformes</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button18
            })} onClick={() => { setButton18(!button18) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button18,
          'opacity-100': button18
        })}>
          Utiliza fantasias e uniformes para sensualização e excitação junto de seus clientes.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox19" type="checkbox" name="nfazRolePlay" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nfazRolePlay} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox19" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Faz Role Play</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button19
            })} onClick={() => { setButton19(!button19) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button19,
          'opacity-100': button19
        })}>
          Faz encenações e cria histórias para sensualização e excitação junto de seus clientes.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox20" type="checkbox" name="npodeFilma" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.npodeFilma} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox20" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Permite Filmagem</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button20
            })} onClick={() => { setButton20(!button20) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button20,
          'opacity-100': button20
        })}>
          Permite que seus clientes realizem filmagens durante relações sexuais.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox21" type="checkbox" name="nvoyerismo" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nvoyerismo} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox21" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Sexo com voyeurismo/ser voyeur</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button21
            })} onClick={() => { setButton21(!button21) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button21,
          'opacity-100': button21
        })}>
          Faz voyerismo com seus clientes. Voyerismo é a prática em que você assiste seus clientes tendo relações sexuais.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox22" type="checkbox" name="nbandag" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nbandag} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox22" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Bondage</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button22
            })} onClick={() => { setButton22(!button22) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button22,
          'opacity-100': button22
        })}>
          Faz voyerismo com seus clientes. Voyerismo é a prática em que você assiste seus clientes tendo relações sexuais.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox23" type="checkbox" name="nsadomaso" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nsadomaso} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox23" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Sadomasoquismo</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button23
            })} onClick={() => { setButton23(!button23) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button23,
          'opacity-100': button23
        })}>
          Faz sadismo em seus clientes. Sadismo faz parte do sadomasoquismo, e é a prática consensual de causar dor, ferir e humilhar seus clientes.
          Aceita receber sadismo de seus clientes. Sadismo e Masoquismo fazem parte do sadomasoquismo. Sadismo e é a prática consensual de causar dor, ferir e humilhar. Masoquismo é a prática consensual de sentir dor, ser ferido(a) e humilhado(a).
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox24" type="checkbox" name="nfisting" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nfisting} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox24" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Fisting</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button24
            })} onClick={() => { setButton24(!button24) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button24,
          'opacity-100': button24
        })}>
          Faz fisting em seus clientes. Fisting é a prática de introduzir sua mão na vagina ou ânus de seus clientes.
          Aceita receber fisting de seus clientes. Fisting é a prática em que seus clientes introduzem a mão na sua vagina ou em seu ânus.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox25" type="checkbox" name="nfaceFuck" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nfaceFuck} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox25" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Facefuck</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button25
            })} onClick={() => { setButton25(!button25) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button25,
          'opacity-100': button25
        })}>
          Faz facefucking em seus clientes. Facefucking é a prática de receber sexo oral de seus clientes de forma submissa e muito intensa.
          Aceita receber facefucking de seus clientes. Facefucking é a prática de fazer sexo oral em seus clientes de forma submissa e muito intensa.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox26" type="checkbox" name="nquirofilia" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nquirofilia} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox26" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Quirofilia</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button26
            })} onClick={() => { setButton26(!button26) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button26,
          'opacity-100': button26
        })}>
          Faz quirofilia em seus clientes. Quirofilia é a prática de idolatrar mãos de seus clientes.
          Aceita receber quirofilia de seus clientes. Quirofilia é a prática de ter suas mãos idolatradas por seus clientes.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox27" type="checkbox" name="nsquirt" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nsquirt} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox27" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Squirt</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button27
            })} onClick={() => { setButton27(!button27) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button27,
          'opacity-100': button27
        })}>
          Squirt é o termo usado para representar o fluido expelido pela vagina quando em grandes quantidades.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox28" type="checkbox" name="nchuvaDourada" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nchuvaDourada} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox28" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Chuva Dourada</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button28
            })} onClick={() => { setButton28(!button28) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button28,
          'opacity-100': button28
        })}>
          Faz chuva dourada em seus clientes. Chuva dourada é a prática de urinar sobre seus clientes.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox29" type="checkbox" name="nchuvaMarro" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nchuvaMarro} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox29" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Chuva Marrom</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button29
            })} onClick={() => { setButton29(!button29) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button29,
          'opacity-100': button29
        })}>
          Faz chuva marrom em seus clientes. Chuva marrom é a prática de defecar sobre seus clientes.
          Aceita receber chuva marrom de seus clientes. Chuva marrom é a prática em que os clientes defecam sobre você.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox30" type="checkbox" name="ntrampling" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.ntrampling} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox30" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Trampling</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button30
            })} onClick={() => { setButton30(!button30) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button30,
          'opacity-100': button30
        })}>
          Faz trampling em seus clientes. Trampling é a prática de pisotear seus clientes.
          Aceita receber trampling de seus clientes. Trampling é a prática de ser pisoteado(a) por seus clientes.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox31" type="checkbox" name="nacompanha" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nacompanha} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox31" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Acompanhante</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button31
            })} onClick={() => { setButton31(!button31) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button31,
          'opacity-100': button31
        })}>
          Companhia para encontros, festas e eventos.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>

      <div className="flex md:w-4/12 flex-col p-2 ">
        <div className="flex items-center w-full ">
          <div className="w-5 h-5 ">
            <input id="ncheckbox32" type="checkbox" name="nviagem" className="hidden peer " onChange={handleCheckboxChange} checked={servicesOffers.nviagem} />
            <span className="w-4 h-4 inline-block mr-2 border-2 border-gray-400 peer-checked:bg-gcor peer-checked:border-transparent rounded-full" />
          </div>
          <label htmlFor="ncheckbox32" className="flex w-full font-ral text-center">
            <h4 className="cursor-pointer  font-ral font-semibold text-center" >Viagem</h4>
          </label>
          <div className="transition">
            <IoIosArrowDropdown size={24} className={clsx("drop-shadow cursor-pointer transition-transform transform ", {
              'rotate-180': button32
            })} onClick={() => { setButton32(!button32) }} />
          </div>
        </div>
        <p className={clsx(`font-robotoc  italic  transition-all duration-500 ease-in-out`, {
          'opacity-0': !button32,
          'opacity-100': button32
        })}>
          Aceita viajar com seus clientes.
        </p>
        <span className="w-full border-b-2 "></span>
      </div>



    </div>
  );
}


export default DontOffers;



/*
const UserPreferences = () => {
  const [preferences, setPreferences] = useState({
    likesIceCream: false, likesChocolate: false, likesMovies: false, // Adicione mais preferências conforme necessário });
    const handleCheckboxChange = (event) => { const { name, checked } = event.target; setPreferences((prevPreferences) => ({ ...prevPreferences, [name]: checked, })); }; return( <div> <h3>Preferências do Usuário</h3> <label> <input type="checkbox" name="likesIceCream" checked={preferences.likesIceCream} onChange={handleCheckboxChange} /> Gosta de Sorvete </label> <label> <input type="checkbox" name="likesChocolate" checked={preferences.likesChocolate} onChange={handleCheckboxChange} /> Gosta de Chocolate </label> <label> <input type="checkbox" name="likesMovies" checked={preferences.likesMovies} onChange={handleCheckboxChange} /> Gosta de Filmes </label>  <p>Preferências: {JSON.stringify(preferences)}</p> </div > );
}; export default UserPreferences;
 */
