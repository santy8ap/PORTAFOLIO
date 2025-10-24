"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";

// Carga dinámica del componente Spline
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-purple-400 animate-pulse">Cargando experiencia 3D...</div>
    </div>
  ),
});

export default function Home() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-6">
      {/* ==== Fondo interactivo Spline (pantalla completa, detrás de todo) ==== */}
      <div className="fixed inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/CEC02qzJ9FCK9tIM/scene.splinecode"
          className="w-full h-full"
        />
        {/* Capa oscura para contraste del texto */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />
      </div>

      {/* ==== Contenido principal (por encima de Spline) ==== */}
      <div className="relative z-10 flex flex-col items-center">
        {/* ==== Título principal ==== */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-linear-to-r from-purple-300 via-purple-400 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Hola, soy <span className="text-purple-400 font-extrabold">SantiDev</span>
        </motion.h1>

        {/* ==== Subtítulo ==== */}
        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Desarrollador <span className="text-purple-400">Fullstack</span>, apasionado por la{" "}
          <span className="text-purple-300">inteligencia artificial</span> y la{" "}
          <span className="text-purple-300">ciberseguridad</span>.  
          Me enfoco en crear soluciones digitales con propósito y diseño funcional.
        </motion.p>

        {/* ==== Botones ==== */}
        <motion.div
          className="flex flex-wrap gap-5 justify-center mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <Link
            href="/projects"
            className="px-7 py-3 rounded-full bg-linear-to-r from-purple-600 to-fuchsia-700 text-white font-semibold shadow-[0_0_25px_rgba(192,132,252,0.5)] hover:shadow-[0_0_40px_rgba(217,70,239,0.8)] hover:scale-105 transition-all duration-300"
          >
            Ver proyectos
          </Link>
          <Link
            href="/about"
            className="px-7 py-3 rounded-full border border-purple-600 text-gray-300 hover:text-white hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300"
          >
            Sobre mí
          </Link>
        </motion.div>
      </div>

      {/* ==== Indicador de scroll (más abajo, fuera de los botones) ==== */}
      <motion.div
        className="absolute bottom-10 text-gray-400 animate-bounce text-sm tracking-wide z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
      >
        Desliza para explorar
      </motion.div>

      {/* ==== Glow de fondo sutil ==== */}
      <div className="absolute z-5 top-1/2 left-1/2 w-[90vw] h-[90vw] bg-purple-700/20 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </section>
  );
}
