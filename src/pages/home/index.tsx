import { useRef, useState } from "react";
import { AiFillSound } from "react-icons/ai";
import { FaVolumeMute } from "react-icons/fa";
import video from '../../assets/manhattaPromo_compress.mp4';
import Menu from "../../components/Menu";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import m1 from '../../assets/int8-man 1.png';
import m2 from '../../assets/image5.png';
import m3 from '../../assets/m3.png';





const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);

    }
  };
/**
 Obrigado pelo seu interesse, em fazer SOMENTE o layout da aplicação, infelizmente a sua proposta está desalinhada com o orçamento do cliente
 */
  return (
    <>
      <section className="">
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

        <div className="w-full md:w-1/2 mx-auto mb-1">
          <Carousel
            
            showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000} useKeyboardArrows={true} emulateTouch={true} transitionTime={1000} swipeScrollTolerance={5} stopOnHover={true}
            
          >
            <div className="flex justify-center items-center h-60">
              <img src={m1} alt="ex1" />
              <p className="legend font-robotoc font-semibold ">Sinta a emoção do que esta por vir!</p>
            </div>
            <div className="flex justify-center items-center h-60">
              <img src={m2} alt="ex1" />
              <p className="legend">Legend 2</p>
            </div>
            <div className="flex justify-center items-center h-60 bg-slate-600">
              <img src={m3}  className="object-cover  my-auto" alt="ex1" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>

        <article className="">
          
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