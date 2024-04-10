"use client"
import React, { useState, useRef } from 'react'
import { motion, useInView } from "framer-motion";
import ProjectTag from './ProjectTag';
import ProjectCard from './ProjectCard';
import useProjectsData from '../data/Projects';
import useTranslation from "next-translate/useTranslation";



const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [subTag, setSubTag] = useState(null);
  const projectsData = useProjectsData();
  const { t } = useTranslation("project");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    if (newTag === "All") setSubTag(null);
    if (newTag === "School") setSubTag(null);
    if (newTag === "Personal") setSubTag(null);
  };


  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12" aria-label="Projects" itemProp="projects">
        {t("project")}
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6" aria-label="tags" itemProp="tags">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name={t("projectTag1")}
          isSelected={tag === "All"}
          selectedColor={"text-white border-blue-400"}
          unSelectedColor={"text-[#ADB7BE] border-slate-600 hover:border-white"}
          aria-label="All"
        />
        <ProjectTag
          onClick={() => handleTagChange("School")}
          name={t("projectTag2")}
          isSelected={tag === "School"}
          selectedColor={"text-white border-blue-400"}
          unSelectedColor={"text-[#ADB7BE] border-slate-600 hover:border-white"}
          aria-label="School"
        />
        <ProjectTag
          onClick={() => handleTagChange("Personal")}
          name={t("projectTag3")}
          isSelected={tag === "Personal"}
          selectedColor={"text-white border-blue-400"}
          unSelectedColor={"text-[#ADB7BE] border-slate-600 hover:border-white"}
          aria-label="Personal"
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12" aria-label="card" itemProp="card">
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
              technologies={project.technologies}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;