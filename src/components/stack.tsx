import Image from "next/image";
import Nextjs from "@/public/nextjs.svg";
import Vuejs from "@/public/vuejs.png";
import Expressjs from "@/public/ExpressJS.png";
import Flask from "@/public/Flask.svg";
import Swift from "@/public/Swift.png";
import PostgreSQL from "@/public/PostgreSQL.png";
import MongoDB from "@/public/MongoDB.png";
import AWS from "@/public/AWS.svg";
import Docker from "@/public/Docker.png";
import EKS from "@/public/EKS.svg";
import Kotlin from "@/public/Kotlin.svg";
import ReactJs from "@/public/Reactjs.svg";
import NestJS from "@/public/NestJS.svg";
import Springboot from "@/public/Springboot.svg";
import Django from "@/public/django.png";
import Flutter from "@/public/flutter.svg";
import Redis from "@/public/Redis.svg";
import Firebase from "@/public/Firebase.png";
import Supabase from "@/public/supabase.png";
import GCP from "@/public/GCP.svg";
import Azure from "@/public/Azure.svg";
import Kubernetes from "@/public/Kubernetes.svg";
import Docker2 from "@/public/docker-logo-blue.svg";

const categories = [
  {
    title: "Front-End",
    technologies: [
      { name: "ReactJs", image: ReactJs },
      { name: "NextJS", image: Nextjs },
      { name: "VueJS", image: Vuejs },
    ],
  },
  {
    title: "Back-End",
    technologies: [
      { name: "ExpressJS", image: Expressjs },
      { name: "NestJS", image: NestJS },
      { name: "Springboot", image: Springboot },
      { name: "Flask", image: Flask },
      { name: "Django", image: Django },
    ],
  },
  {
    title: "Mobile App",
    technologies: [
      { name: "React Native", image: ReactJs },
      { name: "Flutter", image: Flutter },
      { name: "Swift", image: Swift },
      { name: "Kotlin", image: Kotlin },
    ],
  },
  {
    title: "Database",
    technologies: [
      { name: "PostgreSQL", image: PostgreSQL },
      { name: "MongoDB", image: MongoDB },
      { name: "Redis", image: Redis },
    ],
  },
  {
    title: "Serverless DB",
    technologies: [
      { name: "Firebase", image: Firebase },
      { name: "Supabase", image: Supabase },
    ],
  },
  {
    title: "Cloud",
    technologies: [
      { name: "AWS", image: AWS },
      { name: "GCP", image: GCP },
      { name: "Azure", image: Azure },
    ],
  },
  {
    title: "Infrastructure",
    technologies: [
      { name: "Docker", image: Docker },
      { name: "Kubernetes", image: Kubernetes },
      { name: "EKS", image: EKS },
    ],
  },
];

export default function Stack() {
  return (
    <div className="flex flex-col items-center text-center mt-12 md:mt-16 px-4 md:px-0 w-full">
      <h2 className="text-4xl font-bold mb-10">
        <span className="text-gray-800">Technology</span>{" "}
        <span className="text-blue-500">Stack</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {categories.slice(0, -3).map((category, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-blue-500 to-blue-300 rounded-xl p-6 shadow-lg text-white hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex flex-col items-center space-y-4">
              {category.technologies.map((tech, idx) => (
                <div key={idx} className="text-center">
                  <Image className="h-16 w-auto mb-2 mx-auto" src={tech.image} alt={tech.name} />
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Centered Categories (Serverless DB, Cloud, Infrastructure) */}
      <div className="mt-12 w-full max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {/* Serverless DB */}
          <div className="bg-gradient-to-b from-blue-500 to-blue-300 rounded-xl p-6 shadow-lg text-white hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-4">Serverless DB</h3>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex flex-col items-center space-y-4">
              <div className="text-center">
                <Image className="h-20 w-auto mb-2 mx-auto" src={Firebase} alt="Firebase" />
                <p>Firebase</p>
              </div>
              <div className="text-center">
                <Image className="h-20 w-auto mb-2 mx-auto" src={Supabase} alt="Supabase" />
                <p>Supabase</p>
              </div>
            </div>
          </div>

          {/* Cloud */}
          <div className="bg-gradient-to-b from-blue-500 to-blue-300 rounded-xl p-6 shadow-lg text-white hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-4">Cloud</h3>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex flex-col items-center space-y-4">
              <div className="text-center">
                <Image className="h-20 w-auto mb-2 mx-auto" src={AWS} alt="AWS" />
                <p>AWS</p>
              </div>
              <div className="text-center">
                <Image className="h-20 w-auto mb-2 mx-auto" src={GCP} alt="GCP" />
                <p>GCP</p>
              </div>
              <div className="text-center">
                <Image className="h-22 w-auto mb-2 mx-auto" src={Azure} alt="Azure" />
                <p>Azure</p>
              </div>
            </div>
          </div>

          {/* Infrastructure */}
          <div className="bg-gradient-to-b from-blue-500 to-blue-300 rounded-xl p-6 shadow-lg text-white hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-4">Infrastructure</h3>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex flex-col items-center space-y-4">
              <div className="text-center">
                <Image className="h-12 w-auto mb-8 mx-auto" src={Docker2} alt="Docker" />
                <p>Docker</p>
              </div>
              <div className="text-center">
                <Image className="h-20 w-auto mb-2 mx-auto" src={Kubernetes} alt="Kubernetes" />
                <p>Kubernetes</p>
              </div>
              <div className="text-center">
                <Image className="h-20 w-auto mt-2 mx-auto" src={EKS} alt="EKS" />
                <p className="mt-4">EKS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
