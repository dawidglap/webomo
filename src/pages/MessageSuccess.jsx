import React, { useEffect } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import useWindowSize from "../hooks/useWindowSize";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation

const MessageSuccess = () => {
  const { t } = useTranslation();
  const { width, height } = useWindowSize();
  const navigate = useNavigate(); // Hook for redirecting
  const location = useLocation(); // Hook to check state

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeInOut", delay: 0.8 },
    },
    hover: {
      scale: 1.1,
      transition: { yoyo: Infinity, duration: 0.4 },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, delay: 0.5 } },
  };

  // Check if the user has been redirected from the form
  useEffect(() => {
    if (!location.state?.fromForm) {
      navigate("/404"); // Redirect to 404 if accessed directly
    }
  }, [location, navigate]);

  // Automatically redirect after the confetti animation ends (7 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirect to the home page
    }, 6000); // 7 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  return (
    <div className="relative max-w-[1440px] mx-auto px-4 flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black to-gray-900">
      {/* Confetti Effect */}
      <Confetti
        width={width > 768 ? width : width - 40}
        height={height}
        recycle={false}
        numberOfPieces={width > 768 ? 200 : 100}
      />

      {/* Animated Background Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black via-green-900 to-black opacity-50 blur-3xl"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl text-yellow-500 mb-6 transform rotate-1">
          🎉 {t("messageSuccess.title", "Thank You for Your Message!")} 🎉
        </h1>
        <p className="font-poppins text-lg sm:text-xl md:text-2xl text-neutral-400 px-4 mb-6">
          {t(
            "messageSuccess.description",
            "We will get back to you shortly. Meanwhile, feel free to explore more about our exclusive casino services."
          )}
        </p>
      </motion.div>
    </div>
  );
};

export default MessageSuccess;
