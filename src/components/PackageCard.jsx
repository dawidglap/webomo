import React, { useRef } from "react";
import styles from "../style";
import { motion, useInView } from "framer-motion";

const PackageCard = ({
  content,
  name,
  title,
  img,
  content2,
  content2_5,
  content3,
  content4,
  price,
  bestDeal,
  index,
  applyHoverEffect,
  onMouseEnter,
  onMouseLeave,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card ${
        applyHoverEffect ? "feedback-card-hover" : ""
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-row pt-10">
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white text-gradient">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
            {title}
          </p>
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white mt-10">
            {content}
          </p>
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white">
            {content2}
          </p>
          {index === 1 && (
            <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white">
              {content2_5}
            </p>
          )}
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white">
            {content3}
          </p>
          <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-dimWhite mt-4">
            {content4}
          </p>
          <p className="font-poppins font-bold text-[18px] leading-[32.4px] text-white mt-4">
            {price}
          </p>
          <div className="flex flex-row items-center py-[6px] rounded-[10px] mb-2">
            {index === 1 && (
              <p className={`${styles.paragraph} mt-6`}>
                <span className="text-white bg-black-gradient p-5 rounded-lg">
                  {bestDeal}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
