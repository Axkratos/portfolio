import React from 'react';
import { AiFillCode, AiOutlineBulb } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { SiAirtable, SiAntdesign, SiGooglecloud, SiDatabricks } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="AI & Machine Learning"
          des="I design and implement machine learning models, focusing on supervised and unsupervised learning, data processing, and visualization."
          icon={<SiGooglecloud />}
        />
        <Card
          title="Full Stack Development"
          des="I build robust and scalable web applications using modern technologies like React, Node.js, Express, and MongoDB."
          icon={<AiFillCode />}
        />
        <Card
          title="API Integration"
          des="I integrate and develop RESTful APIs, ensuring smooth communication between different parts of applications."
          icon={<SiAirtable />}
        />
        <Card
          title="Business Strategy"
          des="I help in crafting effective business strategies by leveraging technology and data to drive growth and innovation."
          icon={<AiOutlineBulb />}
        />
        <Card
          title="Hosting Websites"
          des="I provide reliable and secure hosting solutions, ensuring your website is accessible and performs optimally."
          icon={<FaGlobe />}
        />
        <Card
          title="Data Visualization"
          des="I create insightful and interactive visualizations to help interpret complex data and make informed decisions."
          icon={<SiDatabricks />}
        />
      </div>
    </section>
  );
}

export default Features;
