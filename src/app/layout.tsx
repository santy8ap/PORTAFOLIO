// src/app/layout.tsx
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

/* ====== Fuentes refinadas ====== */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetMono = JetBrains_Mono({
  variable: "--font-jetmono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

/* ====== Metadatos ====== */
export const metadata: Metadata = {
  title: "SantiDev | Portafolio Moderno",
  description:
    "Portafolio personal con animaciones dinámicas, minimalismo oscuro y un diseño inspirado en interfaces futuristas.",
};

/* ====== Layout principal ====== */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetMono.variable} min-h-screen flex flex-col bg-black text-white antialiased selection:bg-purple-500/30 selection:text-white overflow-x-hidden`}
      >
        {/* ====== Header moderno ====== */}
        <header className="sticky top-0 z-50 backdrop-blur-2xl bg-black/60 border-b border-purple-500/10 shadow-[0_0_25px_rgba(168,85,247,0.15)]">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-5">
            <Link
              href="/"
              className="group flex items-center gap-3 text-2xl font-bold tracking-tight transition-transform duration-300 transform hover:scale-105"
            >
              <div
              className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-linear-to-br "
              aria-hidden
              >
              <div className="exaggerated-hover w-full h-full flex items-center justify-center transition-transform duration-300">
                <Image
                src="/images/kali-linux.png"
                alt="Logo"
                width={48}
                height={50}
                className="object-contain pointer-events-none"
                />
              </div>
              </div>

              <span className="bg-linear-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.95)] transition-all duration-500 transform hover:translate-x-1">
              SantiDev
              </span>
            </Link>

            {/* Navegación */}
            <ul className="flex items-center gap-6">
              {[
                { href: "/", label: "Inicio" },
                { href: "/projects", label: "Proyectos" },
                { href: "/about", label: "Sobre mí" },
                { href: "/contact", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group nav-link"
                  >
                    {link.label}
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-linear-to-r from-white via-purple-500 to-white rounded-full group-hover:w-full transition-all duration-500"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* ====== Main ====== */}
        <main className="grow w-full">{children}</main>


        <footer className="relative z-10 border-t border-purple-800/40 bg-black/90 backdrop-blur-xl py-14 footer-glow">
          <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center px-6">
            {/* Logo footer */}
            <div className="flex items-center gap-3">
             <div className="exaggerated-hover w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/kali-linux.png"
                    alt="Logo"
                    width={48}
                    height={48}
                    className="object-contain pointer-events-none"
                  />
                </div>
              <span className="font-semibold bg-linear-to-r from-purple-300 to-white bg-clip-text text-transparent">
                SantiDev
              </span>
            </div>

            {/* Línea decorativa */}
            <div className="w-24 h-0.5 bg-linear-to-r from-transparent via-purple-500 to-transparent" />

            {/* Texto principal */}
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-purple-400">SantiDev</span>{" "}
              · Inspirado por la innovación, impulsado por el código.
            </p>

            {/* Stack tecnológico */}
            <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-400">
              {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
            "TailwindCSS", "Python", "Bash Scripting", "Linux", "Git & GitHub",
            "Redes", "Pentesting", "OSINT", "Wireshark", "Metasploit", "IA aplicada a seguridad",].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-purple-900/30 border border-purple-800 text-gray-300 hover:border-purple-500 hover:text-white hover:shadow-[0_0_18px_rgba(168,85,247,0.45)] transition-all duration-300 cursor-default tech-pill"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
