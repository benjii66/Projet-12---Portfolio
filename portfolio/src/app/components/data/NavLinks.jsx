import useTranslation from "next-translate/useTranslation";

const useNavLinks = () => {
   const { t } = useTranslation("about");
 
   const navLinks = [
     {
       title: t("about"),
       path: "/#about"
     },
     {
       title: t("projects"),
       path: "/#projects"
     },
     {
       title: t("contact"),
       path: "/#contact"
     },
   ];
 
   return navLinks;
 };
 
 export default useNavLinks;