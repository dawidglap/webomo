// Layout.jsx
import { Navbar, Footer } from "../components";
import styles from "../style";
import CookiePolicy from "./CookiePolicy";

const Layout = ({ children }) => (
  <div className="w-full overflow-hidden bg-gradient-to-b from-[#0E134A] to-[#F8F9FB]">
    {/* Navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Main Content */}
    <div className="min-h-screen">{children}</div>
    <div className="min-h-screen"></div>

    {/* Footer */}
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
        <CookiePolicy />
      </div>
    </div>
  </div>
);

export default Layout;
