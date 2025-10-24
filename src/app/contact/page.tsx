// src/app/contact/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, CheckCircle, XCircle } from "lucide-react";

type FormData = {
  fullName: string;
  email: string;
  message: string;
};

type FormErrors = {
  fullName?: string;
  email?: string;
  message?: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [responseMessage, setResponseMessage] = useState("");

  // Validación del formulario
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validar nombre
    if (!formData.fullName.trim()) {
      newErrors.fullName = "El nombre es obligatorio";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "El nombre debe tener al menos 3 caracteres";
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    // Validar mensaje
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar cambios en inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Limpiar error del campo al escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Enviar formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setResponseMessage("¡Mensaje enviado con éxito! Te responderé pronto.");
        setFormData({ fullName: "", email: "", message: "" });
        
        // Resetear después de 5 segundos
        setTimeout(() => {
          setStatus("idle");
          setResponseMessage("");
        }, 5000);
      } else {
        setStatus("error");
        setResponseMessage(data.error || "Error al enviar el mensaje");
      }
    } catch (error) {
      setStatus("error");
      setResponseMessage("Error de conexión. Intenta de nuevo.");
      console.error(error);
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-20 px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-purple-300 mb-4">
          Contáctame
        </h1>
        <p className="text-gray-300 text-lg">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-purple-900/10 border border-purple-800/30 rounded-2xl p-8 backdrop-blur-sm"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre completo */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-gray-300">
              <div className="flex items-center gap-2">
                <User size={18} className="text-purple-400" />
                Nombre completo *
              </div>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-black/50 border ${
                errors.fullName ? "border-red-500" : "border-purple-800/50"
              } rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white`}
              placeholder="Tu nombre"
            />
            {errors.fullName && (
              <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                <XCircle size={14} /> {errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-purple-400" />
                Email *
              </div>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-black/50 border ${
                errors.email ? "border-red-500" : "border-purple-800/50"
              } rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white`}
              placeholder="tu@email.com"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                <XCircle size={14} /> {errors.email}
              </p>
            )}
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
              <div className="flex items-center gap-2">
                <MessageSquare size={18} className="text-purple-400" />
                Mensaje *
              </div>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 bg-black/50 border ${
                errors.message ? "border-red-500" : "border-purple-800/50"
              } rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white resize-none`}
              placeholder="Cuéntame sobre tu proyecto..."
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                <XCircle size={14} /> {errors.message}
              </p>
            )}
          </div>

          {/* Mensaje de respuesta */}
          {responseMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg flex items-center gap-2 ${
                status === "success"
                  ? "bg-green-900/20 border border-green-700 text-green-300"
                  : "bg-red-900/20 border border-red-700 text-red-300"
              }`}
            >
              {status === "success" ? (
                <CheckCircle size={20} />
              ) : (
                <XCircle size={20} />
              )}
              {responseMessage}
            </motion.div>
          )}

          {/* Botón submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 px-6 bg-purple-700 hover:bg-purple-600 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send size={20} />
                Enviar mensaje
              </>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
}