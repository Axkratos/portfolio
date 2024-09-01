// import React from "react";
// import { motion } from "framer-motion";
// import ResumeCard from "./ResumeCard";

// const Achievement = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.5 } }}
//       className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
//     >
//       <div>
//         <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
//           <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
//         </div>
//         <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
//           <ResumeCard
//             title="Lorem ipsum dolor sit amet."
//             subTitle="Lorem ipsum dolor sit amet alternative."
//             result="Success"
//             des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
//           />
//           <ResumeCard
//             title="Lorem ipsum dolor sit amet."
//             subTitle="Lorem ipsum dolor sit amet alternative."
//             result="Success"
//             des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
//           />
//           <ResumeCard
//             title="Lorem ipsum dolor sit amet."
//             subTitle="Lorem ipsum dolor sit amet alternative."
//             result="Success"
//             des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
//           />
//         </div>
//       </div>
//       <div>
//         <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
//           <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
//         </div>
//         <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
//           <ResumeCard
//             title="Lorem ipsum dolor sit amet."
//             subTitle="Lorem ipsum dolor sit amet alternative."
//             result="Success"
//             des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
//           />
//           <ResumeCard
//             title="Lorem ipsum dolor sit amet."
//             subTitle="Lorem ipsum dolor sit amet alternative."
//             result="Success"
//             des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
//           />
//           <ResumeCard
//             title="Lorem ipsum dolor sit amet."
//             subTitle="Lorem ipsum dolor sit amet alternative."
//             result="Success"
//             des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Achievement;


import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Hackfest NCIT 2024"
            subTitle="Winner"
            result="Kathmandu, Nepal"
            des="Developed a platform for citizens to report problems directly to the government and post them publicly to enable community pressure on government actions."
          />
          
          <ResumeCard
            title="KathCode 2024"
            subTitle="2nd Runner-Up"
            result="Kathmandu, Nepal"
            des="Developed a platform to connect tourists with local guides, enhancing authentic local experiences and addressing local unemployment issues."
          />

<ResumeCard
            title="COSMOS Recursion 2023"
            subTitle="2nd Runner-Up"
            result="Kathmandu, Nepal"
            des="Created a similar platform to Hackfest but with advanced features and modifications for improved user interaction and government response."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
