"use client"
import React, {useState, useRef} from 'react'
import { motion, useInView } from "framer-motion";
import ProjectTag from './ProjectTag';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    alt: "Project 1",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "/",
    tooltipContent: "React, HTML,CSS"
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "/",
    tooltipContent: "React, HTML,CSS"
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "/",
    tooltipContent: "React, HTML,CSS"
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
    tooltipContent: "React, HTML,CSS"
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "School"],
    gitUrl: "/",
    previewUrl: "/",
    tooltipContent: "React, HTML,CSS"
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
    tooltipContent: "React, HTML,CSS"
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [subTag, setSubTag] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    if(newTag === "All") setSubTag(null);
    if(newTag === "School") setSubTag(null);
    if(newTag === "Personal") setSubTag(null);

  };


  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
          selectedColor={"text-white border-blue-400"}
          unSelectedColor={"text-[#ADB7BE] border-slate-600 hover:border-white"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="School"
          isSelected={tag === "School"}
          selectedColor={"text-white border-blue-400"}
          unSelectedColor={"text-[#ADB7BE] border-slate-600 hover:border-white"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personal"
          isSelected={tag === "Personal"}
          selectedColor={"text-white border-blue-400"}
          unSelectedColor={"text-[#ADB7BE] border-slate-600 hover:border-white"}
        />
        
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tooltipContent= {project.tooltipContent}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;