import { useTranslation } from "react-i18next";
import styles from "../style";
import { motion } from "framer-motion";
import teamImage1 from "../assets/teamImage1.png";
import teamImage2 from "../assets/teamImage2.png";
import teamImage3 from "../assets/teamImage3.png";
import teamImage4 from "../assets/teamImage4.png";

// Example data for team members
const teamMembers = [
  {
    id: "member-1",
    name: "team.member1.name",
    role: "team.member1.role",
    description: "team.member1.description",
    image: teamImage1,
  },
  {
    id: "member-2",
    name: "team.member2.name",
    role: "team.member2.role",
    description: "team.member2.description",
    image: teamImage2,
  },
  {
    id: "member-3",
    name: "team.member3.name",
    role: "team.member3.role",
    description: "team.member3.description",
    image: teamImage3,
  },
  {
    id: "member-4",
    name: "team.member4.name",
    role: "team.member4.role",
    description: "team.member4.description",
    image: teamImage4,
  },
];

// Reusable card component for team members
const TeamCard = ({ image, name, role, description }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="team-card p-6 rounded-[20px] max-w-[320px] md:max-w-[460px] feature-card flex flex-col items-center"
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
    >
      <img
        src={image}
        alt="team-member"
        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full object-cover mb-4"
      />
      <h4 className="font-poppins font-semibold text-white text-[20px] leading-[26px] mb-2">
        {t(name)}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[24px] mb-2">
        {t(role)}
      </p>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] text-center">
        {t(description)}
      </p>
    </motion.div>
  );
};

// Team section component
const Team = () => {
  const { t } = useTranslation();

  return (
    <section id="team" className={`flex-col py-10`}>
      <motion.h2
        className="text-white text-center mb-8 text-[28px] md:text-[36px] leading-[40px] md:leading-[50px]"
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
      >
        {t("team.heading")}
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-between"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
        initial="hidden"
        animate="show"
      >
        {teamMembers.map((member) => (
          <TeamCard
            key={member.id}
            image={member.image}
            name={member.name}
            role={member.role}
            description={member.description}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Team;
