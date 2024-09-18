import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import styles from "../style";
import { arrowUp } from "../assets";
import { useTranslation } from "react-i18next"; // Import useTranslation

const GetStarted = () => {
  const { t } = useTranslation(); // Use useTranslation hook

  return (
    <Link
      to="/contact"
      className="rounded-full bg-blue-gradient p-[2px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-yellow-500" // Add hover effect on the Link
    >
      <div
        className={`${styles.flexCenter} min-w-[140px] min-h-[140px] bg-primary rounded-full p-[2px] cursor-pointer transition-colors duration-300`}
      >
        <div
          className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full`}
        >
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
              <span className="text-gradient">{t("getStarted.reserve")}</span>
              <br />
              <span className="text-gradient">{t("getStarted.now")}</span>
            </p>
          </div>

          {/* Optional arrow icon */}
          {/* <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
          </p> */}
        </div>
      </div>
    </Link>
  );
};

export default GetStarted;
