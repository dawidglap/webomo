import styles from "../style";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Stats = () => {
  const { t } = useTranslation(); // Use useTranslation hook

  // Move stats data directly into the component and use translation keys
  const stats = [
    {
      id: "stats-1",
      value: "3800+",
      title: t("stats.privateEvents"), // Translation key for the title
    },
    {
      id: "stats-2",
      value: "230+",
      title: t("stats.corporateEvents"), // Translation key for the title
    },
    {
      id: "stats-3",
      value: "$230M+",
      title: t("stats.themeWeddings"), // Translation key for the title
    },
  ];

  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
