// AnimatedRoutes.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../pages/Home";
import Team from "../pages/Team";
import NotFound from "../pages/NotFound";
import AppleCardsCarouselDemo from "../pages/AppleCardsCarouselDemo";
import Training from "../pages/Training";
import Casino101 from "../pages/Casino101";
import Contact from "../pages/Contact";
import MessageSuccess from "../pages/MessageSuccess";
import MessageError from "../pages/MessageError";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/team"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Team />
            </motion.div>
          }
        />
        <Route path="/events" element={<AppleCardsCarouselDemo />} />
        <Route path="/training" element={<Training />} />
        <Route path="/casino101" element={<Casino101 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/message-success" element={<MessageSuccess />} />
        <Route path="/message-error" element={<MessageError />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
