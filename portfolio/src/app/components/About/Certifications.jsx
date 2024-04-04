import useTranslation from "next-translate/useTranslation";

export const useCertifications = () => {
const { t } = useTranslation("certification");

const Certifications = [
    {
      name: t("certification1Title"),
      link:"certifications/Gerez_code_Git_et_Github.pdf",
    },
    {
      name: t("certification2Title"),
      link: "certifications/Utilisez_des_API_REST_dans_vos_projets_web.pdf",
    },
    {
      name: t("certification3Title"),
      link: "certifications/Creez_des_pages_web_dynamiques_avec_JavaScript.pdf",
    },
  ];
  return Certifications;

};
  
  export default useCertifications;