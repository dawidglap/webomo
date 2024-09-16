import { LampContainer } from "../components/ui/lamp";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { FeaturesSectionDemo } from "./ui/features-section-demo";

const Training = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and update isMobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind 'md' breakpoint
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Set initial and whileInView values based on screen size
  const initialY = isMobile ? 270 : 270;
  const whileInViewY = isMobile ? 100 : 160;
  return (
    <div>
      <LampContainer>
        <motion.h2
          initial={{ opacity: 0.5, y: initialY }}
          whileInView={{ opacity: 1, y: whileInViewY }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="font-poppins font-semibold bg-gradient-to-r from-gray-500 via-white to-gray-500 py-4 bg-clip-text text-center text-4xl tracking-tight text-transparent md:text-7xl"
        >
          {t("training.heading")}
        </motion.h2>
      </LampContainer>
      <div className="max-w-[1440px] mx-auto">
        <FeaturesSectionDemo />
      </div>
    </div>
  );
};

export default Training;
