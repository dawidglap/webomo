import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "../style";
import { useTranslation } from "react-i18next"; // Import useTranslation
import ButtonCta from "./ButtonCta";

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

const CTA = () => {
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

  const title = t("cta.title");

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
          className={`text-[24px] sm:text-5xl font-bold leading-tight sm:leading-[50px] ${styles.heading2}`}
          variants={typewriterVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {title.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <p
          className={`text-sm sm:text-base mt-3 sm:mt-5 leading-relaxed ${styles.paragraph} max-w-[1024px]`}
        >
          {t("cta.description")}
        </p>
      </div>

      <div className={`mt-5 sm:mt-0 flex justify-center sm:ml-10`}>
        <ButtonCta />
      </div>
    </motion.section>
  );
};

export default CTA;
