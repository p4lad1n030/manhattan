/*
import React, { useState, useEffect } from 'react';
import { getDocs, collection } from "firebase/firestore"; // Importar suas funções do Firestore
import {db} from '../services/index'; // Certifique-se de importar sua configuração do Firestore

const MeuComponente = () => {
  const [user, setUser] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "profiles"));
    const newData = querySnapshot.docs.map((doc) => doc.data());
    return newData;
  };

  const handleData = async () => {
    console.count('handleData');
    const localData = JSON.parse(localStorage.getItem('profiles')!);

    if (localData) {
      const remoteData = await fetchData();
      if (JSON.stringify(localData) !== JSON.stringify(remoteData)) {
        localStorage.setItem('profiles', JSON.stringify(remoteData));
        setUser(remoteData);
      } else {
        setUser(localData);
      }
    } else {
      const remoteData = await fetchData();
      localStorage.setItem('profiles', JSON.stringify(remoteData));
      setUser(remoteData);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div>


      //Renderize seus dados aqui 
      {user.map((u, index) => (
        <div key={index}>
          <p>{u.name}</p>
          <p>{u.age}</p>

          //Renderize outras propriedades conforme necessário 
        </div>
      ))}
    </div>
  );
};

export default MeuComponente;
*/
