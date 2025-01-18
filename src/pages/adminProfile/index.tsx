import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Footer from "../../components/footer";
import Menu from "../../components/Menu";
import { auth, db } from "../../services";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProfileProps } from "../home";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";
import toast from './../../../node_modules/react-hot-toast/src/index';
import { TbTrashFilled } from "react-icons/tb";
import Input from "../../components/Input";
import { PgProps } from "../createprofile/createProfile";

// import toast from ';




const AdminProfile = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState<ProfileProps>();
  const [money, setMoney] = useState<string>('');
  const [date, setDate] = useState<string>('')
  const [quantity, setQuantity] = useState<string>('');
  const [pgs, setPgs] = useState<PgProps[]>([]);
  const [trigger, setTrigger] = useState<boolean>(false);



  // const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setDate(event.target.value ? new Date(event.target.value) : null);
  // };



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
  const addPg = (data: string, money: string, quantidade: string) => {
    if (!data || !money || !quantidade) {
      toast.error('Preencha todos os Campos!')
      return
    }
    console.log('Data: ', data, 'money: ', money, 'qnt: ', quantidade);
    let obj: PgProps = {
      date: data,
      money,
      quantity
    }
    setPgs((prev) => {
      const newState = [...prev, obj]
      return newState
    })

  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.uid !== '9ZDHa32eMlWJuvYk7AGmWhmN5NM2') {
        toast.error('Acesso negado')
        navigate("/", { replace: true });
      }
    })
    return () => unsubscribe();
  }, [id]);

  useEffect(() => {

    const unsub = onSnapshot(doc(db, "profiles", id as string), (doc) => {

      try {
        const data: ProfileProps = {
          age: doc.data()!.age,
          phone: doc.data()!.phone,
          altura: doc.data()!.altura,
          docId: doc.data()!.docId,
          duas: doc.data()!.duasHoras,
          etnia: doc.data()!.etnia,
          eyes: doc.data()!.eyes,
          gender: doc.data()!.gender,
          colorHair: doc.data()!.hair,
          idioma: doc.data()!.idioma,
          img: doc.data()!.img,
          meia: doc.data()!.meiaHora,
          message: doc.data()!.message,
          name: doc.data()!.name,
          peso: doc.data()!.peso,
          piercing: doc.data()!.piercing,
          services: doc.data()!.services,
          silicone: doc.data()!.silicone,
          smoking: doc.data()!.smoking,
          tamCab: doc.data()!.tamCab,
          tamPe: doc.data()!.tamPe,
          uma: doc.data()!.umaHora,
          programas: doc.data()!.programas
        }
        setUser(data)
        console.log('com slice' ,user?.programas.map(d => d.date)[0].toString().slice(18, 28));
        console.log('sem slice' ,user?.programas.map(d => d.date)[0].toString());
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    });


    // pgAdd(pgs, id!).then(() => {
    //   toast.success('Atualização Feita com sucesso!')
    // }).catch((err) => {
    //   toast.error(err)
    // });
    
    return () => unsub()

  }, []);
  useEffect(() => {
    if (pgs.length < 1) {
      return
    }

    const pgAdd = async (newProgramas: PgProps[], id: string) => {
      try {
        console.count('pgAdd'); const docRef = doc(db, "profiles", id); // Recuperar o documento atual 
        const docSnap = await getDoc(docRef); let existingProgramas: PgProps[] = [];
        if (docSnap.exists()) { existingProgramas = docSnap.data().programas || []; } // Adicionar os novos programas ao array existente 
        const updatedProgramas = [...existingProgramas, ...newProgramas]; // Atualizar o documento com o novo array de programas 
        await setDoc(docRef, { programas: updatedProgramas }, { merge: true });
        toast.success('Atualização Feita com sucesso!')
      }
      catch (error) { console.log(error); return error; }
      setPgs([])
    };
    pgAdd(pgs, id as string)
  }, [trigger]);
  return (
    <>
      <div className="flex flex-col mb-16">


        <Menu />
        <div className="flex md:flex-row flex-col p-1 md:gap-1 rounded-lg">
          <div className=" p-1 md:w-1/3 bg-gcor05 flex flex-col items-center rounded-lg">
            <img src={user?.img[0].url} alt={user?.img[0].name} className="h-52 w-52 rounded-lg border-2" />

            <h1 className="text-5xl font-ral font-bold text-white drop-shadow-md">{user?.name}</h1>
            <h3 className="text-3xl font-ral font-bold text-white drop-shadow-md">
              <Link to={`https://api.whatsapp.com/send?phone=${user?.phone}`}>{user?.phone} </Link>
            </h3>

            <div className="flex flex-col justify-around items-center h-full gap-2 w-full">
              <button type="button" className="flex gap-1  p-2  hover:text-red-600 text-white border-2 rounded-lg bg-red-600 hover:bg-white hover:border-red-600" aria-label="Excluir">Apagar Conta <TbTrashFilled size={24} /></button>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-around items-center w-full md:p-8 mb-5 overflow-x-auto">
            <div className="bg-gcor05 flex flex-col p-1  justify-center items-center rounded-md w-full">
              <div className="flex flex-col md:flex-row md:gap-6 p-1 w-4/5 md:w-full">
                <Input type="text" placeholder="Quantidade" onChange={(e) => setQuantity(e.target.value)} />
                <Input type="text" onChange={(e) => numberFormat(e.target.value, setMoney)} value={money} />
                <Input type="date" onChange={(e)=>setDate(e.target.value)} />
              </div>
              <button type="button" className="bg-vviolet p-2 text-white rounded-xl hover:bg-white hover:text-ppink font-robotoc border-white border hover:border-vviolet mb-2 shadow-lg" onClick={() => {
                addPg(date, money, quantity)
                setTrigger(!trigger)
                
               }}>Adcionar</button>
            </div>

          </div>

        </div>
        <div className=" flex flex-wrap justify-around items-center w-full md:p-8 mb-5 overflow-x-auto">
          <table className="min-w-full  p-2 shadow-lg">
            <thead className="bg-vviolet text-white font-ral">
              <tr>

                <th className="border-r-2 whitespace-nowrap">Valor</th>
                <th className="border-r-2 whitespace-nowrap">Programas </th>
                <th className="whitespace-nowrap">Data </th>
              </tr>
            </thead>
            <tbody className="text-center font-robotoc bg-ppink06 text-white">


              {user?.programas ?
                user?.programas.map((p,i) => (<tr className="border-2 " key={i}>
                  <td className="font-light px-6 py-4 whitespace-nowrap">{p.money}</td>
                  <td className="font-light px-6 py-4 whitespace-nowrap">{p.quantity}</td>
                  <td className="font-light px-6 py-4 whitespace-nowrap">{`${p.date}`}</td>
                </tr>
                )
                ) :
                <tr className="border-2 ">
                  <td colSpan={3}><p className="font-robotoc text-center font-medium text-base w-full">Ainda não a dados</p></td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminProfile;