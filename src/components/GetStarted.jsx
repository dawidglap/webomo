import styles from "../style";
import { arrowUp } from "../assets";
import { useTranslation } from "react-i18next"; // Import useTranslation

const GetStarted = () => {
  const { t } = useTranslation(); // Use useTranslation hook

  return (
    <div
      className={`${styles.flexCenter} min-w-[140px] min-h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins  font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">{t("getStarted.reserve")}</span>{" "}
            <br />
            <span className="text-gradient">{t("getStarted.now")}</span>{" "}
            {/* Translate the "Reservieren" text */}
          </p>
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          {/* Optional arrow icon (commented out for now) */}
          {/* <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" /> */}
          <span className="text-gradient"></span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
