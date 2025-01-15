import { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import m1 from '../../assets/int8-man 1.png';
import m2 from '../../assets/image5.png';
import m3 from '../../assets/m3.png';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services";
import { AppearanceProps, IndentificationProps, MessageProps, PgProps, PricesProps } from "../createprofile/createProfile";
import { ImageProps } from "../createprofile";
import { MdOutlinePriceChange } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaRegAddressCard } from "react-icons/fa";



interface ImgDB {
  img: ImageProps[]
}
interface ServicesProps {
  services: string[]
}
export interface ProfileProps extends IndentificationProps, MessageProps, AppearanceProps, PricesProps, ImgDB, ServicesProps {programas: PgProps[] }
const Home = () => {
  const [user, setUser] = useState<ProfileProps[]>([]);
  const [loadImages, setLoadImages] = useState<string[]>([]);

  const handleData = async () => {
    
    console.count('handleData');
    let data = [] as ProfileProps[]
    try {
      console.count('setData');
      const querySnapshot = await getDocs(collection(db, "profiles"));
      querySnapshot.forEach((d) => {
        data.push({
          age: d.data().age,
          phone:d.data().phone,
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
          programas: d.data().programas
        })
        setUser(data)
      })
    } catch (error) {
      console.log(error);
    }
  }
  const handleImgLoad = (id: string) => {
    setLoadImages((prevImg) => [...prevImg, id])
  }


  useEffect(() => {
    handleData();
    console.count('detailsUser');
    // console.log(user);

    return () => {

    };
  }, []);
  return (
    <>
      <Menu />
      <section className="flex flex-col justify-around ">
        <div className="w-full md:w-1/2 mx-auto">
          <div className="w-full">
            <Carousel
              showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000} useKeyboardArrows={true} emulateTouch={true} transitionTime={1000} swipeScrollTolerance={5} stopOnHover={true}
              className=" h-[500px] flex justify-center items-center w-full"
            >
              <div className="flex justify-center items-center">
                <img src={m1} alt="ex1" className="h-[400px] w-full object-cover" />
                <p className="legend font-robotoc font-semibold ">Sinta a emoção do que esta por vir!</p>
              </div>
              <div className="flex justify-center items-center ">
                <img src={m2} alt="ex1" className="h-[400px] w-full object-cover" />
                <p className="legend">Legend 2</p>
              </div>
              <div className="flex justify-center items-center  ">
                <img src={m3} className="h-[400px] w-full object-cover" alt="ex1" />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          </div>
        </div>

        <article className="flex justify-center items-center mb-2 w-full gap-1 flex-wrap md:flex-nowrap p-2">

          {user.map((p) => (
            <>
              <Link to={`/profile/${p.docId}`} className="flex flex-col justify-center shadow-lg text-white text-center p-1 w-full md:w-1/2 bg-gcor  md:h-auto rounded-md" key={p.docId}>
                <div className=" flex flex-col items-center">
                  <div className=" animate-pulse " style={{ display: loadImages.includes(p.img[0].uid) ? 'none' : 'block' }}>
                    <div className="w-full object-cover bg-slate-300 h-[250px] rounded-lg "></div>
                  </div>

                  <img
                    src={p.img[0].url as string}
                    alt="img" className="w-full object-cover  h-[250px] rounded-lg "
                    onLoad={() => handleImgLoad(p.img[0].uid)}
                    style={{ display: loadImages.includes(p.img[0].uid) ? 'block' : 'none' }}
                  />
                  <h1 className="">{p.name}</h1>
                  <div className="flex mx-auto w-full p-8 ">
                    <div className="flex w-1/2 gap-2 justify-center">
                      <MdOutlinePriceChange size={24} className="" />
                      <p className="">R$
                        { ` ${(Number( p.uma) / 100).toFixed(2)}`}
                      </p>
                    </div>
                    <div className="flex w-1/2 gap-2 justify-center">
                      <FaRegAddressCard size={24} />
                      <p className="">
                        {p.age} Anos
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-md w-4/5">
                    <p className=" text-ppink text-center font-robotoc text-lg">{p.message}</p>
                  </div>
                </div>
              </Link>
            </>
          ))}

        </article>

      </section>


    </>
  );
}

export default Home;




// const videoRef = useRef<HTMLVideoElement>(null);
// const [isMuted, setIsMuted] = useState<boolean>(true);
// const toggleMute = () => {
//   const video = videoRef.current;
//   if (video) {
//     video.muted = !video.muted;
//     setIsMuted(video.muted);

//   }
// };

/* <section className="h-screen flex flex-col w-full ">
        <Menu />
        <h1 className="text-center text-5xl font-ral my-4">Sinta a emoção do que esta por vir!</h1>
        <article className="flex flex-col w-full items-center relative">
          <div className="relative w-52">
            <video className="w-full rounded-lg"
              loop={true} autoPlay muted ref={videoRef}>
              <source src={video} type="video/mp4" />
              Seu navegador não esta pronto pra exibir este vídeo.
            </video>
            <button type="button" className="bg-gcor absolute top-3/4 md:top-[80%] left-3/4 md:left-[80%] w-[80px] md:w-32 h-14 rounded-lg flex justify-center items-center" aria-label="Volume" onClick={toggleMute}> {isMuted ? <FaVolumeMute size={34} color="#fff" /> : <AiFillSound size={34} color="#fff" />}</button>
          </div>
        </article>

    </section > */