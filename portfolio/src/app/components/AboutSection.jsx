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
          I am a junior web developer with a passion for crafting interactive and responsive web applications. My journey into web development began with a background in gameplay programming from my time in a game development school, where I gained proficiency in C# and C++. This foundation provided me with valuable problem-solving skills and a strong understanding of programming concepts that I now apply to web development.
          In my current role, I have honed my skills in JavaScript, React, Node.js, MySQL, Next.js, HTML, and CSS. I am particularly enthusiastic about exploring new technologies and frameworks, and I have recently delved into React and Redux. My curiosity and eagerness to learn have driven me to continuously expand my knowledge and skill set.
          Outside of coding, I am an avid rock climber, finding joy in the challenge and problem-solving aspect of the sport. I believe my experiences in climbing have taught me valuable lessons in perseverance, adaptability, and teamwork, which I apply to my work as a developer.
          I am excited about the prospect of joining an apprenticeship in React in the future, as I am passionate about creating innovative and user-centric web applications. As a team player, I thrive in collaborative environments and am eager to contribute my skills and creativity to building amazing applications alongside like-minded professionals.
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