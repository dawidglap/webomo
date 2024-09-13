import { useTranslation } from "react-i18next";
import { Carousel, Card } from "./ui/apple-card-carousel";
import gala from "../assets/gala.png";
import party from "../assets/party.png";
import corporate from "../assets/corporate.png";
import wedding from "../assets/wedding.png";
import bday from "../assets/bday.png";
import partyprivate from "../assets/private.png";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

// Component for handling content inside each card dynamically
const ContentComponent = ({ category }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          {t(`events.${category}.category`)}
        </span>{" "}
        {t(`events.${category}.title`)}
      </p>
      <img
        src={t(`events.${category}.imageSrc`)} // Dynamic image source
        alt={t(`events.${category}.title`)}
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

export function AppleCardsCarouselDemo() {
  const { t } = useTranslation();

  const data = [
    {
      category: "Birthday Party",
      title: t("events.birthday.title"),
      src: bday,
      content: <ContentComponent category="birthday" />,
    },
    {
      category: "Corporate Events",
      title: t("events.corporate.title"),
      src: corporate,
      content: <ContentComponent category="corporate" />,
    },
    {
      category: "Gala Abend",
      title: t("events.gala.title"),
      src: gala,
      content: <ContentComponent category="gala" />,
    },
    {
      category: "Wedding Party",
      title: t("events.wedding.title"),
      src: wedding,
      content: <ContentComponent category="wedding" />,
    },
    {
      category: "Polterabend",
      title: t("events.bachelor_party.title"),
      src: party,
      content: <ContentComponent category="bachelor_party" />,
    },
    {
      category: "Private Casino Event",
      title: t("events.private_event.title"),
      src: partyprivate,
      content: <ContentComponent category="private_event" />,
    },
  ];

  return (
    <div className="max-w-[1440px] h-full py-2 mx-auto px-4">
      <LampContainer>
        <motion.h2
          initial={{ opacity: 0.5, y: 270 }}
          whileInView={{ opacity: 1, y: 140 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="font-poppins font-semibold bg-gradient-to-r from-gray-300 via-white to-gray-300 mt-[-70px] py-4 bg-clip-text text-center text-4xl tracking-tight text-transparent md:text-7xl"
        >
          {t("events.heading")}
        </motion.h2>
      </LampContainer>

      <Carousel
        items={data.map((card, index) => (
          <Card key={card.src} card={card} index={index} layout={true} />
        ))}
      />
    </div>
  );
}
