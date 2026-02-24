import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-black-200 border border-purple-500 rounded-xl overflow-hidden shadow-lg"
    >
      {/* Image with hover overlay */}
      <div className="relative w-full h-[220px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center 
                        opacity-0 hover:opacity-100 transition">
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700"
          >
            View Code
          </button>
        </div>
      </div>

      {/* Text content */}
      <div className="p-5">
        <h3 className="text-white font-hacked text-[22px]">{name}</h3>
        <p className="mt-2 text-secondary font-retro text-[14px]">{description}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText} font-hacked font-light text-purple`}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[18px] max-w-3xl leading-[26px] font-retro"
        >
          These projects showcase my skills and experience through real-world examples.
          Each project includes a brief description, tags, and a link to its source code.
        </motion.p>
      </div>

      {/* Cards grid */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");