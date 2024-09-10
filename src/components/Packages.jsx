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
        className={`${layout.section} flex-col lg:flex-row`} // Replaced sectionReverse with a more neutral layout
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.div
          variants={videoVariants}
          className={`flex-1 flex justify-center items-center relative md:pr-4 pr-0`} // Adjusted the layout of the video
        >
          <video
            src={vid}
            className={`w-full h-auto max-w-[600px] relative z-[5] rounded-lg shadow-lg`} // Adjusted video sizing to avoid it being too left-aligned
            autoPlay
            loop
            muted
          />
          <div className="absolute z-[3] w-[50%] h-[50%] left-1/2 transform -translate-x-1/2 top-0 rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] left-1/2 transform -translate-x-1/2 bottom-0 rounded-full pink__gradient" />
        </motion.div>
        <motion.div
          variants={textVariants}
          className={`${layout.sectionInfo} flex-1`} // Aligning the text properly in relation to the video
        >
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-6 gap-y-10"
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
