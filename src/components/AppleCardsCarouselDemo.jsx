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
const ContentComponent = ({ category, imageSrc }) => {
  const { t } = useTranslation();

  return (
    <p className="text-neutral-300 text-base md:text-2xl  font-light max-w-3xl mx-auto">
      {t(`events.${category}.description`)}
    </p>
  );
};

export function AppleCardsCarouselDemo() {
  const { t } = useTranslation();

  const data = [
    {
      category: "Birthday Party",
      title: t("events.birthday.title"),
      src: bday, // Pass the image directly
      content: <ContentComponent category="birthday" imageSrc={bday} />,
    },
    {
      category: "Corporate Events",
      title: t("events.corporate.title"),
      src: corporate,
      content: <ContentComponent category="corporate" imageSrc={corporate} />,
    },
    {
      category: "Gala Abend",
      title: t("events.gala.title"),
      src: gala,
      content: <ContentComponent category="gala" imageSrc={gala} />,
    },
    {
      category: "Wedding Party",
      title: t("events.wedding.title"),
      src: wedding,
      content: <ContentComponent category="wedding" imageSrc={wedding} />,
    },
    {
      category: "Polterabend",
      title: t("events.bachelor_party.title"),
      src: party,
      content: <ContentComponent category="bachelor_party" imageSrc={party} />,
    },
    {
      category: "Private Casino Event",
      title: t("events.private_event.title"),
      src: partyprivate,
      content: (
        <ContentComponent category="private_event" imageSrc={partyprivate} />
      ),
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
          className="font-poppins font-semibold bg-gradient-to-r from-gray-300 via-white to-gray-300 mt-[-40px] xs:mt-[-40px] sm:mt-[-1px] md:mt-[-70px] py-4 bg-clip-text text-center text-4xl tracking-tight text-transparent md:text-7xl"
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
