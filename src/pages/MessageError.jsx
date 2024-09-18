import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MessageError = ({ errorMessage }) => {
  const { t } = useTranslation();

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Background animation
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, delay: 0.5 } },
  };

  return (
    <div className="relative max-w-[1440px] mx-auto px-4 flex flex-col items-center justify-center h-screen bg-gradient-to-br from-black to-gray-900">
      {/* Animated Background Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black via-red-900 to-black opacity-50 blur-3xl"
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center "
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Responsive heading */}
        <h1 className="font-poppins font-semibold text-4xl sm:text-5xl md:text-6xl text-gradient pb-8">
          {t("messageError.title", "Oops! Something went wrong.")}
        </h1>

        {/* Responsive description */}
        <p className="font-poppins text-lg sm:text-xl md:text-2xl text-neutral-400 mb-4 px-2 sm:px-4">
          {t(
            "messageError.description",
            "We apologize for the inconvenience. Please contact us directly."
          )}
        </p>

        {/* Responsive contact details */}
        <p className="font-poppins font-semibold text-md sm:text-lg md:text-xl text-white mb-6 px-2 sm:px-4">
          {t(
            "messageError.contact",
            "Phone: +41 76 703 12 24 | Email: hello@eventcasino.ch"
          )}
        </p>

        {/* Display error message if any */}
        {errorMessage && (
          <p className="font-poppins text-sm sm:text-base text-red-300 mt-2">
            {errorMessage}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default MessageError;
