import Image from "next/image";
import Mockup from "@/public/mockup.png";
import Logo from "@/public/logo.svg";
import Company from "@/public/TEAMPLATE.png";
import Appstore from "@/public/appstore.png";
import Playstore from "@/public/playstore.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Carousels } from "@/src/components/carousel";
import Contactus from "@/src/components/contactus";
import { Input } from "@/components/ui/input";
import Teams from "../components/team";

const features = [
  {
    title: "For Functional App Sites",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    icon: <span>🚀</span>,
  },
  {
    title: "High-quality Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    icon: <span>🎨</span>,
  },
  {
    title: "Essential Integrations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    icon: <span>🔗</span>,
  },
  {
    title: "Essential Components",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    icon: <span>⚙️</span>,
  },
  {
    title: "Fully Customizable",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    icon: <span>⚡</span>,
  },
  {
    title: "Regular Free Updates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    icon: <span>🔄</span>,
  },
];

const lists = [
  {
    title: "For Functional App Sites",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    icon: <span>🚀</span>,
  },
  {
    title: "High-quality Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    icon: <span>🎨</span>,
  },
  {
    title: "Essential Integrations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.",
    icon: <span>🔗</span>,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-center ">
        <div
          className="relative w-full h-[500px] xs:h-[600px] md:h-[650px] lg:h-[700px]"
          style={{
            background: "linear-gradient(to bottom, #9bf4e2, #34D1BC)",
          }}
        >
          <Image
            src={Mockup}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            objectPosition="top"
          />
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center justify-center bg-white/40 backdrop-blur-md rounded-4xl p-6 xs:p-10 sm:p-12 md:p-16">
            <div className="text-2xl xs:text-3xl md:text-4xl text-ci-foreground">
              ຄິດຫາ<span className="text-black">ຫ້ອງ</span> ຄິດຫາ
            </div>
            <div className="text-black text-4xl xs:text-6xl md:text-7xl font-bold mb-6 xs:mb-12 md:mb-16">
              ຫ້ອງຫ້ອງ!
            </div>
            <div className="flex flex-row justify-center gap-4 xs:gap-6 mb-6 xs:mb-8">
              <button className="p-0 border-none bg-transparent active:opacity-80">
                <Image
                  className="xs:w-48 w-32"
                  src={Appstore}
                  alt="Appstore"
                  objectFit="contain"
                  quality={100}
                />
              </button>
              <button className="p-0 border-none bg-transparent active:opacity-80">
                <Image
                  className="xs:w-48 w-32"
                  src={Playstore}
                  alt="Playstore"
                  objectFit="contain"
                  quality={100}
                />
              </button>
            </div>
            <div className="flex flex-row justify-center gap-4 mb-6 xs:mb-8">
              <Link
                className="border-none bg-transparent hover:underline text-xs xs:text-base"
                href={"/terms-and-conditions"}
              >
                ຂໍ້ກຳນົດການນຳໃຊ້
              </Link>
              <Link
                className="border-none bg-transparent hover:underline text-xs xs:text-base"
                href={"/privacy-policy"}
              >
                ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ
              </Link>
            </div>
            <div className="mt-8">
              <p className="text-xs text-ci-foreground no-underline">
                contact@teamplate.dev
              </p>
              <p className="text-xs text-ci-foreground">
                © 2024 Teamplate. All rights reserved.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <div className="flex flex-row justify-between items-end p-4 xs:p-8">
              <Image
                className="w-12 xs:w-16 md:w-20"
                src={Logo}
                alt="Logo"
                objectFit="contain"
                quality={100}
              />
              <Image
                className="w-32 xs:w-40 md:w-48 h-4 xs:h-6"
                src={Company}
                alt="Company"
                objectFit="contain"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-20 ">
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          <div className="w-full max-w-2xl text-center md:text-left">
            <p className="text-2xl md:text-3xl font-medium text-emerald-500 mb-4 md:mb-6">
              Crafted for App, Software, and SaaS Sites
            </p>
            <h1 className="text-black text-4xl md:text-6xl font-bold mb-6 md:mb-8">
              Next.js Template and SaaS Starter Kit
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 md:mb-8">
              Website template and starter kit crafted to build fully functional
              mobile app landing pages and software websites.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Image src={Appstore} alt="Appstore" className="w-32 md:w-48" />
              <Image src={Playstore} alt="Playstore" className="w-32 md:w-48" />
            </div>
          </div>
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-b from-teal-300 to-teal-500">
            <Image src={Mockup} alt="Mockup" layout="fill" objectFit="cover" />
          </div>
        </section>

        <section className="text-center mt-16">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Full-Featured Next.js Starter Kit
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-10 bg-white rounded-2xl shadow-md"
            >
              <div className="p-4 bg-blue-100 rounded-xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </section>

        <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-16 px-6 md:px-12">
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-b from-teal-300 to-teal-500 shadow-lg">
            <Image src={Mockup} alt="Mockup" layout="fill" objectFit="cover" />
          </div>
          <div className="w-full max-w-2xl text-center md:text-left">
            <p className="text-2xl md:text-3xl text-emerald-500 mb-4 font-semibold">
              Track Audience Activities
            </p>
            <h1 className="text-black text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Track Your Audience Activities
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Schedule your posts for times when your audience is most active.
            </p>
            <div className="flex flex-col gap-6">
              {["Lorem ipsum dolor.", "Lorem ipsum dolor."].map(
                (title, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 rounded-full text-lg font-semibold text-gray-900">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="text-start">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {title}
                      </h3>
                      <p className="text-gray-500">
                        Ut ultricies lacus non fermentum ultrices.
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mt-16">
          <div className="w-full max-w-2xl text-center md:text-left">
            <p className="text-2xl md:text-3xl font-medium text-emerald-500 mb-4 md:mb-6">
              Create Audience Reports
            </p>
            <h1 className="text-black text-4xl md:text-6xl font-bold mb-6 md:mb-8">
              Know More About Your Audience.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 md:mb-8">
              Schedule your posts for times when your audience is most active.
              Choose from our best-time predictions, or create your own
              publishing schedule.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Button variant={"primary"} className="p-6 text-base font-bold">
                Know More
              </Button>
            </div>
          </div>
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-b from-teal-300 to-teal-500">
            <Image src={Mockup} alt="Mockup" layout="fill" objectFit="cover" />
          </div>
        </section>

        <section className="text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold">How it Works?</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {lists.map((list, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-10 bg-white rounded-2xl shadow-md"
            >
              <div className="p-4 bg-blue-100 rounded-xl">{list.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{list.title}</h3>
              <p className="mt-2 text-gray-600 text-center">
                {list.description}
              </p>
            </div>
          ))}
        </section>

        <section className="text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold">App Screenshots</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </section>

        <div className="flex justify-center mt-12">
          <Carousels />
        </div>
        <div className="flex justify-center mt-12">
          <Teams />
        </div>
        <div className="flex justify-center mt-8">
          <Contactus />
        </div>
      </div>
    </div>
  );
}
