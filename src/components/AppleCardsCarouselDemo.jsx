"use client";

import { Carousel, Card } from "./ui/apple-card-carousel";
import gala from "../assets/gala.png";
import party from "../assets/party.png";
import corporate from "../assets/corporate.png";
import wedding from "../assets/wedding.png";
import bday from "../assets/bday.png";
import partyprivate from "../assets/private.png";

import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  // Set initial and whileInView values based on screen size

  return (
    <div className="max-w-[1440px] h-full py-20 mx-auto px-4">
      <LampContainer>
        <motion.h2
          initial={{ opacity: 0.5, y: 270 }}
          whileInView={{ opacity: 1, y: 140 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="font-poppins font-semibold bg-gradient-to-r from-gray-300 via-white to-gray-300 py-4 bg-clip-text text-center text-4xl tracking-tight text-transparent md:text-7xl"
        >
          Scopri i nostri eventi a tema Casinò.
        </motion.h2>
      </LampContainer>

      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                Non perdere l'occasione di vivere un evento unico!
              </span>{" "}
              Prenota ora la tua serata a tema Casinò con croupier
              professionisti, tavoli da gioco eleganti e la possibilità di
              personalizzare ogni dettaglio per un'esperienza indimenticabile.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Event example"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Feste di Compleanno",
    title: "Casino Royale: Festeggia in grande stile.",
    src: bday,
    content: <DummyContent />,
  },
  {
    category: "Eventi Aziendali",
    title: "Blackjack e Business: Eventi aziendali indimenticabili.",
    src: corporate,
    content: <DummyContent />,
  },
  {
    category: "Serate di Gala",
    title: "Una notte al Casinò: Serate eleganti e raffinate.",
    src: gala,
    content: <DummyContent />,
  },
  {
    category: "Matrimoni",
    title: "Casinò Wedding: Per un matrimonio fuori dal comune.",
    src: wedding,
    content: <DummyContent />,
  },
  {
    category: "Addio al celibato/nubilato",
    title: "L'ultima notte di libertà con un tocco di classe.",
    src: party,
    content: <DummyContent />,
  },
  {
    category: "Eventi privati",
    title: "Il tuo evento privato in stile Casinò.",
    src: partyprivate,
    content: <DummyContent />,
  },
];
