// import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
// import { fadeIn } from "../../utils/motion";
// import { testimonials } from "../../constants";
import { Header } from "../atoms/Header";
// import { TTestimonial } from "../../types";
import { config } from "../../constants/config";
// import kmitl from "../../assets/profile_pic/Main Logo KMITL_Thai Orange.png"

// const FeedbackCard: React.FC<{ index: number } & TTestimonial> = ({
//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10"
//   >
//     <p className="text-[48px] font-black text-white">"</p>

//     <div className="mt-1">
//       <p className="text-[18px] tracking-wider text-white">{testimonial}</p>

//       <div className="mt-7 flex items-center justify-between gap-1">
//         <div className="flex flex-1 flex-col">
//           <p className="text-[16px] font-medium text-white">
//             <span className="blue-text-gradient">@</span> {name}
//           </p>
//           <p className="text-secondary mt-1 text-[12px]">
//             {designation} of {company}
//           </p>
//         </div>

//         <img
//           src={image}
//           alt={`feedback_by-${name}`}
//           className="h-10 w-10 rounded-full object-cover"
//         />
//       </div>
//     </div>
//   </motion.div>
// );

const Feedbacks = () => {
  return (
    <div className=" mt-12 mx-auto rounded-[20px] max-w-7xl">
      <div
        className={`${styles.padding} md:min-h-[300px] min-h-[260px] rounded-2xl`}
      >
        <Header useMotion={true} {...config.sections.feedbacks} />
      </div>
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
          <div className='bg-[#161130] w-[760px]  rounded-lg px-6 py-4'>
            
            <h1 className={` text-white text-[24px] font-bold`}>King Mongkut's Institute of Technology Ladkrabang</h1>
            <h1 className={` text-[16px] font-semibold text-[#a29dba]`}>Bachelor of Engineering (2018-2022)</h1>
            <br />
            <h1 className={` text-white text-[16px] font-semibold`}>International Academy of Aviation Industry</h1>
        
            <h1 className={` text-white text-[16px]`}>Aeronautical Engineering and Commercial Pilot Program</h1>
            <br />
            <h1 className={` text-white text-[16px] font-semibold`}>GPA 3.21</h1>
          </div>
        
        {/* {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))} */}
      </div>
    </div>
  );
};

export default Feedbacks;
