"use client"
import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [state, handleSubmit] = useForm("mayrppgp");

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-300 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
            <a href="https://github.com/benjii66" target="_blank" rel="noopener noreferrer">
              <Image src={GithubIcon} alt="Github Icon" width={24} height={24} />
            </a>
            <a href="https://www.linkedin.com/in/benjamiinsimon/" target="_blank" rel="noopener noreferrer">
              <Image src={LinkedinIcon} alt="Linkedin Icon" width={24} height={24} />
            </a>
        </div>
      </div>
      <div>
        {state.succeeded ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
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
              <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
              <input
                id="subject"
                type="text" 
                name="subject"
                placeholder="Just saying hi"
                className="bg-[#18191E] border border-[#33353F] text-white rounded-lg block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Let's talk about..."
                className="bg-[#18191E] border border-[#33353F] text-white rounded-lg block w-full p-2.5"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button type="submit" disabled={state.submitting} className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg w-full">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
