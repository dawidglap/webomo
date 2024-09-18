import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { useTranslation } from "react-i18next"; // Import useTranslation

const Button = ({ styles }) => {
  const { t } = useTranslation(); // Destructure the useTranslation hook

  return (
    <Link to="/contact">
      {" "}
      {/* Wrap the button with the Link component */}
      <button
        type="button"
        className={`min-w-[90vw] ss:min-w-[15vw] mt-6 py-4 px-4 font-poppins font-medium text-[18px] border-b-2 border-r-2 border-yellow-400 text-white bg-black-gradient rounded-[10px] outline-none`}
      >
        {t("button.reserve")} {/* Use translation for the button text */}
      </button>
    </Link>
  );
};

export default Button;
