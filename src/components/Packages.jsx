import { useState, useRef } from "react";
import { vid } from "../assets";
import styles, { layout } from "../style";
import PackageCard from "./PackageCard";
import { feedback } from "../constants";
import { motion, useInView } from "framer-motion";

const Packages = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.section
        id="product"
        className={layout.sectionReverse}
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.div
          variants={videoVariants}
          className={layout.sectionImgReverse}
        >
          <video
            src={vid}
            className={`video-container w-[100%] h-[100%] relative z-[5] rounded-lg shadow-lg ${layout.sectionImgReverse}`}
            autoPlay
            loop
            muted
          />
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        </motion.div>
        <motion.div variants={textVariants} className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            <span className="text-gradient">Beeindrucken</span> Sie Ihre Gäste
            mit einem exklusiven
            <br className="sm:block hidden" /> Casino-Erlebnis
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
            Wähle aus einer vielfältigen Auswahl an Casinotischen für deine
            Veranstaltung. Verwandle jeden Ort in dein persönliches Casino
            <br className="" />
            <br />
            <small className="text-dimWhite">
              *Wichtiger Hinweis: <br></br>
              Gespielt wird ohne Geldeinsatz und Auszahlungen. Dies ist
              gesetzlich nicht erlaubt!
            </small>
          </p>
        </motion.div>
      </motion.section>
      <motion.div
        className="flex flex-wrap  justify-center w-full feedback-container relative z-[1]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {feedback.map((card, index) => (
          <PackageCard
            key={card.id}
            index={index}
            {...card}
            applyHoverEffect={!isHovering && index === 1}
          />
        ))}
      </motion.div>
    </>
  );
};

export default Packages;
