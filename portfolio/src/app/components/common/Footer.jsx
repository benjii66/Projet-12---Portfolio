import Image from "next/image";
import React from "react";
import useTranslation from "next-translate/useTranslation";

const Footer = () => {
  const { t } = useTranslation("contact");
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Image
            src="/images/Logo-B-NoCircle-BG-Removed.png"
            alt="hero image"
            className="transform -translate-x-1/2  -translate-y-1/4 left-1/2 lg:translate-x-0 lg:w-20 lg:h-20 "
            width={75}
            height={75}
          />
        <p className="text-slate-600">{t("copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
