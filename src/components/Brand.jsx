import styles from "../style";
import { motion } from "framer-motion";
import { canon, versace, yamaha, loreal, mercedes } from "../assets"; // Import the logos

// Move the clients array directly into the component
const clients = [
  {
    id: "client-1",
    logo: canon,
  },
  {
    id: "client-2",
    logo: versace,
  },
  {
    id: "client-3",
    logo: yamaha,
  },
  {
    id: "client-4",
    logo: loreal,
  },
  {
    id: "client-5",
    logo: mercedes,
  },
];

const Brand = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -500], // Adjust this value based on the total width of your content
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
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
        {clients.map((client) => (
          <div
            key={client.id} // Use client.id as a unique key
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <img
              src={client.logo}
              alt={`client-logo-${client.id}`}
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
        {clients.map((client, index) => (
          <div
            key={`${client.id}-${index}`} // Ensure the key is unique for the second loop
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <img
              src={client.logo}
              alt={`client-logo-${client.id}`}
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Brand;
