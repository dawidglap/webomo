import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCookieBite } from "react-icons/fa";
import { Link } from "react-router-dom"; // Se usi React Router
import { useTranslation } from "react-i18next"; // Usa il pacchetto di traduzione

const CookiePolicy = () => {
  const { t } = useTranslation(); // Hook per la traduzione
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiePolicyAccepted");
    if (!accepted) {
      setShowPolicy(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiePolicyAccepted", "true");
    setShowPolicy(false);
  };

  const handleDecline = () => {
    setShowPolicy(false);
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {showPolicy && (
        <motion.div
          className="fixed bottom-0 left-0  z-50 flex max-w-sm items-center justify-center rounded-lg  mx-auto"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
        >
          <div className="max-w-screen-md rounded-lg bg-gray-800 p-4 shadow-lg text-white">
            <div className="flex items-center">
              <FaCookieBite className="mr-2 text-2xl text-yellow-500" />
              <h3 className="text-gradient text-sm font-bold">
                {t("cookiePolicy.title")}
              </h3>
            </div>
            <p className="mt-4 text-xs">
              {t(
                "cookiePolicy.description",
                "We use cookies to ensure the best experience on our site."
              )}
            </p>
            <div className="mt-2">
              <Link
                to="/privacy-policy"
                className="text-xs text-yellow-500 underline"
              >
                {t("cookiePolicy.link", "Learn more")}
              </Link>
            </div>
            <div className="mt-2 flex justify-end">
              <button
                className="hover:bg-gray-700 mr-2 rounded bg-neutral-500 px-2 py-1 text-xs"
                onClick={handleDecline}
              >
                {t("cookiePolicy.decline", "Decline")}
              </button>
              <button
                className="rounded bg-yellow-500 px-2 py-1 text-xs text-black hover:bg-yellow-400"
                onClick={handleAccept}
              >
                {t("cookiePolicy.accept", "Accept")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookiePolicy;
