import { ChangeEvent, useEffect, useState } from "react";


import { MdAddPhotoAlternate } from "react-icons/md";
// import DontOffers from "../../components/DontOffers";
import Input from "../../components/Input";
import Menu from "../../components/Menu";
import ServicesOffers from './../../components/servicesOfers/index';
import Footer from "../../components/footer";
// funções DB
import { appearanceAdd, indentitiAdd, messageAdd, servicesAdd } from "./createProfile";

// redux
import { useSelector } from "react-redux";
import { useloginSlice } from "../../redux/loginSlice";
import toast from './../../../node_modules/react-hot-toast/src/index';
import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../services";



interface ImageProps {
  uid: string;
  name: string;
  previewUrl: string;
  url: string;
}
 
const CreateProfile = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [peso, setPeso] = useState<string>('');
  const [altura, setAltura] = useState<string>('');
  const [idioma, setIdioma] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [smoking, setSmoking] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [eyes, setEyes] = useState<string>('');
  const [tamCabelo, setTamCabelo] = useState<string>('');
  const [colorHair, setColorHair] = useState<string>('');
  const [etnia, setEtnia] = useState<string>('');
  const [silicone, setSilicone] = useState<string>('');
  const [tampe, setTampe] = useState<string>('');
  const [piercing, setPiercing] = useState<string>('');
  const [meiaHora, setMeiaHora] = useState<string>('');
  const [umaHora, setUmaHora] = useState<string>('');
  const [duasHoras, setDuasHoras] = useState<string>('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const islogged = useSelector(useloginSlice)

  const fn = () => {
    return Math.random().toString(36).substr(2, 9)
  }

  const addidentify = (name: string, age: string, peso: string, altura: string, idioma: string, gender: string, smoking: string) => {
    indentitiAdd({ name, age, peso, altura, idioma, gender, smoking }, islogged.userLogged).then((result) => {
      console.log('result :>> ', result);
      toast.success('Identificação salva com sucesso!')
    }).catch((err) => {
      console.log('err :>> ', err);
      toast.error(err.message)
    }).finally(() => {

    })
  }

  const addMessage = (message: string) => {
    messageAdd({ message }, islogged.userLogged).then((result) => {
      console.log('result :>> ', result);
      toast.success('Mensagem salva com sucesso!')
    }).catch((err) => {
      console.log('err :>> ', err);
      toast.error(err.message)
    }).finally(() => {
      console.log('message :>> ', message);
    })

  }

  const addAppearance = (eyes: string, tamCab: string, colorHair: string, etnia: string, silicone: string, tamPe: string, piercing: string) => {
    appearanceAdd({ eyes, tamCab, colorHair, etnia, silicone, tamPe, piercing }, islogged.userLogged).then((result) => {
      console.log('result :>> ', result);
      toast.success('Aparência salva com sucesso!')
    }).catch((err) => {
      console.log('err :>> ', err);
      toast.error(err.message)
    }).finally(() => {
      console.log('eyes :>> ', eyes);
    })
  }

  const handlePreferenceChange = (service: string) => {
    setSelectedServices((prev) => prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service]);
  };

  const addServices = (services: string[])=> {
    servicesAdd(services, islogged.userLogged).then((result) => {
      console.log('result :>> ', result);
      toast.success('Serviços salvos com sucesso!')
    }
    ).catch((err) => {
      console.log('err :>> ', err);
      toast.error(err.message)
    }).finally(() => {
      console.log('selectedServices :>> ', selectedServices);
    })
  }
  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0]
      if (img) {
      //  console.log('img :>> ', img);
        await handleUpload(img)
      } else {
        toast.error(' Selecione uma imagem válida')
      }
    } else {
      return;
    }
  }
  const handleUpload = async (image: File) => {
    const userId = islogged?.userLogged
    if (!islogged?.userLogged) {
      return
    }
    const imgName = `${fn() }-${image.name}`
    const uploadRef = ref(storage, `images/${userId}/${imgName}`)
    const uploadTask = uploadBytesResumable(uploadRef,  image)
    console.log('islogged.userLogged :>> ', islogged.userLogged);
    console.log('img :>> ', image);
  }


  // const verifyLogin = ()=> {
  //  console.log('islogged :>> ', islogged.userLogged);
  // }

  const formatarMoeda = (valor: any) => {
    if (!valor) return ''
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,

    }).format(valor)
  }
  const numberFormat = (e: string, usestate: React.Dispatch<React.SetStateAction<string>>) => {
    const valor = e.replace(/\D/g, '') // Remove tudo que não é dígito
    usestate(valor ? formatarMoeda(parseFloat(valor) / 100) : '') // Divide por 100 para considerar os centavos
  }
  useEffect(() => {
    console.log(selectedServices);
    console.count('createProfile');
  }, [selectedServices]);

  return (
    <>

      <Menu />
      <section className="p-1 pb-16">
        <article className="flex flex-col bg-gcor05 p-1 rounded relative ">
          <h1 className="font-gvibes text-5xl my-5 md:left-0 text-center text-white drop-shadow-md "> Garota, aqui é seu espaço mostre quem você quer que eles pensem que você é!</h1>

          <div className="flex flex-col items-center justify-center bg-white rounded-lg mb-5">
            <div className="w-full md:flex  items-center relative  ">
              <h1 className="font-ral italic bg-white absolute -top-3  md:left-0 rounded-lg px-1">Pra começar, identifique-se, garota</h1>
              <div className="flex flex-col h-32  my-1 md:mt-8 justify-center items-center md:w-1/3">
                <Input placeholder="Nome" onChange={(e) => { setName(e.target.value) }} value={name} />
                <Input placeholder=" Idade" onChange={(e) => { setAge(e.target.value) }} value={age} />
              </div>

              <div className="flex flex-col h-32 mt-0  md:mt-8 justify-center items-center md:w-1/3">
                <Input placeholder="Peso" onChange={(e) => { numberFormat(e.target.value, setPeso) }} value={`${peso.slice(2).replace(',', '.')}`} />
                <Input placeholder="Altura...Ex:1,80" onChange={(e) => { numberFormat(e.target.value, setAltura) }} value={`${altura.slice(2).replace('.', ',')}`} />
                <select className="border border-zinc-700 w-[198.4px] md:w-3/4 shadow-lg h-9 rounded-md outline-none px-2 -mb-1 md:mb-3 placeholder:font-robotoc" name="select" aria-label="idioma" onChange={(e) => { setIdioma(e.target.value) }} value={idioma}>
                  <option value="select" >Selecione um idioma</option>
                  <option value="Portugês - BR" >Portugês - BR</option>
                  <option value="Inglês - USA">Inglês - USA</option>
                  <option value="Espanhol - ES">Espanhol - ES</option>
                </select>
              </div>
              <div className="flex flex-col h-32 gap-1 my-1 md:mt-8 justify-center items-center md:w-1/3">
                <select className="border border-zinc-700 w-[198.4px] md:w-3/4 shadow-lg h-9 rounded-md outline-none px-2 placeholder:font-robotoc mb-3 " name="select" aria-label="idioma" onChange={(e) => { setGender(e.target.value) }} value={gender}>
                  <option value="select" >Selecione um sexo</option>
                  <option className="hover:bg-gcor05" value="Mulher - Sis">Mulher - Sis</option>
                  <option value="Trans">Trans</option>

                </select>
                <Input placeholder=" Fumante?" onChange={(e) => { setSmoking(e.target.value) }} value={smoking} />
              </div>
            </div>
            <button type="button" className="bg-vviolet p-2 text-white rounded-xl hover:bg-white hover:text-ppink font-robotoc border-white border hover:border-vviolet mb-2 shadow-lg" onClick={() => { addidentify(name, age, peso, altura, idioma, gender, smoking) }}>Salvar Indentificação</button>
          </div>

          <div className=" flex flex-col items-center justify-center bg-white rounded-lg mb-5">
            <div className="w-full flex flex-col justify-center items-center relative h-44 ">
              <h1 className="font-ral italic bg-white absolute -top-3  left-0 rounded-lg  px-1">Deixe um recado pra atiçar a imaginação deles...</h1>
              <textarea className="border border-zinc-700 mt-8 md:mt-0 rounded-md w-4/5 outline-none shadow-lg placeholder:p-1" onChange={(e) => { setMessage(e.target.value); }} rows={5} cols={33} placeholder="Provoque e Prometa...." value={message} />
            </div>
            <button type="button" className="bg-vviolet p-2 text-white rounded-xl hover:bg-white hover:text-ppink font-robotoc border-white border hover:border-vviolet mb-2 shadow-lg" onClick={() => {
              addMessage(message)
            }}>Salvar Recado</button>
          </div>
          <div className=" flex flex-col items-center justify-center bg-white rounded-lg mb-5">
            <div className="w-full md:flex  items-center relative ">
              <h1 className="font-ral italic bg-white absolute -top-3  md:left-0 rounded-lg text-center px-1">Agora descreva quem é você, garota!</h1>

              <div className="flex flex-col h-32  mt-4 md:my-1 md:mt-8 justify-center items-center md:w-1/3">
                <Input placeholder="Cor dos olhos" onChange={(e) => { setEyes(e.target.value) }} value={eyes} />
                <Input placeholder=" Cor do cabelo" onChange={(e) => { setColorHair(e.target.value) }} value={colorHair} />
              </div>
              <div className="flex flex-col h-32  my-1 md:mt-8 justify-center items-center md:w-1/3">
                <Input placeholder="Cumprimento do cabelo" onChange={(e) => { setTamCabelo(e.target.value) }} value={tamCabelo} />
                <Input placeholder="Etnia... Ex: Branca, Parda" onChange={(e) => { setEtnia(e.target.value) }} value={etnia} />
                <Input placeholder="Silicone" onChange={(e) => { setSilicone(e.target.value) }} value={silicone} />
              </div>
              <div className="flex flex-col h-32  my-1 md:mt-8 justify-center items-center md:w-1/3">
                <Input placeholder="Tamanho do pé" onChange={(e) => { setTampe(e.target.value) }} value={tampe} />
                <Input placeholder="Piercing?" onChange={(e) => { setPiercing(e.target.value) }} value={piercing} />
              </div>

            </div>
            <button type="button" className="bg-vviolet p-2 text-white rounded-xl hover:bg-white hover:text-ppink font-robotoc border-white border hover:border-vviolet mb-2 shadow-lg" onClick={() => {
              addAppearance(eyes, tamCabelo, colorHair, etnia, silicone, tampe, piercing)
            }}>Salvar Descrição</button>
          </div>
          <div className="w-full md:flex  items-center relative bg-white  rounded-lg mb-5 ">
            <h1 className="font-ral italic bg-white absolute -top-3  md:left-0 rounded-lg text-center px-1">O que você topa fazer, garota?</h1>
            <div className="flex flex-col justify-center items-center">
            <ServicesOffers onPreferenceChange={handlePreferenceChange} />
              <button type="button" className="bg-vviolet p-2 text-white rounded-xl hover:bg-white hover:text-ppink font-robotoc border-white border hover:border-vviolet mb-2 shadow-lg" onClick={() => {
                addServices(selectedServices)
              }}>Salvar Serviços</button>
              </div>
          </div>

          {/* <div className="w-full md:flex  items-center relative bg-white  rounded-lg mb-5 ">
            <h1 className="font-ral italic bg-white absolute -top-3  md:left-0 rounded-lg text-center px-1">O que você não topa fazer, garota?</h1>

            <DontOffers />

          </div> */}

          <div className="w-full flex flex-wrap items-center justify-center md:flex-col md:justify-around relative bg-white  rounded-lg mb-5 p-1">
            <h1 className="font-ral italic bg-white absolute -top-3  left-0 rounded-lg  px-1">Agora arrase! Escolha as suas melhores fotos, garota</h1>
            <div className="mt-8 flex justify-around items-center w-full mb-5">
              <input id="file" type="file" className="hidden peer" aria-label="file" onChange={handleFile}/>
              <label htmlFor="file" className="peer cursor-pointer flex justify-center items-center bg-gcor text-white rounded-lg p-2 mt-5 md:mt-0 shadow-lg">
                <MdAddPhotoAlternate size={48} />
              </label>
            </div>
            <div className="bg-gcor05 w-full  rounded-lg flex flex-wrap justify-center items-center p-2">
              <img src="https://placehold.co/300x200?text=Sua+Foto+Aqui" alt="" className=" border-2 border-white rounded-xl m-1" />
              <img src="https://placehold.co/300x200?text=Sua+Foto+Aqui" alt="" className=" border-2 border-white rounded-xl m-1" />
              <img src="https://placehold.co/300x200?text=Sua+Foto+Aqui" alt="" className=" border-2 border-white rounded-xl m-1" />
              <img src="https://placehold.co/300x200?text=Sua+Foto+Aqui" alt="" className=" border-2 border-white rounded-xl m-1" />
              <img src="https://placehold.co/300x200?text=Sua+Foto+Aqui" alt="" className=" border-2 border-white rounded-xl m-1" />
              <img src="https://placehold.co/300x200?text=Sua+Foto+Aqui" alt="" className=" border-2 border-white rounded-xl m-1" />
            </div>

          </div>

          <div className=" flex flex-col items-center justify-center bg-white rounded-lg mb-5">
            <div className="w-full md:flex justify-center  items-center relative ">
              <h1 className="font-ral italic bg-white absolute -top-3  md:left-0 rounded-lg text-center px-1">Agora quanto custa a sua companhia, garota?</h1>
              <div className="mt-10 flex flex-wrap justify-around gap-1 items-center w-full md:w-1/2 mb-5">
                <Input placeholder="30 min" onChange={(e) => { numberFormat(e.target.value, setMeiaHora) }} value={meiaHora} />
                <Input placeholder="1 hora" onChange={(e) => { numberFormat(e.target.value, setUmaHora) }} value={umaHora} />
                <Input placeholder="2 hora" onChange={(e) => { numberFormat(e.target.value, setDuasHoras) }} value={duasHoras} />
              </div>
            </div>
            <button type="button" className="bg-vviolet p-2 text-white rounded-xl hover:bg-white hover:text-ppink font-robotoc border-white border hover:border-vviolet mb-2 shadow-lg">Salvar Preços</button>
          </div>
          <div className="w-full md:flex justify-center  items-center relative bg-white  rounded-lg mb-5 ">
            <h1 className="font-ral italic bg-white absolute -top-3  md:left-0 rounded-lg text-center px-1">Financeiro</h1>
            <div className="mt-8 flex flex-wrap justify-around items-center w-full md:p-8 mb-5 overflow-x-auto">
              <table className="min-w-full  p-2 shadow-lg">
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
