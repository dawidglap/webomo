import styles from "../style";
import { discount, gaming } from "../assets";
import GetStarted from "./GetStarted";
import Button from "./Button";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="show"
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <motion.div
          variants={textVariants}
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Rabatt bis{" "}
            <span className="text-white">September</span> 2024
          </p>
        </motion.div>

        <motion.div
          variants={textVariants}
          className="flex flex-row justify-between items-center w-full"
        >
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
            Wir schaffen <br className="sm:block hidden" />{" "}
            <span className="text-gradient">unvergessliche</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0 ps-8">
            <GetStarted />
          </div>
        </motion.div>

        <motion.h1
          variants={textVariants}
          className="font-poppins font-semibold ss:text-[68px] text-[42px] text-white ss:leading-[100.8px] leading-[75px] w-full"
        >
          Momente für Ihr Event.
        </motion.h1>
        <motion.p
          variants={textVariants}
          className={`${styles.paragraph} text-gradient max-w-[470px] mt-5`}
        >
          Unterhaltung der Spitzenklasse, die alle Erwartungen übertrifft.
        </motion.p>
        <motion.div
          variants={textVariants}
          className={`ss:hidden ${styles.flexCenter}`}
        >
          <Button />
        </motion.div>
      </motion.div>

      <motion.div
        variants={imageVariants}
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={gaming}
          alt="billing"
          className="-my-20 w-[100%] h-[100%] relative z-[5]"
          id="hero-img"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </motion.div>
    </section>
  );
};

export default Hero;
