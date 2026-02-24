import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  // Track when the Hero section is visible
  const { ref, inView } = useInView({
    triggerOnce: true, // load only once
    threshold: 0.2,    // load when 20% of section is visible
  });

  return (
    <section
      ref={ref}
      className="relative w-full h-screen mx-auto bg-cover bg-center"
    >
      {/* Background image with lazy loading */}
      <img
        src="/bg.webp" // compress bg.png → bg.webp for smaller size
        alt="background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Bottom gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent" />

      {/* Text + Neon line */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#5ec1ff]" />
          <div className="w-1 sm:h-80 h-40 blueneon-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-[72px] text-white font-hacked`}>
            Hi, I'm <span className="text-[#04d9ff] font-hacked">K.N.Sooriya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 font-retro`}>
            I am a Computer Engineer, <br className="sm:block hidden" />
            & Full‑Stack Developer
          </p>
        </div>
      </div>

      {/* 3D Computer Canvas (lazy-loaded) */}
      {inView && <ComputersCanvas />}

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
