This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

OR

# 🚀 Portafolio Personal con Next.js, Prisma y API Contact

Este proyecto es un **portafolio personal profesional**, construido con **Next.js (App Router)**, **TypeScript**, **TailwindCSS**, **Prisma ORM**, y una API REST para el formulario de contacto.  
Permite mostrar tus proyectos, información personal, y recibir mensajes de contacto guardados en base de datos.

---

## 📁 Estructura del Proyecto

mi-portfolio/
├── prisma/
│ ├── schema.prisma # Definición del modelo de base de datos
├── src/
│ ├── app/
│ │ ├── api/
│ │ │ └── contact/route.ts # API para guardar mensajes
│ │ ├── contact/page.tsx # Página del formulario
│ │ ├── projects/page.tsx # Listado de proyectos
│ │ └── projects/[slug]/page.tsx # Detalle de cada proyecto
│ ├── components/ # Componentes UI reutilizables
│ ├── lib/ # Configuración de Prisma
│ └── styles/ # Archivos de estilos globales
├── .env # Variables de entorno
├── package.json
├── tailwind.config.ts
├── next.config.mjs
└── README.md


---

## ⚙️ Requisitos Previos

Antes de empezar, asegúrate de tener instalado:

- **Node.js** ≥ 18.0.0  
- **npm** ≥ 9.0.0  
- **Git**
- (Opcional) **SQLite Browser** o **Prisma Studio** para visualizar los datos

---

## 🧩 Instalación Local

```bash
# 1️⃣ Clonar el repositorio
git clone https://github.com/santy8ap/PORTAFOLIO.git
cd PORTAFOLIO

# 2️⃣ Instalar dependencias
npm install

# 3️⃣ Crear el archivo de entorno
echo "DATABASE_URL=\"file:./dev.db\"" > .env

# 4️⃣ Inicializar Prisma y la base de datos
npx prisma migrate dev --name init
npx prisma generate

# 5️⃣ Ejecutar el servidor en modo desarrollo
npm run dev

🟢 El servidor se iniciará en:
http://localhost:3000

🧠 API Contact (Backend)

El formulario de contacto envía peticiones a:

POST /api/contact

Ejemplo de request:
{
  "fullName": "Juan Pérez",
  "email": "juan@example.com",
  "message": "Hola, quiero colaborar contigo!"
}
Ejemplo de response:
{
  "success": true,
  "data": {
    "id": 1,
    "fullName": "Juan Pérez",
    "email": "juan@example.com",
    "message": "Hola, quiero colaborar contigo!",
    "createdAt": "2025-10-24T12:00:00Z"
  }

🗄️ Base de Datos con Prisma (SQLite)
Esquema (prisma/schema.prisma)

model ContactMessage {
  id        Int      @id @default(autoincrement())
  fullName  String
  email     String
  message   String
  createdAt DateTime @default(now())


Comandos Útiles

# Sincronizar cambios en el esquema
npx prisma migrate dev --name "update-model"

# Abrir Prisma Studio (interfaz visual para ver la DB)
npx prisma studio

# Regenerar cliente Prisma si cambias el esquema
npx prisma generate

| Comando                  | Descripción                                   |
| ------------------------ | --------------------------------------------- |
| `npm run dev`            | Inicia el servidor Next.js en modo desarrollo |
| `npm run build`          | Construye el proyecto para producción         |
| `npm start`              | Ejecuta la versión de producción              |
| `npx prisma migrate dev` | Crea o sincroniza la base de datos local      |
| `npx prisma studio`      | Abre el visualizador de base de datos         |


🛠️ Automatización del Workflow (Dev → Deploy)

Si deseas automatizar todo el proceso (instalación, build y deploy):
#!/bin/bash
# 🧠 Script de despliegue automatizado para Next.js + Prisma

echo "🚀 Iniciando despliegue automático..."

git add .
git commit -m "auto-deploy"
git push origin main

echo "🔄 Sincronizando base de datos..."
npx prisma migrate deploy
npx prisma generate

echo "🏗️ Construyendo proyecto..."
npm run build

echo "✅ Despliegue completado. Puedes visitar tu app en Vercel o localmente."

🧩 Créditos

Autor: Santy8ap
Stack principal:

Next.js 16 (App Router)

TypeScript

TailwindCSS

Prisma ORM (SQLite)

React Hook Form + Zod (validación)

📜 Licencia

MIT License © 2025 Santy8ap
Siéntete libre de usar este código como base para tu propio portafolio.

