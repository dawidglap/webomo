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
import Team from "./components/Team"; // Import your Team component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router
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

const Home = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div> */}

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
  </div>
);

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar will be rendered on every page */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Define Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/team" element={<Team />} /> {/* Team page */}
        <Route path="/events" element={<AppleCardsCarouselDemo />} />{" "}
        <Route path="/training" element={<Training />} /> {/* Team page */}
        <Route path="/casino101" element={<Casino101 />} /> {/* Team page */}
        <Route path="/contact" element={<Contact />} /> {/* Team page */}
        <Route path="/message-success" element={<MessageSuccess />} />
        <Route path="/message-error" element={<MessageError />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer will be rendered on every page */}
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
