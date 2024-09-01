import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BE in Computer Engineering"
            subTitle="Nepal College Of Information Technology (2021 - ongoing)"
            result="Kathmandu, Nepal"
            des="Pursuing a degree in Computer Engineering with a focus on software development, AI, and data systems."
          />
          <ResumeCard
            title="Science Stream"
            subTitle="AmarSingh Secondary School (2019 - 2021)"
            result="Kathmandu, Nepal"
            des="Completed high school with a focus on science and mathematics, including coursework in programming."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Bhagyodaya Secondary School (2017 - 2019)"
            result="Kathmandu, Nepal"
            des="Foundation in general education with a strong emphasis on science and mathematics."
          />
        </div>
      </div>

      {/* Projects */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="House Price Prediction"
            subTitle="AI Model for Kathmandu Valley"
            result="React, Python, ML"
            des="Developed an AI model using the Gradient Descent algorithm to predict house prices in Kathmandu Valley. Included a React UI for user interaction."
          />
          <ResumeCard
            title="BTC Ghost Wallet Hunt"
            subTitle="Web App"
            result="React, Flask"
            des="Created a web app to search for ghost BTC wallets, utilizing React for the frontend and Flask for the backend."
          />
          <ResumeCard
            title="Tourism Website"
            subTitle="Booking Local Guides"
            result="MERN Stack"
            des="Built a full-stack tourism website for booking local guides using MongoDB, Express, React, and Node.js."
          />
          <ResumeCard
            title="Rain Price Prediction"
            subTitle="AI Model for Australia"
            result="Python, Random Forest"
            des="Developed a prediction model using Random Forest to forecast rainfall in Australia. Focused on data preprocessing and model accuracy."
          />
          <ResumeCard
            title="Reread"
            subTitle="Second-Hand Book Platform"
            result="MERN Stack"
            des="Built a platform for buying and selling second-hand books using the MERN stack, including user authentication and a dynamic marketplace."
          />
          <ResumeCard
            title="Insurance Prediction"
            subTitle="Insurance Outcomes Model"
            result="Python, Linear Regression"
            des="Created a model to predict insurance outcomes using Linear Regression, incorporating various data features for prediction accuracy."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
