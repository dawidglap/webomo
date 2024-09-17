import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  const { t } = useTranslation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="mx-auto my-4 min-h-screen max-w-6xl  px-6 py-12 text-dimWhite">
      <motion.div
        className="mx-auto max-w-xl rounded-2xl border-b bg-gray-900 border-r border-yellow-500 px-6 py-10 shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-4xl font-bold text-yellow-500">
          {t("termsConditions.title")}
        </h1>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-white">
            {t("termsConditions.section1.title")}
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            {t("termsConditions.section1.content")}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-white">
            {t("termsConditions.section2.title")}
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            {t("termsConditions.section2.content")}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-white">
            {t("termsConditions.section3.title")}
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            {t("termsConditions.section3.content")}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-white">
            {t("termsConditions.section4.title")}
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            {t("termsConditions.section4.content")}
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
