// AnimatedRoutes.jsx
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
import { useEffect } from "react";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } },
};

// Wrapper per aggiungere animazioni a tutte le pagine
const MotionWrapper = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

// Componente per la gestione del redirect in base a location.state
const ProtectedRoute = ({ element: Component }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state?.fromForm) {
      navigate("/404"); // Redirect alla 404 se l'utente non proviene dal form
    }
  }, [location, navigate]);

  return <Component />;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <MotionWrapper>
              <Home />
            </MotionWrapper>
          }
        />
        <Route
          path="/team"
          element={
            <MotionWrapper>
              <Team />
            </MotionWrapper>
          }
        />
        <Route path="/events" element={<AppleCardsCarouselDemo />} />
        <Route path="/training" element={<Training />} />
        <Route path="/casino101" element={<Casino101 />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/message-success"
          element={
            <MotionWrapper>
              <ProtectedRoute element={MessageSuccess} />
            </MotionWrapper>
          }
        />
        <Route
          path="/message-error"
          element={
            <MotionWrapper>
              <ProtectedRoute element={MessageError} />
            </MotionWrapper>
          }
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
