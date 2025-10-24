"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Brain, Code2, } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden py-20 px-6 md:px-12 lg:px-20">
      {/* ==== HERO ==== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6  from-purple-300 via-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
          Hola, soy <span className="text-purple-400">SantiDev</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Un apasionado por la <span className="text-purple-400">ciberseguridad</span> y el{" "}
          <span className="text-purple-400">desarrollo de software</span>.  
          Disfruto tanto de escribir código como de analizar, proteger y comprender los sistemas
          que hacen posible el mundo digital.
        </p>
      </motion.div>

      {/* ==== PERFIL ==== */}
      <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.4)] ring-2 ring-purple-500/40">
            <Image
              src="/images/avatar.jpg"
              alt="Foto de SantiDev"
              width={260}
              height={260}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </motion.div>

        {/* BIO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="md:col-span-2"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-300">
            Un poco sobre mí
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Soy una persona curiosa y autodidacta que encontró en la tecnología una forma de entender el mundo.
            Me formé en <span className="text-purple-400">desarrollo web</span> aprendiendo HTML, CSS, JavaScript, 
            TypeScript y frameworks como <span className="text-purple-400">Next.js</span>, pero mi interés fue más allá del diseño o la funcionalidad:
            quería saber <span className="text-purple-400">cómo y por qué funcionan las cosas</span>.
          </p>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Ese impulso me llevó al campo de la <span className="text-purple-400">ciberseguridad</span>, donde descubrí
            una pasión por analizar redes, detectar vulnerabilidades y fortalecer sistemas.
            Combino mis habilidades de desarrollo con un enfoque en la seguridad ofensiva y defensiva.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Mi objetivo profesional es crecer como especialista en <span className="text-purple-400">ciberseguridad</span>,
            manteniendo siempre el dominio técnico que me brinda la programación.
            Creo en la unión entre código, conocimiento y ética como pilares de la tecnología moderna.
          </p>
        </motion.div>
      </div>

      {/* ==== FILOSOFÍA ==== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-24 max-w-6xl mx-auto text-center relative z-10"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-10">Mi filosofía profesional</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
          {[
            {
              icon: <Shield size={30} className="text-purple-400" />,
              title: "Seguridad con propósito",
              desc: "No se trata solo de proteger sistemas, sino de proteger personas, datos e ideas en el entorno digital.",
            },
            {
              icon: <Code2 size={30} className="text-purple-400" />,
              title: "Código como herramienta",
              desc: "Escribo código para automatizar, analizar y fortalecer la seguridad. La programación es mi medio para resolver y prevenir problemas reales.",
            },
            {
              icon: <Brain size={30} className="text-purple-400" />,
              title: "Aprendizaje constante",
              desc: "La tecnología evoluciona cada día. Mantengo una mentalidad abierta, estudiando nuevas técnicas, lenguajes y metodologías de defensa.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 rounded-2xl bg-purple-900/10 border border-purple-800/30 backdrop-blur-sm hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all"
            >
              <div className="flex flex-col items-center gap-3 mb-3">{item.icon}</div>
              <h4 className="text-lg font-semibold text-purple-300 mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ==== HABILIDADES ==== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-28 max-w-6xl mx-auto text-center relative z-10"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-10">Tecnologías y áreas que manejo</h3>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {[
            "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
            "TailwindCSS", "Python", "Bash Scripting", "Linux", "Git & GitHub",
            "Redes", "Pentesting", "OSINT", "Wireshark", "Metasploit", "IA aplicada a seguridad",
          ].map((tech, i) => (
            <motion.span
              key={i}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(168,85,247,0.15)",
                color: "#e9d5ff",
              }}
              transition={{ duration: 0.3 }}
              className="px-4 py-2 rounded-full border border-purple-800/40 text-gray-300 cursor-default backdrop-blur-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* ==== CTA ==== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-center mt-28 relative z-10"
      >
        <Link
          href="/projects"
          className="px-8 py-3 rounded-full  from-purple-600 to-fuchsia-700 text-white font-semibold shadow-[0_0_25px_rgba(192,132,252,0.5)] hover:shadow-[0_0_40px_rgba(217,70,239,0.8)] hover:scale-105 transition-all duration-300"
        >
          Ver mis proyectos
        </Link>
      </motion.div>
    </section>
  );
}
