import { video2 } from "../assets";
import styles, { layout } from "../style";
import QuickContact from "./QuickContact";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const NotEnough = () => {
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
    <motion.section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-5`}
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <motion.div
        variants={sectionVariants}
        className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]"
      >
        <motion.h2 variants={textVariants} className={styles.heading2}>
          Möchten Sie mehr? <br className="sm:block hidden" />
        </motion.h2>

        <motion.div variants={textVariants} className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} md:ps-8 text-left max-w-[450px]`}>
            <span className="text-gradient">Dein Casino, deine Wahl!</span>{" "}
            <br />
            Mit unseren individuellen Paketen kannst du deine Veranstaltung zu
            etwas Besonderem machen. Entdecke jetzt die Vielfalt unserer
            Angebote und gestalte dein eigenes, einzigartiges Casino-Event!
          </p>
          <QuickContact />
        </motion.div>
      </motion.div>

      <motion.div
        variants={videoVariants}
        className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]"
      >
        <div className={layout.sectionImgReverse}>
          <video
            src={video2}
            className={`video-container w-[100%] h-[100%] relative z-[5] rounded-lg shadow-lg ${layout.sectionImgReverse}`}
            autoPlay
            loop
            muted
          />
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default NotEnough;
