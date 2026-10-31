import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

function ExperienceIcon({ type }) {
  if (type === "research") {
    return (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    );
  }
  if (type === "community") {
    return (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  return (
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34" />
      <path d="M14 14.66V17c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-2.34" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
    </svg>
  );
}

function ExperienceCard({ experience, theme }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          theme !== "dark"
            ? "linear-gradient(90deg, rgba(224,234,240,1) 0%, rgba(232,239,243,1) 50%, rgba(224,234,240,1) 100%)"
            : "linear-gradient(135deg, rgba(26,26,46,0.95) 0%, rgba(20,20,38,0.95) 100%)",
        color: theme !== "dark" ? "#7e8c9f" : "#e5e6e9",
        boxShadow: "0 4px 20px -2px rgba(128, 77, 238, 0.25)",
        borderRadius: "16px",
        border: "1px solid rgba(128, 77, 238, 0.3)",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${theme !== "dark" ? "#e0eaf0" : "#212134"}`,
      }}
      date={experience.date}
      iconStyle={{
        background: "linear-gradient(135deg, #915eff 0%, #6830d9 100%)",
        boxShadow: "0 0 0 4px rgba(128, 77, 238, 0.3)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <ExperienceIcon type={experience.iconType} />
        </div>
      }
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="dark:text-white text-ctnPrimaryLight text-[22px] font-bold">
            {experience.title}
          </h3>
          <span className="text-[12px] font-semibold px-2.5 py-1 rounded-full bg-primary/20 text-[#c4b5fd] border border-primary/30">
            {experience.badge}
          </span>
        </div>
        <p
          className="dark:text-[#a78bfa] text-ctnSecondaryLight text-[15px] font-semibold mt-1"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2.5">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="dark:text-gray-300 text-ctnPrimaryLight text-[14px] leading-relaxed pl-1"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

function Experience() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.section className="w-full p-8 mt-16" id="work">
      <motion.div variants={textVariant()}>
        <p className="sectionSubText text-center">Academic & Leadership Track Record</p>
        <h2 className="sectionHeadText text-center">Experience.</h2>
      </motion.div>

      <div className="mt-16 flex flex-col">
        <VerticalTimeline lineColor={theme === "dark" ? "#4c3a7a" : "#8c9db1"}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              theme={theme}
            />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
}

export default SectionWrapper(Experience, "work");
