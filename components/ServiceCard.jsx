import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

function ServiceCard({ index, title, subtitle, icon }) {
  return (
    <Tilt
      className="w-full xs:w-[260px]"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.03}
      transitionSpeed={600}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full green-pink-gradient p-[1px] rounded-[24px] shadow-card h-full"
      >
        <div className="dark:bg-bgSecondaryDark bg-bgSecondaryLight rounded-[23px] py-7 px-6 min-h-[290px] flex justify-between items-center flex-col text-center h-full">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            {icon}
          </div>
          <div className="my-3">
            <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[19px] font-bold leading-snug">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-2 text-ctnSecondaryDark text-[13px] leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
          <div className="w-8 h-1 rounded-full bg-gradient-to-r from-primary to-purple-400 opacity-60" />
        </div>
      </motion.div>
    </Tilt>
  );
}

export default ServiceCard;
