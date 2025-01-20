import PropTypes from 'prop-types';
import { useState } from "react";
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
  const totalPages = 20
  const pageSize = 7;

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
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      const newCursors = [...cursors];
      newCursors[page - 1] = querySnapshot.docs[querySnapshot.docs.length - 1];
      setCursors(newCursors);
      setCurrentPage(page);
      setUser(data)
    })

  }

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
                {
                  user.map((p, i) => (
                  <tr className="border-2 " key={p.docId}>
                      <td className="font-light px-6 py-4 whitespace-nowrap hover:font-semibold">
                        <Link to={`/admin/${p.docId}`}>{p.name}</Link></td>
                    <td className="font-light px-6 py-4 whitespace-nowrap">{p.programas ? p.programas[i]?.money : 'não há informações'}</td>
                      <td className="font-light px-6 py-4 whitespace-nowrap">{p.programas ? p.programas[i]?.quantity : 'não há informações' }</td>
                  </tr>
                  ))
                  
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-20 -mt-10 z-0">
          <ResponsivePaginationComponent
            current={currentPage}
            total={totalPages}
            onPageChange={page =>handleData(page)}
          />
        </div>
        <Footer />
      </article>
    </>
  );

}
Admin.propTypes = {
  user: PropTypes.array, lastVisible: PropTypes.object, cursors: PropTypes.array, currentPage: PropTypes.number,
}
export default Admin;
