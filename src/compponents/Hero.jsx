import heroBackgroundImage from "../assets/bg-slate.png";
import cup from "../assets/black.png";
import { delay, motion, spring } from "motion/react";
import BlurText from "../stylings/BlurText";
import Navbar from "./Navbar";
import { useState } from "react";
const Hero = () => {
  const bgImage = {
    backgroundImage: `url(${heroBackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
  };

const [openNavbar , setOpenNavbar] = useState(false)

const setNav = () =>{
  if(openNavbar){
    setOpenNavbar(false)
  }
  else{
    setOpenNavbar(true)
  }
}

  return (
    <div className="hero">
      
      {/* Hero main */}
      <div
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[872px] max-md:min-h-[1000px]"
        style={bgImage}
      >
        
        {/* Navbar */}
        <Navbar openNav={setNav}/>

        {/* Open-Navbar */}
        {openNavbar && 
        <motion.div className="absolute top-0 right-0 h-full w-[120px] z-20 bg-gradient-to-b from-amber-500 to-orange-400 backdrop-blur p-3"
        animate={{
          x : [100 , 0]
        }}
        transition={{
          damping : 100
        }}
        >

          <div className="pt-[2rem] text-center">
          <i class="fa-solid fa-x text-2xl text-white" onClick={setNav}></i>
          </div>

          <div className="h-full flex flex-col justify-center items-center pb-[15rem] gap-3">
            <i class="fa-brands fa-square-facebook text-3xl text-white"></i>
            <div className="h-15 w-[1px] bg-white"></div>
            <i class="fa-brands fa-instagram text-3xl text-white"></i>
            <div className="h-15 w-[1px] bg-white"></div>
            <i class="fa-brands fa-telegram text-3xl text-white"></i>
            <div className="h-15 w-[1px] bg-white"></div>
            <i class="fa-brands fa-youtube text-3xl text-white"></i>
          </div>

        </motion.div>}

        {/* Grid-1 */}
        <div className="container relative flex flex-col justify-center items-center space-y-28 mt-20">
          <motion.h1
            className="text-7xl font-bold text-orange-200 ml-[3rem] tracking-[5px] leading-20"
            animate={{
              opacity: [0, 1],
              y: [-200, 0],
            }}
            transition={{
              duration: 0.3,
              type: spring,
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
          >
            Blvck
            <br />
            Coffee
          </motion.h1>

          <motion.div
            className="text-orange-200 z-20 space-y-2"
            animate={{
              opacity: [0, 1],
              x: [-200, 0],
            }}
            transition={{
              duration: 0.3,
              type: spring,
              stiffness: 100,
              damping: 10,
              delay: 1.2,
            }}
          >
            <h2 className="text-2xl">Black Lifestyle Lovers,</h2>
            <p className="opacity-55 text-sm w-80 font-thin">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              quae repellat eum sit, recusandae Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </motion.div>

          <motion.div
            className="absolute left-[-70px] bottom-20 bg-[#212730] h-40 w-75"
            animate={{
              opacity: [0, 1],
              scale : [0 , 1]
            }}
            transition={{
              duration: 0.3,
              type: spring,
              stiffness: 100,
              damping: 10,
              delay: 1.2,
            }}
          ></motion.div>
        </div>

        {/* Grid-2 */}
        <div className="relative max-md:mt-[-80px]">
          {/* cup-Image */}
          <motion.img
            src={cup}
            alt="Cup"
            className="relative z-40 h-[400px] md:h-[700px] img-shadow"
            whileInView={{
              scale: [0, 1],
              opacity: [0, 1],
            }}
            transition={{
              duration: 0.3,
              type: spring,
              stiffness: 100,
              delay: 0.4,
            }}
          />

          {/* Orange-cicrle */}
          <motion.div
            className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-20 border-amber-500"
            style={{ overflow: "hidden", height: "180px", width: "180px" }}
            whileInView={{
              opacity: [0, 1],
              scale: [0, 1]
            }}
            transition={{
              delay: 0.7,
              duration: 0.3,
              type: spring,
              stiffness: 80,
            }}
          >
          </motion.div>

          {/* Bvlack-Coffee-Text */}
          <motion.div className="md:hidden lg:block absolute top-5 left-[11.6rem] h-20 w-20 max-md:left-[7.3rem] md:top-[-1rem]">
            <BlurText
              text="Bvlack Coffee!"
              delay={500}
              animateBy="words"
              direction="right"
              className="text-4xl md:text-[100px] scale-150 font-bold text-[#121416] leading-none opacity-50"
            />
          </motion.div>
        </div>

        {/* Grid-3 */}
        <motion.div
          className="hidden lg:block relative "
          animate={{
            opacity: [0, 1],
            x: [40, 0],
          }}
          transition={{
            delay: 1.2,
            duration: 0.3,
            type: spring,
            stiffness: 80,
          }}
        >
          <div className="absolute top-10 right-10 z-10 bottom-20 bg-[#1A1F25] h-40 w-75"></div>

          <div className="text-orange-200 z-20 relative mt-10 space-y-2">
            <h2 className="text-2xl">Blvck Coffee,</h2>
            <p className="opacity-55 text-sm leading-loose w-100">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              aspernatur,Delectus aspernatur, Delectus aspernatur,Delectus
              aspernatur,
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
