import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Footer from "../../components/footer";
import Menu from "../../components/Menu";
import { auth, db } from "../../services";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProfileProps } from "../home";
import { doc, getDoc } from "firebase/firestore";
import toast from './../../../node_modules/react-hot-toast/src/index';
import { TbTrashFilled } from "react-icons/tb";
import Input from "../../components/Input";
import { pgAdd, PgProps } from "../createprofile/createProfile";

// import toast from ';



const AdminProfile = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState<ProfileProps>();
  const [money, setMoney] = useState<string>('');
  const [date, setDate] = useState<Date | null>(null)
  const [quantity, setQuantity] = useState<string>('');
  const [pgs, setPgs] = useState<PgProps[]>([]);

  const handleData = async () => {
    if (!id) return; // Certifique-se de que o id é válido 
    const docRef = doc(db, "profiles", id as string);
    try {
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        console.log("No such document!");
        return;
      }
      const data: ProfileProps = {
        age: docSnap.data()!.age,
        phone: docSnap.data()!.phone,
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
        programas: docSnap.data()!.programas

      }
      setUser(data)
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }
  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => { setDate(event.target.value ? new Date(event.target.value) : null); };

  

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
    console.log(pgs);
    handleData()
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.uid !== '9ZDHa32eMlWJuvYk7AGmWhmN5NM2') {
        toast.error('Acesso negado')
        navigate("/", { replace: true });
      }
    })
    return () => unsubscribe();
  }, [pgs]);
  return (
    <>
      <div className="flex flex-col mb-16">


        <Menu />
        <div className="flex md:flex-row flex-col p-1 md:gap-1 rounded-lg">
          <div className=" p-1 md:w-1/3 bg-gcor05 flex flex-col items-center rounded-lg">
            <img src={user?.img[0].url} alt={user?.img[0].name} className="h-52 w-52 rounded-lg border-2" />

            <h1 className="text-5xl font-ral font-bold text-white drop-shadow-md">{user?.name}</h1>
            <h3 className="text-3xl font-ral font-bold text-white drop-shadow-md">
              <Link to={`https://api.whatsapp.com/send?phone=${user?.phone}`}>{user?.phone}</Link>
            </h3>

            <div className="flex flex-col justify-around items-center h-full gap-2 w-full">
              <button type="button" className="flex gap-1  p-2  hover:text-red-600 text-white border-2 rounded-lg bg-red-600 hover:bg-white hover:border-red-600" aria-label="Excluir">Apagar Conta <TbTrashFilled size={24} /></button>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-around items-center w-full md:p-8 mb-5 overflow-x-auto">
            <table className="min-w-full  p-2 shadow-lg">
              <thead className="bg-vviolet text-white font-ral">
                <tr>

                  <th className="border-r-2 whitespace-nowrap">Preço</th>
                  <th className="whitespace-nowrap">Programas </th>
                </tr>
              </thead>
              <tbody className="text-center font-robotoc bg-ppink06 text-white">
                {/* {user.map((p) => (
                <tr className="border-2 " key={p.docId}>
                  <td className="font-light px-6 py-4 whitespace-nowrap">{'lucro'}</td>
                  <td className="font-light px-6 py-4 whitespace-nowrap">{'programas'}</td>
                </tr>
              ))} */}
              </tbody>
            </table>
          </div>

        </div>
        <div className="p-1">
          <div className="bg-gcor05 flex flex-col p-1  justify-center items-center rounded-md">
            <div className="flex flex-col md:flex-row md:gap-6 p-1 w-1/2">
              <Input type="text" placeholder="Quantidade" onChange={(e) => setQuantity(e.target.value)} />
              <Input type="text" onChange={(e) => numberFormat(e.target.value, setMoney)} value={money} />
              <Input type="date" onChange={handleDate} />
            </div>
            <button type="button" className="bg-vviolet p-2 text-white rounded-xl hover:bg-white hover:text-ppink font-robotoc border-white border hover:border-vviolet mb-2 shadow-lg" onClick={() => { pgrAdd(date!, money, quantity) }}>Adcionar</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminProfile;
