"use client"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { FaLinkedin } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { FaSquarePhone } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"
import GradientText from "@/components/GradientText"
import SplashCursor from "@/components/SplashCursor"

export default function Home() {
  const t = useTranslations("Intro")

  return (
    <>
      <SplashCursor />
      <Navbar />

      <div className=" flex flex-col items-center bg-black ">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={2.5}
          showBorder={false}
          className="mt-[50px] text-[67px] text-white font-bold"
        >
          {t("title")}
        </GradientText>

        <div className="items-center justify-center sx:flex-col lg:w-[60%]  lg:flex">
          <Image
            width={500}
            height={500}
            src="/profile-pict.png"
            alt="muh abd rauf lamada"
            className="m-auto rounded-xl shadow-lg "
          />

          <div className="text-center lg:text-left p-[20px] ">
            <p className="text-white text-[25px] font-bold">
              {t("introduction-1")}
            </p>
            <p className="text-white text-[25px] font-bold">
              {t("introduction-2")}
            </p>
            <br />
            <p className="text-white">{t("introduction-3")}</p>

            <div className="flex p-[5px] w-fit rounded-md gap-[10px] mt-[15px]">
              <a
                href="https://github.com/Abdulrauf10"
                target="_blank"
                className="text-white text-[30px]"
              >
                <FaGithub />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=6285236375312"
                target="_blank"
                className="text-white text-[30px]"
              >
                <FaSquarePhone />
              </a>

              <a
                href="mailto:abd.rauf.lamada@gmail.com"
                target="_blank"
                className="text-white text-[30px]"
              >
                <MdEmail />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-abdul-rauf"
                target="_blank"
                className="text-white text-[30px]"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div
          id="portfolio"
          className="mt-[50px] w-[100vw] bg-black flex flex-col items-center"
        >
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={2.5}
            showBorder={false}
            className="text-[37px] text-center text-[white] font-bold mb-[30px]"
          >
            {t("fun-project")}
          </GradientText>

          <div className="flex flex-col lg:flex-row gap-[20px] mb-[20px]">
            <div className=" shadow-lg w-[300px] p-[15px] flex flex-col items-center bg-gray-800 mb-[20px] rounded-lg">
              <Image
                src={"/gulugulu.png"}
                alt="tensorflow"
                width={80}
                height={80}
                className="rounded-md"
              />

              <p className="mt-[20px] text-white text-center">
                {t("gulugulu")}
                <br />
                Technologies: React Js, Material UI, Tailwind
              </p>

              <div className="flex gap-[10px] mt-[15px]">
                <a
                  href="https://gulugulu-flight.vercel.app"
                  target="_blang"
                  className="w-[100%] p-[5px] rounded-md bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-[white] flex justify-center items-center"
                >
                  Website
                </a>
                <a
                  href="https://github.com/Abdulrauf10/gulugulu-flight"
                  target="_blank"
                  className="w-[100%] p-[5px] rounded-md bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-[white] flex justify-center items-center"
                >
                  Github
                </a>
              </div>
            </div>

            <div className=" shadow-lg w-[300px] p-[15px] flex flex-col items-center bg-gray-800 mb-[20px] rounded-lg">
              <Image
                src={"/tensorflow.png"}
                alt="tensorflow"
                width={100}
                height={100}
                className=" rounded-md"
              />

              <p className="mt-[20px] text-white text-center">
                {t("object-detection")}
                <br />
                Technologies: React Js, Tensorflow
              </p>

              <div className="flex gap-[10px] mt-[15px]">
                <a
                  href="https://object-detection-flame.vercel.app"
                  target="_blang"
                  className="w-[100%] p-[5px] rounded-md bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-[white] flex justify-center items-center"
                >
                  Website
                </a>
                <a
                  href="https://github.com/Abdulrauf10/object-detection"
                  target="_blank"
                  className="w-[100%] p-[5px] rounded-md bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-[white] flex justify-center items-center"
                >
                  Github
                </a>
              </div>
            </div>

            <div className=" shadow-lg w-[300px] p-[15px] flex flex-col items-center bg-gray-800 mb-[20px] rounded-lg">
              <Image
                src={"/workwave.png"}
                alt="workwafe"
                width={60}
                height={60}
                className=" rounded-md"
              />

              <p className="mt-[20px] text-white text-center">
                {t("workwave")}
                <br />
                Technologies: Next Js, Chakra UI
              </p>

              <div className="flex gap-[10px] mt-[15px]">
                <a
                  href="https://workwave-nu.vercel.app"
                  target="_blang"
                  className="w-[100%] p-[5px] rounded-md bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-[white] flex justify-center items-center"
                >
                  Website
                </a>
                <a
                  href="https://github.com/Abdulrauf10/workwave"
                  target="_blank"
                  className="w-[100%] p-[5px] rounded-md bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-[white] flex justify-center items-center"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          id="portfolio"
          className="pt-[50px] w-[100vw] bg-black flex flex-col items-center"
        >
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={2.5}
            showBorder={false}
            className="text-[47px] text-center text-white font-bold mb-[30px]"
          >
            {t("professional-project")}
          </GradientText>
          <div className="flex flex-col lg:flex-row gap-[20px]  mb-[20px]">
            <div className="mb-[20px] shadow-lg w-[200px] p-[15px] flex flex-col items-center bg-gray-800 rounded-lg">
              <Image
                src={"/surge.svg"}
                alt="surge"
                width={50}
                height={50}
                className="bg-[white] rounded-md"
              />

              <p className="mt-[20px] text-white text-center">
                {t("surge")}
                <br />
                Technologies: Vue Js, Vuetify, Vuex
              </p>
            </div>

            <div className=" shadow-lg w-[200px] p-[15px] flex flex-col items-center bg-gray-800 mb-[20px] rounded-lg">
              <Image
                src={"/capacitor.png"}
                alt="capacitor"
                width={100}
                height={100}
                className="rounded-md"
              />

              <p className="mt-[20px] text-white text-center">
                {t("teamtrics")}
                <br />
                Technologies: Next Js, Chakra UI, Zustand
              </p>
            </div>

            <div className="mb-[20px] shadow-lg w-[200px] p-[15px] flex flex-col items-center bg-gray-800 rounded-lg">
              <Image
                src={"/freshood.png"}
                alt="freshood"
                width={65}
                height={65}
                className="rounded-md"
              />

              <p className="mt-[20px] text-white text-center">
                {t("merchant")}
                <br />
                Technologies: Next Js, Chakra UI, Zustand
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-[20px] mb-[20px]">
            <div className=" shadow-lg w-[200px] p-[15px] flex flex-col items-center bg-gray-800 mb-[20px] rounded-lg">
              <Image
                src={"/ocelle.png"}
                alt="ocelle"
                width={100}
                height={100}
                className=" rounded-md"
              />

              <p className="mt-[20px] text-white text-center">
                {t("ocelle")}
                <br />
                Technologies: Next Js, Tailwind
              </p>
            </div>

            <div className=" shadow-lg w-[200px] p-[15px] flex flex-col items-center bg-gray-800 mb-[20px] rounded-lg">
              <Image
                src={"/true-rice.png"}
                alt="true rice"
                width={100}
                height={100}
                className="rounded-md"
              />

              <p className="mt-[20px] text-white text-center">
                {t("true-rice")}
                <br />
                Technologies: Nuxt Js, Tailwind, Vuetify, Vuex
              </p>
            </div>

            <div className=" shadow-lg w-[200px] p-[15px] flex flex-col items-center bg-gray-800 mb-[20px] rounded-lg">
              <Image
                src={"/homage.png"}
                alt="homage"
                width={70}
                height={70}
                className=" rounded-md"
              />

              <p className="mt-[20px] text-white text-center">
                {t("homage")}
                <br />
                Technologies: Next Js, Chakra UI, Zustand
              </p>
            </div>
          </div>
        </div>

        <div
          id="contact"
          className="w-full flex bg-black h-[200px] flex-col items-center border-t-[0.5px] border-white justify-center "
        >
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={2.5}
            showBorder={false}
            className="text-white text-[30px] lg:text-[54px] font-extrabold"
          >
            {t("contact")}
          </GradientText>

          <div className="flex w-fit rounded-md gap-[20px] mt-[15px]">
            <a
              href="https://api.whatsapp.com/send?phone=6285236375312"
              target="_blank"
              className="text-white text-[30px]"
            >
              <FaSquarePhone />
            </a>

            <a
              href="mailto:abd.rauf.lamada@gmail.com"
              target="_blank"
              className="text-white text-[30px]"
            >
              <MdEmail />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-abdul-rauf"
              target="_blank"
              className="text-white text-[30px]"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
