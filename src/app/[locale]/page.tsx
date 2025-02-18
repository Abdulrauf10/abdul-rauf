"use client"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("Intro")

  return (
    <>
      <Navbar />

      <div className=" flex flex-col items-center bg-[#E6E6E6] ">
        <h1
          id="home"
          className="mt-[50px] text-[67px] text-[#5289B1] font-bold"
        >
          {t("title")}
        </h1>
        <div className="items-center justify-center sx:flex-col lg:w-[60%]  lg:flex">
          <Image
            width={500}
            height={500}
            src="/profile-pic.png"
            alt="muh abd rauf lamada"
            className="m-auto rounded-xl shadow-lg"
          />

          <div className="text-center lg:text-start p-[20px] ">
            <p className="text-[#5289B1] text-[25px] font-bold">
              {t("introduction-1")}
            </p>
            <p className="text-[#5289B1] text-[25px] font-bold">
              {t("introduction-2")}
            </p>
            <br />
            <p>{t("introduction-3")}</p>
          </div>
        </div>

        <div
          id="portfolio"
          className="mt-[50px] w-[100vw] bg-[#279D9E] flex flex-col items-center"
        >
          <h2 className="text-[37px] text-center text-[white] font-bold mb-[30px]">
            Fun Projects
          </h2>
          <div className="flex flex-col lg:flex-row gap-[20px] justify-center items-center mb-[20px]">
            <div className=" shadow-lg w-[300px] p-[15px] flex flex-col items-center bg-[white] mb-[20px] rounded-lg">
              <Image
                src={"/gulugulu.png"}
                alt="tensorflow"
                width={80}
                height={80}
                className="bg-[white] rounded-md"
              />

              <p className="mt-[20px] text-[black] text-center">
                Gulugulu Flight - Web App to find flight schedules
                <br />
                Technologies: React Js, Material UI, Tailwind
              </p>

              <div className="flex gap-[10px] mt-[15px]">
                <a
                  href="https://gulugulu-flight.vercel.app"
                  target="_blang"
                  className="w-[100%] p-[5px] rounded-md bg-[#F2892A] text-[white] flex justify-center items-center"
                >
                  Website
                </a>
                <a
                  href="https://github.com/Abdulrauf10/gulugulu-flight"
                  target="_blank"
                  className="w-[100%] p-[5px] rounded-md bg-[#F2892A] text-[white] flex justify-center items-center"
                >
                  Github
                </a>
              </div>
            </div>

            <div className=" shadow-lg w-[300px] p-[15px] flex flex-col items-center bg-[white] mb-[20px] rounded-lg">
              <Image
                src={"/tensorflow.png"}
                alt="tensorflow"
                width={100}
                height={100}
                className="bg-[white] rounded-md"
              />

              <p className="mt-[20px] text-[black] text-center">
                Object Detection - Web App that can detect multiple objects
                using local camera right in the browser
                <br />
                Technologies: React Js, Tensorflow
              </p>

              <div className="flex gap-[10px] mt-[15px]">
                <a
                  href="https://object-detection-flame.vercel.app"
                  target="_blang"
                  className="w-[100%] p-[5px] rounded-md bg-[#F2892A] text-[white] flex justify-center items-center"
                >
                  Website
                </a>
                <a
                  href="https://github.com/Abdulrauf10/object-detection"
                  target="_blank"
                  className="w-[100%] p-[5px] rounded-md bg-[#F2892A] text-[white] flex justify-center items-center"
                >
                  Github
                </a>
              </div>
            </div>

            <div className=" shadow-lg w-[300px] p-[15px] flex flex-col items-center bg-[white] mb-[20px] rounded-lg">
              <Image
                src={"/workwave.png"}
                alt="workwafe"
                width={60}
                height={60}
                className="bg-[white] rounded-md"
              />

              <p className="mt-[20px] text-[black] text-center">
                Work Wave - Web App to find list of jobs and help user to apply
                directly to the compnay&apos;s website
                <br />
                Technologies: Next Js, Chakra UI
              </p>

              <div className="flex gap-[10px] mt-[15px]">
                <a
                  href="https://workwave-nu.vercel.app"
                  target="_blang"
                  className="w-[100%] p-[5px] rounded-md bg-[#F2892A] text-[white] flex justify-center items-center"
                >
                  Website
                </a>
                <a
                  href="https://github.com/Abdulrauf10/workwave"
                  target="_blank"
                  className="w-[100%] p-[5px] rounded-md bg-[#F2892A] text-[white] flex justify-center items-center"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          id="portfolio"
          className="pt-[50px] w-[100vw] bg-[#E6EDF3] flex flex-col items-center"
        >
          <h2 className="text-[47px] text-center text-[#5289B1] font-bold mb-[30px]">
            Professional Projects
          </h2>
          <div className="flex flex-col lg:flex-row gap-[20px] justify-center items-center mb-[20px]">
            <div className=" shadow-lg w-[200px] p-[15px] flex flex-col items-center bg-[white] mb-[20px] rounded-lg">
              <Image
                src={"/homage.png"}
                alt="homage"
                width={100}
                height={100}
                className="bg-[white] rounded-md"
              />

              <p className="mt-[20px] text-[black] text-center">
                Web App for hospital management system
                <br />
                Technologies: Next Js, Chakra UI, Zustand
              </p>
            </div>

            <div className=" shadow-lg w-[200px] p-[15px] flex flex-col items-center bg-[white] mb-[20px] rounded-lg">
              <Image
                src={"/capacitor.png"}
                alt="capacitor"
                width={100}
                height={100}
                className="bg-[white] rounded-md"
              />

              <p className="mt-[20px] text-[black] text-center">
                SaaS productivity management system
                <br />
                Technologies: Next Js, Chakra UI, Zustand
              </p>
            </div>

            <div className="mb-[20px] shadow-lg w-[200px] p-[15px] flex flex-col items-center bg-[white] rounded-lg">
              <Image
                src={"/freshood.png"}
                alt="freshood"
                width={65}
                height={65}
                className="bg-[white] rounded-md"
              />

              <p className="mt-[20px] text-[black] text-center">
                Merchant for selling vegetables and fruits
                <br />
                Technologies: Next Js, Chakra UI, Zustand
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-[20px] justify-center items-center mb-[20px]">
            <div className=" shadow-lg w-[200px] p-[15px] flex flex-col items-center bg-[white] mb-[20px] rounded-lg">
              <Image
                src={"/ocelle.png"}
                alt="ocelle"
                width={100}
                height={100}
                className="bg-[white] rounded-md"
              />

              <p className="mt-[20px] text-[black] text-center">
                Ecommers for planning and selling dog&apos;s diet
                <br />
                Technologies: Next Js, Tailwind
              </p>
            </div>

            <div className=" shadow-lg w-[200px] p-[15px] flex flex-col items-center bg-[white] mb-[20px] rounded-lg">
              <Image
                src={"/true-rice.png"}
                alt="true rice"
                width={100}
                height={100}
                className="bg-[white] rounded-md"
              />

              <p className="mt-[20px] text-[black] text-center">
                Web App to identify rice quality with AI
                <br />
                Technologies: Nuxt Js, Tailwind, Vuetify, Vuex
              </p>
            </div>

            <div className="mb-[20px] shadow-lg w-[200px] p-[15px] flex flex-col items-center bg-[white] rounded-lg">
              <Image
                src={"/surge.svg"}
                alt="surge"
                width={50}
                height={50}
                className="bg-[white] rounded-md"
              />

              <p className="mt-[20px] text-[black] text-center">
                Web App to generate lessons for teachers
                <br />
                Technologies: Vue Js, Tailwind, Vuetify, Vuex
              </p>
            </div>
          </div>
        </div>

        <div
          id="contact"
          className="w-full flex pt-[30px] bg-[#5289B1] h-[350px] "
        ></div>
      </div>
    </>
  )
}
