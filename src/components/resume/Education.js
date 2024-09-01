import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Part One */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE in Engineering"
            subTitle="Nepal College Of Information Technology (2021 - ongoing)"
            result="3.7/4 (Avg)"
            des="Pursuing a Bachelor’s degree in Engineering with a focus on Computer Engineering. The coursework includes software development, data structures, algorithms, and system design."
          />
          <ResumeCard
            title="Science Stream"
            subTitle="AmarSingh Secondary School (2019 - 2021)"
            result="3.71/4"
            des="Completed the Science stream with a focus on Physics, Chemistry, and Mathematics. Gained a solid foundation in scientific principles and analytical skills."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Bhagyodaya Secondary School (2017 - 2019)"
            result="3.65/4"
            des="Completed secondary education with a broad curriculum covering various subjects, which helped build strong problem-solving and critical-thinking skills."
          />
        </div>
      </div>

      {/* Part Two (Optional) */}
      {/* Uncomment and modify if needed for additional sections */}
      {/* 
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> 
      */}
    </motion.div>
  );
};

export default Education;
