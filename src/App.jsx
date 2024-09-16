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
  Events,
} from "./components";
import Team from "./components/Team"; // Import your Team component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router
import NotFound from "./components/NotFound";
import { AppleCardsCarouselDemo } from "./components/AppleCardsCarouselDemo";
import Training from "./components/Training";

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
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer will be rendered on every page */}
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  </Router>
);

export default App;
