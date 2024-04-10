"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import useTabData from '../data/TabData';
import useTranslation from "next-translate/useTranslation";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const TabData = useTabData();
  const { t } = useTranslation("about");

  const handleTabChange = (id) => {
    startTransition(() =>{
      setTab(id);
    });
  };

  return (

    <section className="text-white" id="about" aria-label='about' itemScope itemProp='about'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/Desk.jpg" alt="about background" width={500} height={500} aria-label='about background' itemProp='image' />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{t("about")}</h2>
          <p className="text-base lg:text-lg" aria-label='about paragraph' itemScope={true} itemProp='text'>
          {t("aboutParagraph")}
          </p>
          <div className="flex flex-row justify-start mt-8" aria-label='buttons' itemScope itemProp='buttons'>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              itemtype="https://schema.org/Skills"
              itemProp="skills"
            >
              {" "}
              {t("skills")}{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              itemtype="https://schema.org/Education"
              itemProp="education"
            >
              {" "}
              {t("education")}{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              itemtype="https://schema.org/Certifications"
              itemProp="certifications"
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TabData.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection