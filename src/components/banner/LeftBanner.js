import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaReact, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiExpress, SiScikitlearn } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["AI Engineer", "Full Stack Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Anup Adhikari</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
           <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I create seamless digital experiences by blending full-stack development with AI innovation, always pushing the boundaries of technology. My journey is fueled by a passion for turning complex ideas into simple, elegant solutions.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/maxwell.ad.125" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaFacebookF />
            </a>
            <a href="https://github.com/Axkratos" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/anup-adhikari-a794542b2/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <SiScikitlearn />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner;
