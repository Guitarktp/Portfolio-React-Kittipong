import { motion } from 'framer-motion';

import { styles } from '../../constants/styles';
// import { ComputersCanvas } from "../canvas";
import { config } from '../../constants/config';
import { profilePic } from '../../assets';
import { behance } from '../../assets';
import { githubb } from '../../assets';
// import { dribble } from '../../assets';
import { linkedin } from '../../assets';


// ปรับหน้า hero
const Hero = () => {
  return (
    <section className={`relative mx-auto lg:h-screen xs:h-[960px] md:h-[800px] w-full `}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5 `}
      >
        <div className="mt-5 flex flex-col items-center justify-center max-md:hidden">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm <span className="text-[#915EFF] ">{config.hero.name}</span>
          </h1>
          <h1 className={`text-[32px] text-white font-semibold mt-2`}>
            Software Developer
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2 lg:w-[688px] mx-auto `}>
            {config.hero.p[0]} <br className="hidden sm:block " />
            {config.hero.p[1]}
          </p>
        </div>

        
      
        <div>
          <img src={ profilePic } className= "w-full mr-60 max-xl:mr-80 md:block xs:hidden xxl:h-[420px] "   
          alt="" />
        </div>
      </div>


      <div className='md:grid md:justify-items-center '>
        <div
          className={`absolute xxl:bottom-44 lg:bottom-28 max-lg:mt-[600px] max-md:w-full lg:w-full ${styles.paddingX} lg:flex gap-5 items-center justify-center max-md:flex max-md:flex-col md:grid md:grid-cols-2 `}
        >
          
            <div >
              <a href="https://drive.google.com/file/d/11pvd0z2yqaAU412Z5U1bNM4RdmxmhnDN/view" target="_blank" rel="noopener noreferrer">
              <button className='bg-[#161130] xxl:w-[264  px] xxl:h-[128px] md:w-[264px] md:h-[100px] max-md:w-[220px] max-md:h-[76px] rounded-lg flex justify-center items-center text-[36px] max-md:text-[32px] font-bold '>
              MY RESUME
                {/* <img src={githubb} className= "w-[208px] h-[82px]" />  */}
              </button>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/kittipong-satayanusakkul-06552228b/" target="_blank" rel="noopener noreferrer">
              <button className='bg-[#161130] xxl:w-[264px] xxl:h-[128px] md:w-[264px] md:h-[100px] max-md:w-[220px] max-md:h-[76px] rounded-lg flex justify-center items-center'>
                <img src={linkedin} className= "w-[208px] h-[82px] max-md:w-[192px] max-md:h-[76px]" />
                
              </button>
              </a>
            </div>
            <div>
              <a href="https://github.com/guitarktp" target="_blank" rel="noopener noreferrer">
                <button className='bg-[#161130] xxl:w-[264px] xxl:h-[128px] md:w-[264px] md:h-[100px] max-md:w-[220px] max-md:h-[76px] rounded-lg flex justify-center items-center '>
                <img src={githubb} className= "w-[208px] h-[82px] max-md:w-[192px] max-md:h-[76px]" />
                </button>
              </a>
            </div>
            <div>
              <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
                <button className='bg-[#161130] xxl:w-[264px] xxl:h-[128px] md:w-[264px] md:h-[100px] max-md:w-[220px] max-md:h-[76px] rounded-lg flex justify-center items-center'>
                <img src={behance} className= "w-[204px] h-[82px] max-md:w-[192px] max-md:h-[76px]" />
                </button>
              </a>
            </div>
          
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex xxl:h-[64px] xxl:w-[35px] md:h-[52px] md:w-[35px] items-start justify-center rounded-3xl border-4 p-2 max-lg:hidden ">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
