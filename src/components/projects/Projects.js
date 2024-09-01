import React from 'react'
import Title from '../layouts/Title'
import p1 from "../../assets/images/projects/p1.png";
import p2 from "../../assets/images/projects/p2.png";
import p3 from "../../assets/images/projects/p3.png";
import p4 from "../../assets/images/projects/p4.jpg";
import p5 from "../../assets/images/projects/p5.jpeg";
import p6 from "../../assets/images/projects/p6.jpg";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Explore My Projects"
          des="Showcasing my work and innovations"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="House Price Prediction"
          des="Developed an AI model using Gradient Descent to predict house prices in Kathmandu Valley, with a React-based UI."
          src={p1}
          githubLink="https://github.com/Axkratos/frontenddeploy/tree/main/frontend/src/components"
          liveLink="https://axkratos.github.io/frontenddeploy/"
        />
        <ProjectsCard
          title="BTC Ghost Wallet Hunt"
          des="Created a web app with React and Flask to search for ghost BTC wallets."
          src={p2}
          githubLink="https://github.com/Axkratos/btcpirate"
          liveLink="https://btcpirate.onrender.com/"
        />
        <ProjectsCard
          title="Tourism Website"
          des="Built a website for booking local guides using the MERN stack."
          src={p3}
          githubLink="https://github.com/Axkratos/Tourism"
          liveLink="https://github.com/Axkratos/Tourism"
        />
        <ProjectsCard
          title="Rain Price Prediction"
          des="Implemented a Random Forest algorithm to predict rain in Australia."
          src={p4}
          githubLink="https://github.com/Axkratos/RandomForest"
          liveLink="https://github.com/Axkratos/RandomForest"
        />
        <ProjectsCard
          title="Reread"
          des="Developed a second-hand book selling platform using the MERN stack."
          src={p5}
          githubLink="https://github.com/Axkratos/ReRead"
          liveLink="https://github.com/Axkratos/ReRead"
        />
        <ProjectsCard
          title="Insurance Prediction"
          des="Built a model to predict insurance outcomes using Linear Regression."
          src={p6}
          githubLink="https://github.com/Axkratos/Insurance-Charge-Predicition"
          liveLink="https://github.com/Axkratos/Insurance-Charge-Predicition"
        />
      </div>
    </section>
  );
}

export default Projects;
