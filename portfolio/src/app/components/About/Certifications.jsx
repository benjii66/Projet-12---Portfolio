import useTranslation from "next-translate/useTranslation";

export const useCertifications = () => {
const { t } = useTranslation("certification");

const Certifications = [
    {
      name: t("certification1Title"),
      link:"certifications/Creez_des_pages_web_dynamiques_avec_JavaScript.pdf",
    },
    {
      name: t("certification2Title"),
      link: "certifications/Debutez_avec_React.pdf",
    },
    {
      name: t("certification3Title"),
      link: "certifications/Gerez_votre_application_React_avec_Redux_et_Redux_Toolkit.pdf",
    },
    {
      name: t("certification4Title"),
      link: "certifications/Impletentez_base_donnees_relationnelles_SQL.pdf",
    },
    {
      name: t("certification5Title"),
      link: "certifications/Securisez_vos_applications_web_avec_OWASP.pdf",
    },
    {
      name: t("certification6Title"),
      link: "certifications/Gerez_code_Git_et_Github.pdf",
    },
    {
      name: t("certification7Title"),
      link: "certifications/Utilisez_des_API_REST_dans_vos_projets_web.pdf",
    },
    {
      name: t("certification8Title"),
      link: "certifications/Adoptez_les_API_REST_pour_vos_projets_web.pdf",
    },
  ];
  return Certifications;

};
  
  export default useCertifications;