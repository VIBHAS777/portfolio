import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

function ProjectCard({
  index,
  name,
  venue,
  venueBadge,
  metric,
  gradient,
  borderAccent,
  iconColor,
  icon,
  description,
  tags,
}) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.25, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="w-full sm:w-[360px]"
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        scale={1.02}
        transitionSpeed={800}
        className={`bg-bgSecondaryDark/90 backdrop-blur-md p-6 rounded-2xl w-full h-full min-h-[500px] flex flex-col justify-between border ${borderAccent} shadow-lg shadow-black/40 hover:border-primary/60 transition-colors duration-300`}
      >
        <div>
          {/* Header Visual Box */}
          <div
            className={`w-full h-[150px] rounded-xl bg-gradient-to-br ${gradient} p-4 flex flex-col justify-between relative overflow-hidden border border-white/10`}
          >
            {/* Background decorative glow */}
            <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/5 blur-xl pointer-events-none" />

            <div className="flex justify-between items-start z-10">
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/40 text-gray-200 border border-white/10 backdrop-blur-sm">
                {venueBadge}
              </span>
              <div className={`${iconColor} p-2 rounded-lg bg-black/30 border border-white/10`}>
                {icon}
              </div>
            </div>

            <div className="z-10">
              <p className="text-[12px] text-gray-300 font-medium tracking-wide">
                {venue}
              </p>
              <div className="inline-block mt-1 px-2.5 py-0.5 rounded-md bg-white/10 backdrop-blur-sm text-[12px] font-bold text-white">
                {metric}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="mt-5">
            <h3 className="text-white font-bold text-[21px] leading-tight hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="mt-3 text-ctnSecondaryDark text-[14px] leading-[22px]">
              {description}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[12px] font-medium px-2 py-0.5 rounded-md bg-white/5 ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

function Works() {
  return (
    <section className="xl:my-28 md:mx-20 px-6 py-12" id="projects">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center md:text-left"
      >
        <p className="sectionSubText">Peer-Reviewed Research & Systems</p>
        <h2 className="sectionHeadText">Featured Research.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-ctnSecondaryDark text-[16px] md:text-[17px] max-w-3xl leading-[28px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          A selection of published and under-review research projects spanning
          probabilistic deep learning, medical imaging diagnosis, biomedical
          NLP, physiological IoT monitoring, and software-defined network
          optimization.
        </motion.p>
      </div>

      <div className="mt-14 flex justify-center flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Works;
