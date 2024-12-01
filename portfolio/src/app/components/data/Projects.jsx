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
      technologies: [{src: "/images/technologies/js.webp", name:"JavaScript"}, {src:"/images/technologies/html.webp", name:"HTML"}, {src:"/images/technologies/css.webp" ,name:"CSS"}],
    },
    {
      id: 2,
      title: t("project2Title"),
      description: t("project2Description"),
      image: "/images/projects/Kasa-logo.png",
      tag: ["All", "School"],
      gitUrl: "https://github.com/benjii66/Kasa",
      previewUrl: "https://kasa-silk.vercel.app/",
      technologies: [{src: "/images/technologies/React.webp", name:"React"}, {src:"/images/technologies/html.webp", name:"HTML"}, {src:"/images/technologies/css.webp" ,name:"CSS"}],

    },
    {
      id: 3,
      title: t("project3Title"),
      description: t("project3Description"),
      image: "/images/projects/Oh-My-Food.png",
      tag: ["All", "School"],
      gitUrl: "https://github.com/benjii66/Projet4-OhMyFood",
      previewUrl: "https://benjii66.github.io/Projet4-OhMyFood/index.html",
      technologies: [{src:"/images/technologies/html.webp", name:"HTML"}, {src:"/images/technologies/sass.webp" ,name:"SASS"}],
    },
    {
      id: 4,
      title: t("project4Title"),
      description: t("project4Description"),
      image: "/images/projects/BenjoLingo.png",
      tag: ["All", "Personal"],
      gitUrl: "https://github.com/benjii66/lingo",
      previewUrl: "https://benjolingo.vercel.app",
      technologies: [{src:"/images/technologies/Next.webp", name:"Next"}, {src:"/images/technologies/drizzle.webp" ,name:"Drizzle"}, {src:"/images/technologies/Typescript.webp" ,name:"Typescript"}],
    },
    {
      id: 4,
      title: t("project5Title"),
      description: t("project5Description"),
      image: "/images/projects/RevealAnimation.png",
      tag: ["All", "Personal"],
      gitUrl: "https://github.com/benjii66/reveal-animation",
      previewUrl: "https://video-reveal-animation.vercel.app/",
      technologies: [{src:"/images/technologies/Next.webp", name:"Next"}, {src:"/images/technologies/react-gsap.webp" ,name:"GSAP"}, {src:"/images/technologies/Typescript.webp" ,name:"Typescript"}],
    },
    {
      id: 5,
      title: t("project6Title"),
      description: t("project6Description"),
      image: "/images/projects/Tabac.jpg", // Mets à jour avec le chemin de ton image
      alt: "Tabac Le Soler Website",  
      tag: ["All", "Personal"],
      gitUrl: "https://github.com/benjii66/Tabac",
      previewUrl: "https://tabac-lesoler.vercel.app/",
      technologies: [{ src: "/images/technologies/Next.webp", name: "Next" },{ src: "/images/technologies/Typescript.webp", name: "Typescript" },{ src: "/images/technologies/react-gsap.webp", name: "GSAP" }],
    },
    
  ];
  return projectsData;
};
export default useProjectsData;
