import { clients } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";

const Brand = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1000], // Adjust this value based on the total width of your content
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className={`${styles.flexCenter} my-4 overflow-hidden`}>
      <motion.div
        className={`${styles.flexCenter} flex-nowrap w-full`}
        variants={marqueeVariants}
        animate="animate"
      >
        {clients.map((client, index) => (
          <div
            key={index}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <img
              src={client.logo}
              alt="client_logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
        {clients.map((client, index) => (
          <div
            key={index + clients.length}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <img
              src={client.logo}
              alt="client_logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Brand;
