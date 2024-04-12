import React from "react";
import useCertifications from "../About/Certifications";
import useTranslation from "next-translate/useTranslation";


const hoverLine="inline-block relative hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] hover:after:bg-blue-400 hover:after:absolute hover:after:left-0 hover:after:bottom-0"

const useTabData = () => {
  const Certifications = useCertifications();
  const { t } = useTranslation("common");

const TabData = [
    {
      title: t("skills"),
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>React.JS</li>
          <li>Next.JS</li>
          <li>Git & Github</li>
          <li>API Swagger, Postman</li>
        </ul>
      ),
    },
    {
      title: t("education"),
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
  return TabData;
};
export default useTabData;