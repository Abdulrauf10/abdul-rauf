"use client"

import { Mail, Phone, Linkedin, MessageSquare, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

const Contact = () => {
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-24 pb-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              {t("contact.title")}
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {t("contact.subtitle")}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {t("contact.info")}
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: t("contact.email"),
                    value: "abd.rauf.lamada@gmail.com",
                    href: "mailto:abd.rauf.lamada@gmail.com",
                    color: "blue"
                  },
                  {
                    icon: Linkedin,
                    title: t("contact.linkedin"),
                    value: "linkedin.com/in/yourprofile",
                    href: "https://linkedin.com/in/muhammad-abdul-rauf",
                    color: "blue"
                  },
                  {
                    icon: MessageSquare,
                    title: t("contact.whatsapp"),
                    value: "+62 87749122036",
                    href: "https://wa.me/6287749122036",
                    color: "green"
                  },
                  {
                    icon: MapPin,
                    title: t("contact.location"),
                    value: t("contact.locationText"),
                    href: null,
                    color: "gray"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-start gap-4"
                  >
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      className={`bg-${
                        item.color === "gray" ? "gray" : item.color
                      }-100 p-3 rounded-lg`}
                    >
                      <item.icon
                        className={`w-6 h-6 text-${
                          item.color === "gray" ? "gray" : item.color
                        }-600`}
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      {item.href ? (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className={`text-gray-600 hover:text-${
                            item.color === "gray" ? "gray" : item.color
                          }-600 transition-colors`}
                        >
                          {item.value}
                        </motion.a>
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {t("contact.form.title")}
              </h2>

              <form className="space-y-6">
                {[
                  {
                    id: "name",
                    label: t("contact.form.name"),
                    type: "text",
                    placeholder: t("contact.form.namePlaceholder")
                  },
                  {
                    id: "email",
                    label: t("contact.form.email"),
                    type: "email",
                    placeholder: t("contact.form.emailPlaceholder")
                  },
                  {
                    id: "subject",
                    label: t("contact.form.subject"),
                    type: "text",
                    placeholder: t("contact.form.subjectPlaceholder")
                  }
                ].map((field, index) => (
                  <motion.div
                    key={field.id}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {field.label}
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("contact.form.message")}
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder={t("contact.form.messagePlaceholder")}
                  />
                </motion.div>

                <motion.button
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  {t("contact.form.send")}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gray-50 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t("contact.cta.title")}
            </h2>
            <p className="text-gray-600 mb-6">{t("contact.cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:abd.rauf.lamada@gmail.com"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                {t("contact.cta.email")}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/6287749122036"
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                {t("contact.cta.whatsapp")}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Contact
