import { motion } from "framer-motion"
import { Code, Database, Server, Cloud, User, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "./ui/PortfolioCard"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Navbar from "./Navbar"

const HomeComponent = () => {
  const route = useRouter()
  const technologies = [
    { name: "React", icon: Code, color: "text-blue-500" },
    { name: "Next.js", icon: Code, color: "text-gray-800" },
    { name: "Node.js", icon: Server, color: "text-green-500" },
    { name: "Nest.js", icon: Server, color: "text-red-500" },
    { name: "Express", icon: Server, color: "text-gray-600" },
    { name: "PostgreSQL", icon: Database, color: "text-blue-600" },
    { name: "MongoDB", icon: Database, color: "text-green-600" },
    { name: "CI/CD", icon: Code, color: "text-orange-500" },
    { name: "AWS", icon: Cloud, color: "text-yellow-600" }
  ]

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
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const techVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
        {/* Hero Section */}
        <motion.section
          className="min-h-screen flex items-center justify-center px-4 relative"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <div className="text-center z-10 max-w-4xl mx-auto">
            {/* Profile Photo */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.div
                className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  <Image
                    src={"/home/rauf.png"}
                    width={500}
                    height={500}
                    alt="Muhammad Abdul Rauf"
                    className=" rounded-full"
                  />
                  <span className="sr-only">Rauf&apos;s Photo</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <motion.h1
                className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Hi, I&apos;m Rauf
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.p
                className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                A passionate{" "}
                <span className="text-blue-600 font-semibold">
                  Full-Stack Web Developer
                </span>{" "}
                who crafts
                <br />
                beautiful, scalable, and user-friendly digital experiences
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
                  onClick={() => route.push("/portfolio")}
                >
                  <User className="mr-2 h-5 w-5" />
                  View Portfolio
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
                  onClick={() => route.push("/contact")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="animate-bounce">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-500"
              >
                ↓ Scroll to explore ↓
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          className="py-20 px-4 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white border-gray-200 shadow-xl">
                <p className="text-lg text-gray-600 leading-relaxed">
                  I&apos;m a dedicated full-stack developer with a passion for
                  creating innovative web solutions. With expertise in modern
                  technologies and a keen eye for design, I transform ideas into
                  powerful, scalable applications. I love tackling complex
                  problems and delivering exceptional user experiences that make
                  a difference.
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Technologies Section */}
        <motion.section
          className="py-20 px-4 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Technologies I Use
            </motion.h2>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={techVariants}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group"
                >
                  <Card className="p-6 bg-white border-gray-200 text-center hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <tech.icon
                      className={`h-12 w-12 mx-auto mb-3 ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <p className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {tech.name}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Build Something Amazing?
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 mb-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let&apos;s collaborate and bring your vision to life with
              cutting-edge technology and creative solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
                  onClick={() => route.push("/portfolio")}
                >
                  <User className="mr-3 h-6 w-6" />
                  Explore My Work
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-pink-500/25 transition-all duration-300"
                  onClick={() => route.push("/contact")}
                >
                  <Mail className="mr-3 h-6 w-6" />
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="py-12 text-center text-gray-600 border-t border-gray-200 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg">© 2024 Rauf - Full-Stack Web Developer</p>
        </motion.footer>
      </div>
    </>
  )
}

export default HomeComponent
