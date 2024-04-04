import useTranslation from "next-translate/useTranslation";

const useProjectsData = () => {
 const { t } = useTranslation("project");
 
 const projectsData = [
    {
        id: 1,
        title: t("project1Title"),
        description: t("project1Description"),
        image: "/images/projects/P9-Nina.png",
        alt: "Nina's website",
        tag: ["All", "School"],
        gitUrl: "https://github.com/benjii66/P9-Nina",
        previewUrl: "https://benjii66.github.io/P9-Nina/",
        tooltipContent: "JS,HTML,CSS"
      },
      {
        id: 2,
        title: t("project2Title"),
        description: t("project2Description"),
        image: "/images/projects/Kasa-logo.png",
        tag: ["All", "School"],
        gitUrl: "https://github.com/benjii66/Kasa",
        previewUrl: "https://kasa-silk.vercel.app/",
        tooltipContent: "React,HTML,CSS"
      },
      {
        id: 3,
        title: t("project3Title"),
        description: t("project3Description"),
        image: "/images/projects/Oh-My-Food.png",
        tag: ["All", "School"],
        gitUrl: "https://github.com/benjii66/Projet4-OhMyFood",
        previewUrl: "https://benjii66.github.io/Projet4-OhMyFood/index.html",
        tooltipContent: "HTML,SASS"
      },
      {
        id: 4,
        title: t("project4Title"),
        description: t("project4Description"),
        image: "/images/projects/Print-It.png",
        tag: ["All", "School"],
        gitUrl: "https://github.com/benjii66/Projet-5-Print-It-JS",
        previewUrl: "https://benjii66.github.io/Projet-5-Print-It-JS/",
        tooltipContent: "JS, HTML,CSS"
      },
      {
        id: 5,
        title: t("project5Title"),
        description: t("project5Description"),
        image: "/images/projects/5.png",
        tag: ["All", "School"],
        gitUrl: "/",
        previewUrl: "/",
        tooltipContent: "React, HTML,CSS"
      },
      {
        id: 6,
        title: t("project6Title"),
        description: t("project6Description"),
        image: "/images/projects/6.png",
        tag: ["All", "Personal"],
        gitUrl: "/",
        previewUrl: "/",
        tooltipContent: "React, HTML,CSS"
      },
    ];
    return projectsData;
};
export default useProjectsData;
