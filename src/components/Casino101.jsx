import { useTranslation } from "react-i18next";
import { Carousel, Card } from "./ui/apple-card-carousel";
import wheel from "../assets/wheel.png";
import texas from "../assets/texas.png";
import bj from "../assets/bj.png";
import gruppe from "../assets/gruppe.png";
import alone from "../assets/alone.png";
import partyprivate from "../assets/private.png";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

// Component for handling content inside each card dynamically
const ContentComponent = ({ category }) => {
  const { t } = useTranslation();

  return (
    <p className="text-neutral-300 text-base md:text-lg font-light max-w-3xl mx-auto">
      {t(`casino101.events.${category}.description`)}
    </p>
  );
};

export default function Casino101() {
  const { t } = useTranslation();

  const data = [
    {
      category: "American Roulette",
      title: t("casino101.events.roulette.title"),
      src: wheel,
      content: <ContentComponent category="roulette" />,
    },
    {
      category: "Blackjack",
      title: t("casino101.events.blackjack.title"),
      src: bj,
      content: <ContentComponent category="blackjack" />,
    },
    {
      category: "Poker Texas Hold'em",
      title: t("casino101.events.texas_holdem.title", "Poker Texas Hold'em"),
      src: texas,
      content: <ContentComponent category="texas_holdem" />,
    },
    {
      category: "Gruppenevents",
      title: t(
        "casino101.events.ultimate_texas.title",
        "Ultimate Texas Hold'em"
      ),
      src: gruppe,
      content: <ContentComponent category="ultimate_texas" />,
    },
    {
      category: "Individuelle Schulungen",
      title: t("casino101.events.three_card_poker.title", "3 Card Poker"),
      src: alone,
      content: <ContentComponent category="three_card_poker" />,
    },
    // {
    //   category: "group_events",
    //   title: t(
    //     "casino101.events.group_events.title",
    //     "Eventi di Gruppo per Imparare"
    //   ),
    //   src: partyprivate,
    //   content: <ContentComponent category="group_events" />,
    // },
    // {
    //   category: "individual_events",
    //   title: t("casino101.events.individual_events.title", "Impara da Solo"),
    //   src: corporate,
    //   content: <ContentComponent category="individual_events" />,
    // },
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
          className="font-poppins font-semibold bg-gradient-to-r from-gray-500 via-white to-gray-500 mt-[-80px] xs:mt-[-40px] sm:mt-[-4px] md:mt-[-70px] py-4 bg-clip-text text-center text-4xl tracking-tight text-transparent md:text-7xl"
        >
          {t("casino101.heading")}
        </motion.h2>
      </LampContainer>

      {/* Description Section */}
      <motion.h6
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="text-gradient font-semibold md:text-2xl  max-w-4xl mx-auto mt-1 text-center mb-2 px-4 "
      >
        {t(
          "casino101.subheading",
          "Non solo eventi in stile casinò, ma anche formazione per un'esperienza di gioco completa"
        )}
      </motion.h6>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="text-neutral-400 font-light md:text-lg  max-w-4xl mx-auto mt-1 text-center px-4"
      >
        {t(
          "casino101.description",
          "Oltre a offrire emozionanti eventi in stile casinò, forniamo una formazione introduttiva pensata per chi desidera giocare con amici o organizzare eventi aziendali inclusivi e coinvolgenti. Anche se non hai mai messo piede in un casinò, i nostri corsi ti permettono di apprendere rapidamente le regole e le strategie dei giochi più popolari, garantendoti divertimento e sicurezza."
        )}
      </motion.p>

      <Carousel
        items={data.map((card, index) => (
          <Card key={card.src} card={card} index={index} layout={true} />
        ))}
      />
    </div>
  );
}
