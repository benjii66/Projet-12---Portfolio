"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import Certifications from './Certifications';
import TabButton from './TabButton';


const hoverLine="inline-block relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-blue-400 hover:after:absolute hover:after:left-0 hover:after:bottom-0"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>MySQL</li>
        <li>JavaScript</li>
        <li>React.JS</li>
        <li>Next.JS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <a
           href="https://www.objectif3d.com/bachelor-gameplay-programming/"
           target="_blank"
           className={hoverLine}
           >Objectif3D</a></li>
        <li>
          <a 
          href="https://openclassrooms.com/fr/"
          target="_blank"
          className={hoverLine}
          >OpenClassrooms</a></li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
      content: (
        <div>
          <ul className="list-disc pl-2">
            {Certifications.map((certifications, index) => (
              <li key={index} className='cursor-pointer' >
                <a 
                  href={certifications.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={hoverLine}
                >
                  {certifications.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ),
  },
];


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() =>{
      setTab(id);
    });
  };

  return (

    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/Desk.jpg" alt="about" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, Express, MySQL,
            Three.js, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection