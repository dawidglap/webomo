import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation

const QuickContact = ({ styles }) => {
  const { t } = useTranslation(); // Use useTranslation hook

  return (
    <div className="">
      <button
        type="button"
        className={`my-6 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        {t("quickContact.buttonText")} {/* Translate the button text */}
      </button>
    </div>
  );
};

export default QuickContact;
