import styles from "./style";
import {
  Navbar,
  Brand,
  NotEnough,
  CTA,
  Footer,
  Hero,
  Business,
  Packages,
} from "./components";
import Team from "./components/Team";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NotFound from "./components/NotFound";
import { AppleCardsCarouselDemo } from "./components/AppleCardsCarouselDemo";
import Training from "./components/Training";
import Casino101 from "./components/Casino101";
import Contact from "./components/Contact";
import MessageSuccess from "./components/MessageSuccess";
import MessageError from "./components/MessageError";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import CookiePolicy from "./components/CookiePolicy";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence, motion } from "framer-motion"; // Import Framer Motion

// Motion transition settings
const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const Home = () => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="bg-primary w-full overflow-hidden"
  >
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Packages />
        <NotEnough />
        <Brand />
        <CTA />
      </div>
    </div>
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation(); // Get the current location

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
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

const App = () => (
  <Router>
    <ScrollToTop />
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Animated Routes */}
      <AnimatedRoutes />

      {/* Footer */}
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
          <CookiePolicy />
        </div>
      </div>
    </div>
  </Router>
);

export default App;
