import styles from "../style";
import {
  ecsLogo,
  fullLogo,
  instagram,
  facebook,
  twitter,
  linkedin,
} from "../assets";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation(); // Use useTranslation for text

  // Move the footerLinks and socialMedia arrays into the component
  const footerLinks = [
    {
      title: t("footer.usefulLinks"), // Translate title
      links: [
        { name: t("footer.content"), link: "https://www.hoobank.com/content/" },
        {
          name: t("footer.howItWorks"),
          link: "https://www.hoobank.com/how-it-works/",
        },
        { name: t("footer.create"), link: "https://www.hoobank.com/create/" },
        { name: t("footer.explore"), link: "https://www.hoobank.com/explore/" },
        {
          name: t("footer.termsServices"),
          link: "https://www.hoobank.com/terms-and-services/",
        },
      ],
    },
    {
      title: t("footer.community"),
      links: [
        {
          name: t("footer.helpCenter"),
          link: "https://www.hoobank.com/help-center/",
        },
        {
          name: t("footer.partners"),
          link: "https://www.hoobank.com/partners/",
        },
        {
          name: t("footer.suggestions"),
          link: "https://www.hoobank.com/suggestions/",
        },
        { name: t("footer.blog"), link: "https://www.hoobank.com/blog/" },
        {
          name: t("footer.newsletters"),
          link: "https://www.hoobank.com/newsletters/",
        },
      ],
    },
    {
      title: t("footer.partner"),
      links: [
        {
          name: t("footer.ourPartner"),
          link: "https://www.hoobank.com/our-partner/",
        },
        {
          name: t("footer.becomePartner"),
          link: "https://www.hoobank.com/become-a-partner/",
        },
      ],
    },
  ];

  const socialMedia = [
    { id: "instagram", icon: instagram, link: "https://www.instagram.com/" },
    { id: "facebook", icon: facebook, link: "https://www.facebook.com/" },
    { id: "twitter", icon: twitter, link: "https://www.twitter.com/" },
    { id: "linkedin", icon: linkedin, link: "https://www.linkedin.com/" },
  ];

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start items-center md:items-start">
          <img
            src={fullLogo}
            alt="event casino schweiz"
            className="h-[72.14px] object-contain md:self-start"
          />
        </div>

        {/* Footer Links */}
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-white cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                    onClick={() => window.open(link.link, "_blank")}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright and Social Media */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite">
          Copyright Ⓒ {currentYear} Event Casino Schweiz.{" "}
          {t("footer.allRightsReserved")}
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
