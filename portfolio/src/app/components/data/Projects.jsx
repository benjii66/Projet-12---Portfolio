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
      technologies: ["/images/technologies/js.webp", "/images/technologies/html.webp", "/images/technologies/css.png"],
    },
    {
      id: 2,
      title: t("project2Title"),
      description: t("project2Description"),
      image: "/images/projects/Kasa-logo.png",
      tag: ["All", "School"],
      gitUrl: "https://github.com/benjii66/Kasa",
      previewUrl: "https://kasa-silk.vercel.app/",
      technologies: ["/images/technologies/React.webp", "/images/technologies/html.webp", "/images/technologies/css.webp"]
    },
    {
      id: 3,
      title: t("project3Title"),
      description: t("project3Description"),
      image: "/images/projects/Oh-My-Food.png",
      tag: ["All", "School"],
      gitUrl: "https://github.com/benjii66/Projet4-OhMyFood",
      previewUrl: "https://benjii66.github.io/Projet4-OhMyFood/index.html",
      technologies: ["/images/technologies/html.webp", "/images/technologies/sass.webp"]
    },
  ];
  return projectsData;
};
export default useProjectsData;
