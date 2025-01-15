import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { db } from "../../services";
import { collection, DocumentData, getDocs, limit, query, startAfter } from "firebase/firestore";
import Menu from "../../components/Menu";
import Footer from "../../components/footer";
import { ProfileProps } from "../home";
import { Link } from "react-router-dom";
import ResponsivePaginationComponent from './../../../node_modules/react-responsive-pagination/dist/index';
import 'react-responsive-pagination/themes/classic.css'





const Admin = () => {
  const [user, setUser] = useState<ProfileProps[]>([]);
  const [lastVisible, setLastVisible] = useState<DocumentData | null>(null);
  const [cursors, setCursors] = useState<DocumentData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 50
  // const [totalPages, setTotalPages] = useState<number>(140);
  const pageSize = 15;

  const handleData = async (page: number) => {
    
    const profilesRef = collection(db, 'profiles');
    let q = query(profilesRef, limit(pageSize));
    if (page > 1 && lastVisible) {
      q = query(
        profilesRef,
        startAfter(cursors[page - 2]),
        limit(pageSize)
      );
    }
    const querySnapshot = await getDocs(q);
    let data = [] as ProfileProps[]
    querySnapshot.forEach((d) => {
      data.push({
        age: d.data().age,
        phone: d.data().phone,
        altura: d.data().altura,
        docId: d.data().docId,
        duas: d.data().duasHoras,
        etnia: d.data().etnia,
        eyes: d.data().eyes,
        gender: d.data().gender,
        colorHair: d.data().colorHair,
        idioma: d.data().idioma,
        img: d.data().img,
        meia: d.data().meiaHora,
        message: d.data().message,
        name: d.data().name,
        peso: d.data().peso,
        piercing: d.data().piercing,
        services: d.data().services,
        silicone: d.data().silicone,
        smoking: d.data().smoking,
        tamCab: d.data().tamCab,
        tamPe: d.data().tamPe,
        uma: d.data().umaHora,
        programas: d.data()!.programas
      })
      setUser(data)
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      const newCursors = [...cursors];
      newCursors[page - 1] = querySnapshot.docs[querySnapshot.docs.length - 1];
      setCursors(newCursors);
      setCurrentPage(page);
    })
    
  }
  
  useEffect(() => {

    handleData(1)
  }, [user]);
  
  return (
    <>
      <Menu />
      <article className='flex flex-col'>
        <div className="w-full md:flex justify-center  items-center relative bg-white  rounded-lg mb-5 ">

          <div className="mt-8 flex flex-wrap justify-around items-center w-full md:p-8 mb-5 overflow-x-auto">
            <table className="min-w-full  p-2 shadow-lg">
              <thead className="bg-vviolet text-white font-ral">
                <tr>
                  <th className="border-r-2 whitespace-nowrap">Nome</th>
                  <th className="border-r-2 whitespace-nowrap">Lucro</th>
                  <th className="whitespace-nowrap">Programas </th>
                </tr>
              </thead>
              <tbody className="text-center font-robotoc bg-ppink06 text-white">
                {user.map((p) => (
                  <tr className="border-2 " key={p.docId}>
                    <td className="font-light px-6 py-4 whitespace-nowrap hover:font-semibold"><Link to={`/admin/${p.docId}`}>{p.name}</Link></td>
                    <td className="font-light px-6 py-4 whitespace-nowrap">{'lucro'}</td>
                    <td className="font-light px-6 py-4 whitespace-nowrap">{'programas'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
            <ResponsivePaginationComponent
              current={currentPage}
              total={totalPages}
              onPageChange={handleData}
            />
        <Footer />
      </article>
    </>
  );
  
}
Admin.propTypes = {
  user: PropTypes.array, lastVisible: PropTypes.object, cursors: PropTypes.array, currentPage: PropTypes.number,
}
export default Admin;
