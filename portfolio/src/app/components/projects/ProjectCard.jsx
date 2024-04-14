import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";



const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, technologies }) => {
  const [tooltipContent, setTooltipContent] = useState(false);

  return (
    <>

      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
        aria-label="background image"
        itemScope
        itemProp="image"
      >

        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
            aria-label="github link"
            itemProp="url"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" aria-label="code" itemProp="code" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
            aria-label="website link"
            itemProp="url"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" aria-label="eye" itemProp="eye" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-4 flex flex-row items-center justify-center" aria-label="title" itemScope itemProp="title">{title}</h5>
        <div className="justify-center flex items-center mb-4 tracking-wide z-10">
          {technologies.map((tech, index) => (
            <div key={index} className="relative w-10 h-10 mr-2 flex items-center justify-center">
              <img
                src={tech.src}
                alt={`${tech.name} Logo`}
                className="h-10 w-10"
                onMouseEnter={() => setTooltipContent(tech.name)}
                onMouseLeave={() => setTooltipContent("")}
              />
              {tooltipContent === tech.name && (
                  <div className="absolute -top-14 px-3 py-2.5 border-2 font-bold uppercase text-indigo-500 bg-white rounded-xl tracking-wide z-10">
                  <p className="animate-bounce" aria-label="technologies">
                    {tooltipContent}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-[#ADB7BE]" aria-label="description" itemProp="description">{description}</p>
      </div>
    </>
  );
};

export default ProjectCard;
