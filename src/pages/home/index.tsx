import { useState } from "react";
// import { AiFillSound } from "react-icons/ai";
// import { FaRegAddressCard, FaVolumeMute } from "react-icons/fa";
// import video from '../../assets/manhattaPromo_compress.mp4';
import Menu from "../../components/Menu";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import m1 from '../../assets/int8-man 1.png';
import m2 from '../../assets/image5.png';
import m3 from '../../assets/m3.png';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services";
import { AppearanceProps, IndentificationProps, MessageProps, PricesProps } from "../createprofile/createProfile";
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
export interface ProfileProps extends IndentificationProps, MessageProps, AppearanceProps, PricesProps, ImgDB, ServicesProps { }
const Home = () => {
  const [user, setUser] = useState<ProfileProps[]>([]);
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const [isMuted, setIsMuted] = useState<boolean>(true);
  // const toggleMute = () => {
  //   const video = videoRef.current;
  //   if (video) {
  //     video.muted = !video.muted;
  //     setIsMuted(video.muted);

  //   }
  // };
  // handleData
  const handleData = async () => {
    console.count('handleData');
    let data = [] as ProfileProps[]
    try {
      const querySnapshot = await getDocs(collection(db, "profiles"));
      querySnapshot.forEach((d) => {
        console.log(d.data());
        data.push({
          age: d.data().age,
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
        })
        setUser(data)
      })
    } catch (error) {
      console.log(error);
    }

  }
  /**
   Obrigado pelo seu interesse, em fazer SOMENTE o layout da aplicação, infelizmente a sua proposta está desalinhada com o orçamento do cliente
   */
  return (
    <>
      <section className="flex flex-col justify-around ">
        <Menu />
        {/* <h1 className="text-center text-5xl font-ral my-4">Sinta a emoção do que esta por vir!</h1>
        <article className="flex flex-col w-full items-center relative mb-2">
          <div className="relative w-52">
            <video className="w-full rounded-lg"
              loop={true} autoPlay muted ref={videoRef}>
              <source src={video} type="video/mp4" />
              Seu navegador não esta pronto pra exibir este vídeo.
            </video>
            <button type="button" className="bg-gcor absolute top-3/4 md:top-[80%] left-3/4 md:left-[80%] w-[80px] md:w-32 h-14 rounded-lg flex justify-center items-center" aria-label="Volume" onClick={toggleMute}> {isMuted ? <FaVolumeMute size={34} color="#fff" /> : <AiFillSound size={34} color="#fff" />}</button>
          </div>
        </article> */}

        <div className="w-full md:w-1/2 mx-auto  bg-slate-400">
          <div className="">
            <Carousel
              showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000} useKeyboardArrows={true} emulateTouch={true} transitionTime={1000} swipeScrollTolerance={5} stopOnHover={true}
              className=""
            >
              <div className="flex justify-center items-center ">
                <img src={m1} alt="ex1" className="h-60" />
                <p className="legend font-robotoc font-semibold ">Sinta a emoção do que esta por vir!</p>
              </div>
              <div className="flex justify-center items-center ">
                <img src={m2} alt="ex1" className="h-60" />
                <p className="legend">Legend 2</p>
              </div>
              <div className="flex justify-center items-center  ">
                <img src={m3} className="h-60  my-auto" alt="ex1" />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
          </div>
        </div>

        <button type="button" className="bg-vviolet p-2 text-white rounded-xl hover:bg-white hover:text-ppink font-robotoc border-white border hover:border-vviolet mb-2 shadow-lg" onClick={handleData}>Exibir Perfis</button>

        <article className="flex justify-center items-center mb-2 w-full gap-1 flex-wrap md:flex-nowrap p-2">
          {user.map((g) => (
            <Link to={`/profile/${g.docId}`} className="flex flex-col justify-center shadow-lg text-white text-center p-1 w-full md:w-1/2 bg-gcor  md:h-auto rounded-md">
              <div className=" "
              key={g.docId}>
                <img src={g.img[0].url as string} alt="img" className="w-full object-cover  h-[250px] rounded-lg border" />
                <h1 className="">{ g.name}</h1>
                <div className="flex mx-auto w-full p-8 ">
                  <div className="flex w-1/2 gap-2 justify-center">
                    <MdOutlinePriceChange size={24} className=""/>
                    <p className="">
                      {(Number(g.uma)/100).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex w-1/2 gap-2 justify-center">
                    <FaRegAddressCard size={24} />
                    <p className="">
                      {g.age}
                    </p>
                  </div>
                </div>
                <div className="overflow-auto scrollbar-hide ">
                  <p className=" ">Lorem ipsum dolor sit,  </p>
                </div>
              </div>
            </Link>
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