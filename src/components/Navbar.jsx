import { useState } from "react";
import styles from "../style";
import { useTranslation } from "react-i18next";
import { close, ecsLogo, menu } from "../assets";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // Define the navLinks array directly in the component
  const navLinks = [
    { id: "home", title: "navLinks.home", path: "/" },
    { id: "events", title: "navLinks.events", path: "/events" },
    { id: "product", title: "navLinks.product", path: "/product" },
    { id: "clients", title: "navLinks.clients", path: "/clients" },
    { id: "team", title: "navLinks.team", path: "/team" },
  ];

  return (
    <nav className="w-full flex justify-between items-center navbar">
      <img
        src={ecsLogo}
        alt="ecs-logo"
        className="w-[48px] xs:w-[60px] ss:w-[72px] sm:w-[84px] md:w-[96px] mt-2 md:pt-3 pt-3"
      />

      {/* Desktop Menu */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={nav.path}>{t(nav.title)}</Link>{" "}
          </li>
        ))}

        {/* Language Switcher for Desktop */}
        <div className="flex space-x-4 ml-10">
          <button
            onClick={() => changeLanguage("en")}
            className={`${
              i18n.language === "en" ? "text-white" : "text-dimWhite"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("de")}
            className={`${
              i18n.language === "de" ? "text-white" : "text-dimWhite"
            }`}
          >
            DE
          </button>
          <button
            onClick={() => changeLanguage("it")}
            className={`${
              i18n.language === "it" ? "text-white" : "text-dimWhite"
            }`}
          >
            IT
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            className={`${
              i18n.language === "fr" ? "text-white" : "text-dimWhite"
            }`}
          >
            FR
          </button>
        </div>
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center z-[10000]">
        {/* Language Switcher for Mobile */}
        <div className="flex space-x-4 mr-4">
          <button
            onClick={() => changeLanguage("en")}
            className={`${
              i18n.language === "en" ? "text-white" : "text-dimWhite"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("de")}
            className={`${
              i18n.language === "de" ? "text-white" : "text-dimWhite"
            }`}
          >
            DE
          </button>
          <button
            onClick={() => changeLanguage("it")}
            className={`${
              i18n.language === "it" ? "text-white" : "text-dimWhite"
            }`}
          >
            IT
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            className={`${
              i18n.language === "fr" ? "text-white" : "text-dimWhite"
            }`}
          >
            FR
          </button>
        </div>

        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false); // Close the menu after clicking a link
                }}
              >
                <Link to={nav.path}>{t(nav.title)}</Link>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
