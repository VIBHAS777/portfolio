import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "@/utils/motion";

const categories = [
  { title: "Languages", items: technologies.languages },
  { title: "Frameworks", items: technologies.frameworks },
  { title: "Libraries", items: technologies.libraries },
  { title: "Databases", items: technologies.databases },
  { title: "Tools & DevOps", items: technologies.tools },
  { title: "Environments", items: technologies.environments },
];

function Tech() {
  return (
    <section className="w-full h-fit p-8 mt-20" id="skills">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mx-auto"
      >
        <p className="sectionSubText">Technical Toolkit & Frameworks</p>
        <h2 className="sectionHeadText">Skills.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-12 max-w-5xl mx-auto flex flex-col gap-5"
      >
        {categories.map((category, catIdx) => (
          <div
            key={category.title}
            className="w-full p-5 rounded-2xl bg-bgSecondaryDark/80 border border-white/10 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/40 transition-colors shadow-lg shadow-black/20"
          >
            <div className="md:w-[180px] shrink-0 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-purple-400" />
              <h3 className="text-white font-bold text-[17px] tracking-wide">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-4 items-center flex-1">
              {category.items.map((item) => (
                <Link
                  href={item.link}
                  key={item.name}
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-bgPrimaryDark/60 border border-white/5 hover:border-primary/60 hover:-translate-y-1 transition-all group"
                >
                  <div className="w-[28px] h-[28px] relative flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      fill={true}
                      sizes="32px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[13px] text-gray-300 font-medium group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Tech, "skills");
