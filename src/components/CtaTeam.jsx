import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "../style";
import Button from "./Button";
import { useTranslation } from "react-i18next"; // Import useTranslation

const typewriterVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const CtaTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { t } = useTranslation(); // Use useTranslation hook

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const title = t("cta_team.title");

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <motion.h2
          className={styles.heading2}
          variants={typewriterVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {title.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="">
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <p className={`${styles.paragraph} max-w-[1024px] mt-5`}>
          {t("cta_team.description")}
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </motion.section>
  );
};

export default CtaTeam;
