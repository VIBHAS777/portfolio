import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-32 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[30svh] xl:mt-[120px]"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="sectionSubText text-gray-300">Introduction</p>
        <h2 className="sectionHeadText text-white">Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.85)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-8 text-gray-300 text-[16px] md:text-[17px] w-full leading-[28px] flex flex-col gap-6"
      >
        {/* 3D Interactive Tilt Profile Card */}
        <Tilt
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          perspective={1200}
          glareEnable={true}
          glareMaxOpacity={0.12}
          glareColor="#915eff"
          glarePosition="all"
          glareBorderRadius="16px"
          scale={1.015}
          transitionSpeed={1000}
          className="w-full"
        >
          <div
            style={{ transformStyle: "preserve-3d" }}
            className="flex flex-col sm:flex-row gap-6 items-center sm:items-start p-6 rounded-2xl bg-bgSecondaryDark/90 border border-white/10 backdrop-blur-md shadow-2xl shadow-black/40 hover:border-primary/60 transition-all duration-300 group"
          >
            {/* 3D Floating Picture with Glowing Halo */}
            <motion.div
              style={{ transform: "translateZ(45px)", transformStyle: "preserve-3d" }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="relative shrink-0"
            >
              {/* Animated Glowing Halo behind photo */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-purple-500 to-cyan-500 opacity-60 blur-md group-hover:opacity-90 group-hover:blur-lg transition-all duration-500" />

              {/* Photo Frame */}
              <motion.div
                whileHover={{ scale: 1.04, rotateZ: 0.5 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="w-[140px] h-[175px] sm:w-[155px] sm:h-[195px] relative rounded-xl overflow-hidden border-2 border-primary/70 shadow-2xl shadow-primary/40 bg-bgPrimaryDark"
              >
                <Image
                  src="/assets/vibhas_card.png"
                  alt="Vibhas Reddy Araveeti"
                  fill
                  sizes="(max-width: 768px) 150px, 195px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Core Info with 3D Depth */}
            <div
              style={{ transform: "translateZ(30px)" }}
              className="flex flex-col justify-between gap-3 text-center sm:text-left flex-1"
            >
              <div>
                <span className="text-[12px] font-bold uppercase tracking-wider text-primary">
                  AI/ML & Clinical AI Researcher
                </span>
                <h3 className="text-white text-[24px] font-bold mt-1 tracking-tight">
                  Vibhas Reddy Araveeti
                </h3>
                <p className="text-[#a78bfa] text-[14px] font-medium">
                  Amrita Vishwa Vidyapeetham • B.Tech CSE (GPA: 8.65/10)
                </p>
              </div>

              <p className="text-[14.5px] text-gray-300 leading-relaxed">
                I am an <span className="text-white font-semibold">AI/ML and Clinical AI researcher</span> focused on building calibrated deep learning architectures, medical diagnostic pipelines, and healthcare systems. Author of <span className="text-white font-semibold">12+ peer-reviewed publications</span>, including research in the Q1 journal <span className="text-[#a78bfa] font-semibold">Engineered Science</span> and the <span className="text-amber-300 font-semibold">Best Paper Award</span> at IEEE ICKECS 2026.
              </p>

              {/* Highlights (Clean, without US-born chip) */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
                <span className="text-[11.5px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-cyan-400/30 text-cyan-300 shadow-sm hover:border-cyan-400/60 transition-colors">
                  SOF International Mathematics Olympiad (IMO) - Gold Medalist
                </span>
                <span className="text-[11.5px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-emerald-400/30 text-emerald-300 shadow-sm hover:border-emerald-400/60 transition-colors">
                  State Swimming Gold • Varsity Powerlifting Captain
                </span>
                <span className="text-[11.5px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-purple-400/30 text-purple-300 shadow-sm hover:border-purple-400/60 transition-colors">
                  Co-Founder & Lead Developer, ML Minds
                </span>
              </div>
            </div>
          </div>
        </Tilt>

        {/* Action Row: Contact Info & Download Resume */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:vibhasf17@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-primary text-gray-200 hover:text-white transition-all duration-200 text-[14px]"
            >
              <div className="w-4 h-4 text-primary flex items-center justify-center">
                <EmailIcon className="w-4 h-4" />
              </div>
              <span>vibhasf17@gmail.com</span>
            </a>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-[14px]">
              <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Bengaluru, India</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2.5 items-center">
              {socials.map((social) => (
                <Link
                  href={social.link}
                  target="_blank"
                  key={social.id}
                  className="w-9 h-9 p-2 rounded-xl bg-white/5 border border-white/10 hover:border-primary hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center justify-center text-gray-300 hover:text-white"
                  aria-label={social.id}
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            <a
              href="/document/Araveeti_Vibhas_Reddy_Resume.docx"
              download="Araveeti_Vibhas_Reddy_Resume.docx"
              className="w-fit"
            >
              <div className="bg-primary hover:bg-tertiary text-white px-5 py-2 rounded-xl font-semibold shadow-md shadow-primary/30 cursor-pointer transition-all flex items-center gap-2 text-[14px]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Resume</span>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
