import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: 50 },
      show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    }}
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </motion.div>
);

const Business = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  return (
    <section id="features" className={layout.section} ref={ref}>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className={layout.sectionInfo}
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 50 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className={styles.heading2}
        >
          Wie funktioniert <br className="sm:block hidden" />
          <span>Event Casino Schweiz?</span>
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}
        >
          Genießen Sie Casino-Unterhaltung auf höchstem Niveau für Ihre nächste
          Feier in der ganzen Schweiz.
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            show: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className="ss:flex hidden md:mr-4 mr-0"
        >
          <Button styles={`mt-10`} />
        </motion.div>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className={`${layout.sectionImg} flex-col`}
      >
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            show: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className={`ss:hidden ${styles.flexCenter}`}
        >
          <Button styles={`mt-10`} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Business;
