import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../services";

interface ProfileProps {
  name: string;
  age: string;
  peso: string;
  altura: string;
  gender: string;
  idioma: string;
  smoking: string;
  message: string;
  eyes: string;
  hair: string;
  tamCab: string;
  etnia: string;
  silicone: string;
  tamPe: string;
  piercing: string;
  services: string[];
  images: string[];
  prices: string[];
}
interface IndentificationProps {
  docId?: string;
  name: string;
  age: string;
  peso: string;
  altura: string;
  idioma: string;
  gender: string;
  smoking: string;
}
const indentitiAdd = async (identify: IndentificationProps): Promise<void> => {
  if (!identify.name || !identify.age || !identify.peso || !identify.altura || !identify.idioma || !identify.gender || !identify.smoking) {
    return Promise.reject(new Error("Preencha todos os campos"));

  } else {
    const docRef =  await addDoc(collection(db, "profiles"), {
      docId: '',
      name: identify.name,
      age: identify.age,
      peso: identify.peso,
      altura: identify.altura,
      idioma: identify.idioma,
      sexo: identify.gender,
      smoking: identify.smoking,
    });

  }
}
export { indentitiAdd };
