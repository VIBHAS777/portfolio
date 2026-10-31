import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

function AchievementCard({
  index,
  title,
  organization,
  category,
  date,
  badgeColor,
  testimonial,
  designation,
}) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="bg-bgSecondaryDark/90 backdrop-blur-md p-8 rounded-3xl w-full sm:w-[360px] border border-white/10 flex flex-col justify-between shadow-xl shadow-black/30 hover:border-primary/50 transition-all duration-300"
    >
      <div>
        <div className="flex justify-between items-start gap-3">
          <span
            className={`text-[12px] font-semibold px-3 py-1 rounded-full border ${badgeColor}`}
          >
            {category}
          </span>
          <span className="text-[12px] text-gray-400 font-medium">{date}</span>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500/20 to-yellow-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34" />
              <path d="M14 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-bold text-[20px] leading-tight">
              {title}
            </h3>
            <p className="text-[#a78bfa] text-[13px] font-semibold mt-0.5">
              {organization}
            </p>
          </div>
        </div>

        <p className="mt-5 text-gray-300 text-[14px] leading-[24px]">
          {testimonial}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-gray-400 text-[12px]">Conferred by</span>
        <span className="text-white font-medium text-[13px]">
          {designation}
        </span>
      </div>
    </motion.div>
  );
}

function Feedbacks() {
  return (
    <div className="mt-12 bg-black-100/60 rounded-[28px] border border-white/5 overflow-hidden" id="achievements">
      <div className="bg-gradient-to-r from-tertiary via-[#1e1338] to-tertiary rounded-2xl padding min-h-[260px]">
        <motion.div variants={textVariant()} className="text-center">
          <p className="sectionSubText">Honors & Accolades</p>
          <h2 className="sectionHeadText">Achievements.</h2>
        </motion.div>
      </div>

      <div className="-mt-16 pb-16 paddingX flex flex-wrap gap-7 justify-center">
        {testimonials.map((achievement, index) => (
          <AchievementCard
            key={achievement.title}
            index={index}
            {...achievement}
          />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Feedbacks, "achievements");
