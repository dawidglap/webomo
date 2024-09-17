import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCookieBite } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importa il CSS di react-toastify

const CookiePolicy = () => {
  const { t } = useTranslation();
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
    localStorage.setItem("cookiePolicyAccepted", "false");
    // Mostra il messaggio con toastify quando l'utente rifiuta
    toast.info(
      t("cookiePolicy.declineMessage", "Cookies abgelehnt. Kein Tracking."),
      {
        position: "bottom-right",
        autoClose: 3000,
        className:
          "bg-gray-800 text-yellow-400 border border-yellow-500 rounded-md p-4 shadow-lg",
        bodyClassName: "font-semibold text-sm",
        closeButton: false,
        icon: <FaCookieBite className="text-yellow-400" />, // Icona personalizzata gialla
        progressClassName: "bg-yellow-400", // Barra di avanzamento gialla
      }
    );
    setShowPolicy(false);
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
  };

  return (
    <>
      <AnimatePresence>
        {showPolicy && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 md:right-auto z-50 flex max-w-sm items-center justify-center rounded-lg mx-auto"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <div className="max-w-screen-md rounded-lg bg-gray-800 p-4 shadow-lg text-white">
              <div className="flex items-center">
                <FaCookieBite className="mr-2 text-2xl text-yellow-400" />
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
                  className="text-xs text-yellow-400 underline"
                >
                  {t("cookiePolicy.link", "Learn more")}
                </Link>
              </div>
              <div className="mt-2 flex justify-end">
                <button
                  className="hover:bg-neutral-600 mr-2 rounded bg-neutral-500 px-2 py-1 text-xs"
                  onClick={handleDecline}
                >
                  {t("cookiePolicy.decline", "Decline")}
                </button>
                <button
                  className="rounded bg-yellow-400 px-2 py-1 text-xs text-black hover:bg-yellow-300"
                  onClick={handleAccept}
                >
                  {t("cookiePolicy.accept", "Accept")}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ToastContainer per gestire il messaggio di rifiuto */}
      <ToastContainer />
    </>
  );
};

export default CookiePolicy;
