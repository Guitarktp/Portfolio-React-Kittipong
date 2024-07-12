import { motion } from 'framer-motion';

import { styles } from '../../constants/styles';
// import { ComputersCanvas } from "../canvas";
import { config } from '../../constants/config';
import { profilePic } from '../../assets';
import { behance } from '../../assets';
import { githubb } from '../../assets';
import { dribble } from '../../assets';
import { linkedin } from '../../assets';


// ปรับหน้า hero
const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full `}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2 lg:w-[688px] `}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
        </div>
        <div>
          <img src={ profilePic } className= "h-[400px] w-full mr-60" 
          alt="" />
        </div>
      </div>

      <div
        className={`absolute bottom-40  w-full ${styles.paddingX} flex gap-5 items-center justify-center `}
      >
        
          <div>
            <button className='bg-[#161130] w-[264px] h-[128px] rounded-lg flex justify-center items-center'>
              <img src={githubb} className= "w-[208px] h-[82px]" /> 
            </button>
          </div>
          <div>
            <button className='bg-[#161130] w-[264px] h-[128px] rounded-lg flex justify-center items-center'>
              <img src={behance} className= "w-[208px] h-[82px]" />
            </button>
          </div>
          <div>
            <button className='bg-[#161130] w-[264px] h-[128px] rounded-lg flex justify-center items-center'>
            <img src={dribble} className= "w-[208px] h-[82px]" />
            </button>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/kittipong-satayanusakkul-06552228b/" target="_blank" rel="noopener noreferrer">
              <button className='bg-[#161130] w-[264px] h-[128px] rounded-lg flex justify-center items-center'>
              <img src={linkedin} className= "w-[204px] h-[82px]" />
              </button>
            </a>
          </div>
        
      </div>

      {/* <ComputersCanvas /> */}

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
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
