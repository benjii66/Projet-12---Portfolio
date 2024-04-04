"use client"
import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import GithubIcon from "../../../../public/github-icon.svg";
import LinkedinIcon from "../../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";


const EmailSection = () => {
  const [state, handleSubmit] = useForm("mayrppgp");
  const { t } = useTranslation("contact");

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">{t("letsconnect")}</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {t("connectParagraph")}
        </p>
        <div className="socials flex flex-row gap-2">
        <Link target="blank" href="https://github.com/benjii66">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link target="blank" href="https://www.linkedin.com/in/benjamiinsimon/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {state.succeeded ? (
          <p className="text-green-500 text-sm mt-2">{t("emailSuccess")}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">{t("emailLabel")}</label>
              <input
                id="email"
                type="email" 
                name="email"
                placeholder="betaBanana@email.com"
                className="bg-[#18191E] border border-[#33353F] text-white rounded-lg block w-full p-2.5"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">{t("subjectLabel")}</label>
              <input
                id="subject"
                type="text" 
                name="subject"
                placeholder={t("subjectPlaceholder")}
                className="bg-[#18191E] border border-[#33353F] text-white rounded-lg block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">{t("messageLabel")}</label>
              <textarea
                id="message"
                name="message"
                placeholder={t("messagePlaceholder")}
                className="bg-[#18191E] border border-[#33353F] text-white rounded-lg block w-full p-2.5"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button type="submit" disabled={state.submitting} className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            {t("sendMessage")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
