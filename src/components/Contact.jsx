import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom"; // For redirection
import { LampContainer } from "./ui/lamp";

const Contact = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: new Date().toLocaleDateString(), // Automatically set the date
  });

  const [status, setStatus] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8t5uzbc",
        "template_i7r0gyp",
        formData,
        "tsAqtmKh87A_Qu1Ug"
      )
      .then(
        (response) => {
          setStatus("success");
          navigate("/message-success"); // Redirect to success page
        },
        (error) => {
          setStatus("error");
          navigate("/message-error", { state: { errorMessage: error.text } }); // Redirect to error page with error message
        }
      );
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 pb-40">
      <LampContainer>
        <motion.h2
          initial={{ opacity: 0.5, y: 270 }}
          whileInView={{ opacity: 1, y: 220 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="font-poppins font-semibold bg-gradient-to-r from-zinc-400 via-white to-zinc-500 py-4 bg-clip-text text-center text-4xl tracking-tight text-transparent md:text-7xl"
        >
          {t("form.heading")}
        </motion.h2>
      </LampContainer>

      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[700px] mx-auto mt-8 p-8 bg-gray-800 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <label className="text-white mb-2">{t("form.nameLabel")}</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 mb-4 rounded-lg bg-gray-700 text-white"
          placeholder={t("form.namePlaceholder")}
          required
        />

        <label className="text-white mb-2">{t("form.emailLabel")}</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 mb-4 rounded-lg bg-gray-700 text-white"
          placeholder={t("form.emailPlaceholder")}
          required
        />

        <label className="text-white mb-2">{t("form.messageLabel")}</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 mb-4 rounded-lg bg-gray-700 text-white"
          placeholder={t("form.messagePlaceholder")}
          required
        />

        <button
          type="submit"
          className="p-3 bg-blue-gradient text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          {t("form.submitButton")}
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
