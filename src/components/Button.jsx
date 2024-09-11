import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Button = ({ styles }) => {
  const { t } = useTranslation(); // Destructure the useTranslation hook

  return (
    <button
      type="button"
      className={`my-6 py-6 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      {t("button.reserve")} {/* Use translation for the button text */}
    </button>
  );
};

export default Button;
