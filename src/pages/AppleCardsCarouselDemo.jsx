import { useTranslation } from "react-i18next";
import { Carousel, Card } from "../components/ui/apple-card-carousel";
import gala from "../assets/gala.png";
import party from "../assets/party.png";
import corporate from "../assets/corporate.png";
import wedding from "../assets/wedding.png";
import bday from "../assets/bday.png";
import air_casino from "../assets/air_casino.png";
import home_casino from "../assets/home_casino.png";
import yacht_casino from "../assets/yacht_casino.png";
import private_party from "../assets/private.png";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import CTA from "../components/CTA";

// Component for handling content inside each card dynamically
const ContentComponent = ({ category, imageSrc }) => {
  const { t } = useTranslation();

  return (
    <p className="text-neutral-300 text-base md:text-2xl  font-light max-w-3xl mx-auto">
      {t(`events.${category}.description`)}
    </p>
  );
};

export default function AppleCardsCarouselDemo() {
  const { t } = useTranslation();

  const data = [
    {
      category: "Birthday Party",
      title: t("events.birthday.title"),
      src: bday,
      content: <ContentComponent category="birthday" imageSrc={bday} />,
    },
    // {
    //   category: "Corporate Events",
    //   title: t("events.corporate.title"),
    //   src: corporate,
    //   content: <ContentComponent category="corporate" imageSrc={corporate} />,
    // },
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
      category: "Home-Casino",
      title: t("events.home_casino.title"),
      src: home_casino,
      content: (
        <ContentComponent category="home_casino" imageSrc={home_casino} />
      ),
    },
    {
      category: "Firmen-Casino",
      title: t("events.firmen_casino.title"),
      src: corporate,
      content: (
        <ContentComponent category="firmen_casino" imageSrc={corporate} />
      ),
    },
    // {
    //   category: "Hochzeit-Casino",
    //   title: t("events.hochzeit_casino.title"),
    //   src: gala,
    //   content: <ContentComponent category="hochzeit_casino" imageSrc={gala} />,
    // },
    {
      category: "Yacht-Casino",
      title: t("events.yacht_casino.title"),
      src: yacht_casino,
      content: (
        <ContentComponent category="yacht_casino" imageSrc={yacht_casino} />
      ),
    },
    {
      category: "Air-Casino",
      title: t("events.air_casino.title"),
      src: air_casino,
      content: <ContentComponent category="air_casino" imageSrc={air_casino} />,
    },
    {
      category: "Mountain-Casino",
      title: t("events.mountain_casino.title"),
      src: private_party,
      content: (
        <ContentComponent category="mountain_casino" imageSrc={private_party} />
      ),
    },
  ];

  return (
    <div className="max-w-[1440px] h-full py-2 mx-auto px-4">
      <LampContainer>
        <motion.h2
          initial={{ opacity: 0.5, y: 270 }}
          whileInView={{ opacity: 1, y: 220 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="font-poppins font-semibold bg-gradient-to-r from-gray-500 via-white to-gray-500 mt-[-40px] xs:mt-[-40px] sm:mt-[-1px] md:mt-[-70px] py-4 bg-clip-text text-center text-4xl tracking-tight text-transparent md:text-7xl"
        >
          {t("events.heading")}
        </motion.h2>
      </LampContainer>

      <Carousel
        items={data.map((card, index) => (
          <Card key={card.src} card={card} index={index} layout={true} />
        ))}
      />
      <CTA />
    </div>
  );
}
