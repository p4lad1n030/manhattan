import { doc, setDoc } from "firebase/firestore";
import { db } from "../../services";
import { ImageProps } from ".";
// import { isLogged } from "../../redux/loginSlice";



// interface ProfileProps {
//   name: string;
//   age: string;
//   peso: string;
//   altura: string;
//   gender: string;
//   idioma: string;
//   smoking: string;
//   message: string;
//   eyes: string;
//   colorHair: string;
//   tamCab: string;
//   etnia: string;
//   silicone: string;
//   tamPe: string;
//   piercing: string;
//   services: string[];
//   images: string[];
//   prices: string[];
// }

// identificação
export interface IndentificationProps {
  docId?: string;
  name: string;
  age: string;
  phone: string;
  peso: string;
  altura: string;
  idioma: string;
  gender: string;
  smoking: string;
}
const indentitiAdd = async (identify: IndentificationProps, userUid: string): Promise<void> => {

  if (!identify.name || !identify.age || !identify.phone || !identify.peso || !identify.altura || !identify.idioma || !identify.gender || !identify.smoking) {
    return Promise.reject(new Error("Preencha todos os campos"));
  }
  try {
    console.count('func => indentitiAdd - line 39 (57)?');
    const docRef = doc(db, "profiles", userUid);
    await setDoc(docRef, {
      docId: userUid,
      name: identify.name,
      age: identify.age,
      phone: identify.phone,
      peso: identify.peso.replace(/\D/g, ''),
      altura: identify.altura.replace(/\D/g, ''),
      idioma: identify.idioma,
      gender: identify.gender,
      smoking: identify.smoking,
    }, { merge: true });
  } catch (error) {
    return Promise.reject(error);
  }
}
export { indentitiAdd };


//message
export interface MessageProps {
  message: string;
}
const messageAdd = async (message: MessageProps, userUid: string): Promise<void> => {
  if (!message.message) {
    return Promise.reject(new Error("Escreva uma mensagem, garota!"));
  }
  try {
    const docRef = doc(db, "profiles", userUid);
    await setDoc(docRef, {
      message: message.message,
    }, { merge: true });
  } catch (error) {
    return Promise.reject(error);
  }
}
export { messageAdd };


// Appearance
export interface AppearanceProps {
  eyes: string;
  colorHair: string;
  tamCab: string;
  etnia: string;
  silicone: string;
  tamPe: string;
  piercing: string;
}
const appearanceAdd = async (appearance: AppearanceProps, userUid: string): Promise<void> => {
  if (!appearance.eyes || !appearance.colorHair || !appearance.tamCab || !appearance.etnia || !appearance.silicone || !appearance.tamPe || !appearance.piercing) {
    return Promise.reject(new Error("Preencha todos os campos"));
  }
  try {
    const docRef = doc(db, "profiles", userUid);
    await setDoc(docRef, {
      eyes: appearance.eyes,
      hair: appearance.colorHair,
      tamCab: appearance.tamCab,
      etnia: appearance.etnia,
      silicone: appearance.silicone,
      tamPe: appearance.tamPe,
      piercing: appearance.piercing,
    }, { merge: true });
  } catch (error) {
    return Promise.reject(error);
  }
}
export { appearanceAdd };

// Services

const servicesAdd = async (services: string[], userUid: string): Promise<void> => {
  if (!services) {
    return Promise.reject(new Error("Escolha ao menos um serviço, garota!"));
  }
  try {
    const docRef = doc(db, "profiles", userUid);
    await setDoc(docRef, {
      services: services,
    }, { merge: true });
  } catch (error) {
    return Promise.reject(error);
  }
}
export { servicesAdd };

// images
const imagesAdd = async (img: ImageProps, userUid: string) => {
  if (!img) {
    return Promise.reject(new Error("Escolha ao menos uma imagem, garota!"));
  }

  try {
    const docRef = doc(db, "profiles", userUid);
    await setDoc(docRef, {
      img
    }, { merge: true });
  } catch (error) {
    return Promise.reject(error);
  }
}

export { imagesAdd }

// prices
export interface PricesProps {
  meia: string
  uma: string
  duas: string
}
const pricesAdd = async (prices: PricesProps, userUid: string) => {
  if (!prices.meia && !prices.uma && !prices.duas) {
    return Promise.reject(new Error("Preencha todos os valores, garota!"));
  }
  try {
    const docRef = doc(db, "profiles", userUid);
    await setDoc(docRef, {
      meiaHora: prices.meia.replace(/\D/g, ''),
      umaHora: prices.uma.replace(/\D/g, ''),
      duasHoras: prices.duas.replace(/\D/g, '')
    }, { merge: true });
  } catch (error) {
    return Promise.reject(error);
  }
}
export { pricesAdd }

export interface PgProps {
  date: Date
  quantity: string
  money: string

}
const pgAdd = async (programas: PgProps[], id: string) => {
  try {
    console.count('pgAdd');
    const docRef = doc(db, "profiles", id);
    await setDoc(docRef, {
      programas
    }, { merge: true });
  } catch (error) {
    return error
  }

}
export { pgAdd }
