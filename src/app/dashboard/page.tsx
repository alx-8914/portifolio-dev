"use client"; // Adicione isso no topo do arquivo para usar hooks e animações

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "DevBills-Controle Financeiro",
    description: "Controle seus Gastos como desenvolvedor.",
    imageUrl: "/assets/Controle-dev.png",
    link: "https://controles-financeiros-devbills.netlify.app/",
  },
  {
    id: 2,
    title: "DevBurger",
    description: "Ver o projeto no GitHub",
    imageUrl: "/assets/Capa-home-devburger.png",
    link: "https://github.com/alx-8914/devburger-interface",
  },
  {
    id: 3,
    title: "Clone Twitter",
    description: "Ver o projeto no Netlify",
    imageUrl: "/assets/Clone tiwtter.png",
    link: "https://clone-tiwtters.netlify.app/",
  },
  {
    id: 4,
    title: "Flappy Bird",
    description: "Ver o projeto no Netlify",
    imageUrl: "/assets/FlappyBirdGmae.png",
    link: "https://game-project-flappybird.netlify.app/",
  },
  {
    id: 5,
    title: "Dev-Movies",
    description: "Ver o projeto no Netlify",
    imageUrl: "/assets/Capa-dev-movies.png",
    link: "https://dev-movies-react.netlify.app/",
  },
  {
    id: 6,
    title: "Show Cars",
    description: "Ver o projeto no Netlify",
    imageUrl: "/assets/Capa-ferrari.png",
    link: "https://fp-sellection-cars.netlify.app/",
  },
  // Adicione mais projetos conforme necessário
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Define um atraso entre as animações dos filhos
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DashboardPage() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">My <span className="text-blue-500"> Projects</span></h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Link href={`/projects/${project.id}`}>
              <motion.div
                className="bg-zinc-700 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}