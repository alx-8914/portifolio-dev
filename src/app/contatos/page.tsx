"use client"; // Adicione isso no topo do arquivo para usar hooks e animações

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contatos() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Estado para loading
  const [isSent, setIsSent] = useState(false); // Estado para feedback de sucesso
  const [error, setError] = useState(""); // Estado para feedback de erro

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Envie o formulário usando o Formspree
      const response = await fetch("https://formspree.io/f/xkgjnega", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar a mensagem.");
      }

      setIsSent(true); // Exibe feedback de sucesso
      setFormData({ name: "", email: "", message: "" }); // Limpa o formulário
    } catch (err) {
      setError("Ocorreu um erro ao enviar a mensagem. Tente novamente."); // Exibe feedback de erro
    } finally {
      setIsLoading(false); // Finaliza o estado de loading
    }
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Contate<span className="text-blue-500">-me</span>
        </h1>

        {/* Formulário de contato */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Campos do formulário */}
          <div>
            <label htmlFor="name" className="block text-lg mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg mb-2">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg mb-2">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
              required
            />
          </div>

          {/* Feedback de sucesso ou erro */}
          {isSent && (
            <p className="text-green-500">Mensagem enviada com sucesso!</p>
          )}
          {error && <p className="text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors duration-200 hover:scale-105 transition-transform duration-400"
          >
            {isLoading ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </motion.form>

        {/* Links para redes sociais */}
        <div className="mt-12 flex flex-col gap-4">
          <h2 className="text-3xl font-bold mb-6">Redes Sociais</h2>
          <div className="flex gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5511967072184?text=Ol%C3%A1%2C%20sou%20Alexsandro%20Desenvolvedor%20Web%20Full%20Stack%20fale%20comigo%20no%20WhatsApp...%20"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Entre em contato pelo WhatsApp"
              className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 hover:bg-blue-400 hover:scale-115 transition-transform duration-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/alexsandro-da-silva-developer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visite meu perfil no LinkedIn"
              className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 hover:scale-115 transition-transform duration-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* E-mail */}
            <a
              href="mailto:alexdevsilva@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Envie-me um e-mail"
              className="p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 hover:scale-115 transition-transform duration-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/alx-8914"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visite meu perfil no GitHub"
              className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 hover:scale-115 transition-transform duration-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}