"use client"

import { Mail, Linkedin, MessageSquare, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { useState } from "react"

const Contact = () => {
  const [isSent, setIsSent] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm()

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (res.ok) {
        setIsSent(true)
        reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      alert("An error occurred. Please try again.")
      console.error(error)
    }
  }

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
              Let&apos;s Work Together
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Ready to transform your business? Get in touch for a free
              consultation and quote.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "abd.rauf.lamada@gmail.com",
                    href: "mailto:abd.rauf.lamada@gmail.com",
                    color: "blue"
                  },
                  {
                    icon: Linkedin,
                    title: "Linkedin",
                    value: "linkedin.com/in/muhammad-abdul-rauf",
                    href: "https://linkedin.com/in/muhammad-abdul-rauf",
                    color: "blue"
                  },
                  {
                    icon: MessageSquare,
                    title: "Whatsapp",
                    value: "+62 85236375312",
                    href: "https://wa.me/6285236375312",
                    color: "green"
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: "Available worldwide (Remote)",
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
                Send Message
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {[
                  {
                    id: "name",
                    label: "Name",
                    type: "text",
                    placeholder: "Your name"
                  },
                  {
                    id: "email",
                    label: "Email",
                    type: "email",
                    placeholder: "you@example.com"
                  },
                  {
                    id: "subject",
                    label: "Subject",
                    type: "text",
                    placeholder: "What's this about?"
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
                      {...register(field.id as "name" | "email" | "subject")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={field.placeholder}
                      required
                    />
                  </motion.div>
                ))}

                {/* Message Field */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    {...register("message")}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Write your message..."
                    required
                  />
                </motion.div>

                {isSent && (
                  <p className="text-green-600">Your message has been sent!</p>
                )}

                <motion.button
                  disabled={isSubmitting}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Contact
