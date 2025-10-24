"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    slug: "Blockchain-structure",
    title: "Estructura de Blockchain en Python",
    description:
      "Proyecto educativo sobre criptomonedas y blockchain desarrollado en Python + Flask, inspirado en la arquitectura de Bitcoin.",
    image: "/images/Python-Blockchain.webp",
    techStack: ["Python", "Blockchain", "Linux", "Bitcoin"],
    repo: "https://github.com/santy8ap/Blockchain-structure",
  },
  {
    slug: "kali-linux-tutorial",
    title: "Kali Linux Tutorial: John The Ripper",
    description:
      "Repositorio con guías, PDFs y tutoriales sobre el uso de Kali Linux y técnicas de fuerza bruta para aprendizaje en ciberseguridad.",
    image: "/images/john.jpg",
    techStack: ["Linux", "Ciberseguridad", "Hacking Ético", "Pentesting"],
    repo: "https://github.com/santy8ap/Kali-linux-tutorial-comandos-fuerza-bruta",
  },
  {
    slug: "cripto-riwi",
    title: "Cripto Riwi",
    description:
      "Plataforma educativa sobre criptomonedas con precios en tiempo real, enfocada en blockchain, tokens y educación financiera.",
    image: "/images/riwi.png",
    techStack: [
      "Node.js",
      "Express",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap 5",
      "CoinGecko API",
    ],
    repo: "https://github.com/santy8ap/Proyecto-integrador-CryptoRiwi",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6 text-white relative">
      {/* ==== Título ==== */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-14 relative z-10"
      >
        Mis <span className="text-purple-400">Proyectos</span>
      </motion.h1>

      {/* ==== Grid de proyectos ==== */}
      <motion.div
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.25 },
          },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.slug}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 1 },
            }}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden border border-purple-800/50 
                       bg-linear-to-br from-purple-900/20 via-purple-950/10 to-black/30 
                       shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] 
                       hover:brightness-110 hover:border-purple-600 
                       transition-all duration-500 backdrop-blur-sm"
          >
            {/* ==== Imagen ==== */}
            <div className="relative w-full h-56 md:h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500" />
            </div>

            {/* ==== Info ==== */}
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-purple-200 transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-purple-800/30 border border-purple-700 px-3 py-1 rounded-full text-gray-200 tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* ==== Botón del repositorio ==== */}
              <div className="mt-6 flex justify-end">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm bg-purple-700/60 hover:bg-purple-700 
                             px-3 py-1.5 rounded-lg shadow-md hover:shadow-purple-500/30 
                             transition-all duration-300"
                >
                  <Github size={16} /> Ver repositorio
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
