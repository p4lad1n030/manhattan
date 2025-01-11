import { useParams } from "react-router-dom";
import { ProfileProps } from "../home";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services";
import { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import { GiBodyHeight, GiWeight } from "react-icons/gi";
import { FaDeaf, FaEye, FaRegAddressCard } from "react-icons/fa";
import { LiaSmokingSolid } from "react-icons/lia";
import { SiBritishairways } from "react-icons/si";
import { ImScissors } from "react-icons/im";
import { LuFootprints } from "react-icons/lu";



const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState<ProfileProps>();
  const [noOffers, setNoOffers] = useState<string[]>([]);
  const handleData = async () => {
    if (!id) return; // Certifique-se de que o id é válido 
    const docRef = doc(db, "profiles", id as string);
    try {
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        console.log("No such document!"); return;
      }
      const data: ProfileProps = {
        age: docSnap.data()!.age,
        altura: docSnap.data()!.altura,
        docId: docSnap.data()!.docId,
        duas: docSnap.data()!.duasHoras,
        etnia: docSnap.data()!.etnia,
        eyes: docSnap.data()!.eyes,
        gender: docSnap.data()!.gender,
        colorHair: docSnap.data()!.hair,
        idioma: docSnap.data()!.idioma,
        img: docSnap.data()!.img,
        meia: docSnap.data()!.meiaHora,
        message: docSnap.data()!.message,
        name: docSnap.data()!.name,
        peso: docSnap.data()!.peso,
        piercing: docSnap.data()!.piercing,
        services: docSnap.data()!.services,
        silicone: docSnap.data()!.silicone,
        smoking: docSnap.data()!.smoking,
        tamCab: docSnap.data()!.tamCab,
        tamPe: docSnap.data()!.tamPe,
        uma: docSnap.data()!.umaHora,
      }
      setUser(data)
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  const dontOffers = () => {
    let alServices = ['Sexo Vaginal com Preservativo', 'sexo Oral', 'Sexo Anal com Preservativo', 'Beijo Grego', 'Beijo na Boca', 'Masturbação', 'Sexo Oral sem Preservativo', 'Sexo Virtual', 'Penetração com Acessórios Sexuais', 'Utiliza Acessórios Eróticos', 'Podolatria', 'Striptease', 'Massagem Tradicional', 'Massagem Tântrica', 'Dupla Penetração', 'Tripla Penetração', 'Dominação', 'Usa Fantasias ou Uniformes', 'Faz Role Play', 'Permite Filmagens', 'Sexo com voyeurismo/ser voyeur', 'Bondage', 'Sadomasoquismo', 'Fisting', 'FaceFuck', 'Quirofilia', 'Squirt', 'Chuva Dourada', 'Chuva Marrom', 'Trampling', 'Acompanhante', 'Viagem']

    if (user?.services != undefined) {
      const job = user?.services.map(s=>s) || []
      const dontOfferServices = alServices.filter(sv => !job.includes(sv))
      setNoOffers(dontOfferServices)
    }
  }

  useEffect(() => {
    handleData();
    dontOffers()
  
  }, [user]);

  return (
    <article className="p-1">
      <Menu />
      <div className="flex md:flex-row flex-col p-1 md:gap-1 rounded-lg">
        <div className=" p-1 md:w-1/3 bg-gcor05 flex flex-col items-center rounded-lg">
          <img src={user?.img[0].url} alt={user?.img[0].name} className="h-52 w-52 rounded-lg border-2" />
          <h1 className="text-3xl font-ral font-bold text-white drop-shadow-md">{user?.name}</h1>

          <div className="flex flex-col justify-around h-full gap-2 w-full">

            <div className="flex w-full justify-around items-center">
              <GiWeight size={54} className="text-white drop-shadow-md " /> <p className="font-robotoc font-medium text-2xl text-white drop-shadow-md text-center">{Number(user?.peso) / 100} kg</p>
            </div>

            <div className="flex w-full justify-around items-center">
              <GiBodyHeight size={54} className="text-white drop-shadow-md " />
              <p className="font-robotoc font-medium text-2xl text-white drop-shadow-md text-center">{Number(user?.altura) / 100}cm</p>
            </div>

            <div className="flex w-full justify-around items-center">
              <FaRegAddressCard size={54} className="text-white drop-shadow-md " />
              <p className="font-robotoc font-medium text-2xl text-white drop-shadow-md text-center">{user?.age} Anos</p>
            </div>

            <div className="flex w-full justify-around items-center">
              <LiaSmokingSolid size={54} className="text-white drop-shadow-md " />
              <p className="font-robotoc font-medium text-2xl text-white drop-shadow-md text-center">{user?.smoking}</p>
            </div>

            <div className="flex w-full justify-around items-center">
              <FaEye size={54} className="text-white drop-shadow-md " />
              <p className="font-robotoc font-medium text-2xl text-white drop-shadow-md text-center">{user?.eyes}</p>
            </div>

            <div className="flex w-full justify-around items-center">
              <SiBritishairways size={54} className="text-white drop-shadow-md " />
              <p className="font-robotoc font-medium text-2xl text-white drop-shadow-md text-center">{user?.colorHair}</p>
            </div>

            <div className="flex w-full justify-around items-center">
              <ImScissors size={54} className="text-white drop-shadow-md " />
              <p className="font-robotoc font-medium text-2xl text-white drop-shadow-md text-center">{user?.tamCab}</p>
            </div>

            <div className="flex w-full justify-around items-center">
              <FaDeaf size={54} className="text-white drop-shadow-md " />
              <p className="font-robotoc font-medium text-2xl text-white drop-shadow-md text-center">{user?.piercing}</p>
            </div>

            <div className="flex w-full justify-around items-center">
              <LuFootprints size={54} className="text-white drop-shadow-md " />
              <p className="font-robotoc font-medium text-2xl text-white drop-shadow-md text-center">{user?.tamPe}</p>
            </div>
          </div>

        </div>

        <div className={`w-full md:w-2/3 flex flex-col gap-1 p-1 rounded-lg`}>

          <div className="bg-gcor05 w-full ">
            <h1 className="text-white text-2xl font-ral font-bold text-center">O que ela topa fazer com você</h1>
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 p-1">
              {user?.services ?
                user?.services.sort().map((s, i) => (
                  <div className="border-b-2 border-r-2 border-l-2 rounded-lg shadow-md" key={i}>
                    <p className="text-white text-center font-robotoc font-medium text-2xl drop-shadow-md">{s}</p>
                  </div>
                )) : <p className="text-white text-center font-robotoc font-medium text-2xl drop-shadow-md">Nenhum serviço cadastrado</p>}
            </div>
          </div>

           <div className="bg-gcor05  w-full">
            <h1 className="text-white text-2xl font-ral font-bold text-center">O que ela não topa fazer com você</h1>
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 p-1">
              {noOffers.sort().map((s, i) => (
                <div className="border-b-2 border-r-2 border-l-2 rounded-lg shadow-md" key={i}>
                  <p className="text-white text-center font-robotoc font-medium text-2xl drop-shadow-md">{s}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
      <h2 className="text-center font-ral font-bold drop-shadow-md text-4xl" >Que tal dar uma espiada no que espera por você...</h2>
      <div className="bg-gcor05 flex flex-wrap items-center justify-center p-4 gap-3 rounded-lg">
        {user?.img.map((img, index) => (
          <div className="" key={index}>
            <img key={index} src={img.url} alt
              ={img.name} className="rounded-md h-80 w-52 border-white border-2" />
          </div>
        ))}
      </div>
    </article>
  );
}

export default Profile;