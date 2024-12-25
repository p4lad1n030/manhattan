import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration -- PROJETO ORIGINAL --
// const firebaseConfig = {
//   apiKey: "AIzaSyAxEipIyaq3AEBy-D_CK21aV55lqiVRqvM",
//   authDomain: "eventos-react-firebase.firebaseapp.com",
//   projectId: "eventos-react-firebase",
//   storageBucket: "eventos-react-firebase.appspot.com",
//   messagingSenderId: "819685822325",
//   appId: "1:819685822325:web:91d50863c1a3f613fd4d3c"
// };

//plataforma - nome do projeto - meu perfil! -
const firebaseConfig = {
  apiKey: "AIzaSyDORGz8Mrm35f7kJrASN0A4y32tnGBPmBI",
  authDomain: "plataforma-56b51.firebaseapp.com",
  projectId: "plataforma-56b51",
  storageBucket: "plataforma-56b51.appspot.com",
  messagingSenderId: "72852026662",
  appId: "1:72852026662:web:1b8d6a3dd16d356a153de7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage }