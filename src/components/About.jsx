import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    scale={1}
    transitionSpeed={250}
    className="xs:w-[250px] w-full"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full border-2 border-[#808080] rounded-sm bg-[#c0c0c0] 
                 shadow-[inset_2px_2px_#fff,inset_-2px_-2px_#000]"
    >
      {/* Title bar */}
      <div className="w-full bg-[#000080] text-white px-2 py-1 flex justify-between items-center">
        <span className="font-bold text-sm">{title}</span>
        <span className="bg-[#c0c0c0] text-black px-2 cursor-pointer">X</span>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center py-5 px-4">
        <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
        <h3 className="text-black text-[16px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2
          className={`${styles.sectionHeadText} font-hacked font-light text-purple`}
        >
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[24px] max-w-3xl leading-[30px] font-retro"
      >
        I'm a computer engineer with strong expertise in digital electronic
        design and hands‑on experience in AI projects, particularly large
        language models (LLMs). Alongside my engineering background, I
        specialize in full‑stack web development, building scalable, efficient,
        and user‑friendly applications using modern frameworks. I’m a fast
        learner and thrive in collaborative environments, working closely with
        clients to design innovative solutions that bridge hardware, AI, and
        software. Let’s work together to transform your ideas into impactful,
        real‑world systems!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");