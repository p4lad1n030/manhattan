// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxEipIyaq3AEBy-D_CK21aV55lqiVRqvM",
  authDomain: "eventos-react-firebase.firebaseapp.com",
  projectId: "eventos-react-firebase",
  storageBucket: "eventos-react-firebase.appspot.com",
  messagingSenderId: "819685822325",
  appId: "1:819685822325:web:91d50863c1a3f613fd4d3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage }