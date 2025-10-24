import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// 🧠 Simulación de base de datos local
const projects = [
  {
    slug: "python-blockchain",
    title: "Blockchain con Python",
    description:
      "Un sistema blockchain creado con Python que permite registrar transacciones de forma descentralizada. Implementa consenso Proof of Work y validación de nodos.",
    image: "/images/Python-Blockchain.webp",
    tags: ["Python", "Blockchain", "API", "Security"],
    github: "https://github.com/tuperfil/blockchain-python",
  },
  {
    slug: "nextjs-portafolio",
    title: "Portafolio con Next.js",
    description:
      "Un portafolio moderno hecho con Next.js, TailwindCSS y animaciones con Framer Motion. Incluye sistema de contacto con API y base de datos.",
    image: "/images/Nextjs-Portafolio.webp",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/tuperfil/nextjs-portafolio",
  },
];

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0014] to-[#1a0029] text-white px-6 py-16">
      <div className="max-w-4xl w-full bg-[#0f001c]/60 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 shadow-xl">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="rounded-xl mb-8 object-cover w-full"
        />

        <h1 className="text-4xl font-bold text-purple-400 mb-4">{project.title}</h1>
        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-purple-800/40 border border-purple-500/30 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <Link
          href={project.github}
          target="_blank"
          className="inline-block bg-gradient-to-r from-purple-600 to-fuchsia-700 px-6 py-3 rounded-md font-semibold hover:scale-105 transition-transform"
        >
          Ver en GitHub
        </Link>
      </div>

      <Link
        href="/projects"
        className="mt-10 text-purple-400 hover:text-purple-300 transition-colors"
      >
        ← Volver a proyectos
      </Link>
    </section>
  );
}
