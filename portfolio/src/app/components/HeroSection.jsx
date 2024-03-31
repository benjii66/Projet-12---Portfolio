"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-100">
              Hello, I&lsquo;m
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Benjamin,",
                1000,
                "Front-End,",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
              className="text-2xl sm:text-2xl lg:text-8xl"
            />
            <br></br>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-600">
              Developer
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            You'll never walk alone<i>🎶</i>
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-900 to-blue-300 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-900 to-blue-300 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {/* TODO ADD THE CV IN A LINK  */}
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
        <div className="bg-[#46454559] w-[250px] h-[250px] rounded-full relative mt-20">
          <Image
            src="/images/benji.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:top-1/2"
            width={300}
            height={300}
          />
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
