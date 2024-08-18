"use client"
import React, {useTransition, useState} from 'react'
import Image from "next/image";
import aboutIMG from '../../public/images/about-image.jpeg'
import TabButton from './TabButton';
 
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>JavaScript (ES6+), TypeScript</li>
        <li>Frontend: React, Redux, Next.js</li>
        <li>Backend: Node.js, Express.js</li>
        <li>Database: MongoDB, SQL Server</li>
        <li>Version Control: Git, GitHub</li>
        <li>DevOps: Docker</li>
        <li>Styling: Tailwind CSS, Bootstrap, CSS3</li>
        <li>API Development: RESTful APIs, GraphQL</li>
        <li>Testing: Jest, Mocha</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <h3>Grado en Ingeniería Informática</h3>
        <p className='pl-3'>Universidad Nacional de Educación a Distancia (UNED)</p>
        <p className='pl-3'>2016 - 2021</p>
        <h3>T.S. en Desarrollo de Apps Multiplataforma (DAM)</h3>
        <p className='pl-3'>Instituto de Formación Profesional</p>
        <p className='pl-3'>2013 - 2015</p>
      </div>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div>
        <h3>Desarrollador Full Stack</h3>
        <p className='pl-3'><strong>Proyectos Web para Concesionarios:</strong> Desarrollo de aplicaciones web interactivas para la gestión de inventario y ventas. Implementación de frontend con React y Redux, y backend con Node.js y MongoDB.</p>
        <p className='pl-3'><strong>Proyectos para Empresas de Transporte:</strong> Creación de sistemas de seguimiento y gestión de flotas utilizando SQL Server para la base de datos, y React en el frontend. Integración de servicios en la nube para escalabilidad y rendimiento.</p>
      </div>
    )
  },
];


const AboutSection = ({ content }) => {

  const [tab, setTab] = useState("skills");
  const [isPending, startTansition] = useTransition();

  const handleTabChange = (id) =>{
    startTansition(()=>{
      setTab(id);
    });
  };

  return (
    <section className='text-white mt-1 rounded-lg'>
      <div className='md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image 
          src={aboutIMG} 
          className='rounded-lg mb-4'
          width={500}
          height={500}
          alt='About me'
        />
        <div>
          <h2 className='text-4xl font-bold text-white mb-4'> {content.title}</h2>
          <p className='text-base md:text-lg'>
            {content.description}
          </p>
          <div className='flex flex-grow mt-8'>
            <TabButton 
              selectTab={() => handleTabChange("skills")} 
              active={tab ==="skills"}
              content={content}>
              {" "}
              {content.spanSkill}{" "}
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("education")} 
              active={tab ==="education"}
              content={content}>
              {" "}
              {content.spanEducation}{" "}
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("experience")} 
              active={tab ==="experience"}
              content={content}>
              {" "}
              {content.spanExperience}{" "}
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t)=> t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
