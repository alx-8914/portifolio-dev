import Image from "next/image";
import Carousel from "../components/carousel";

export default function Home() {
  // Lista de skills (ícones)
  const skills = [
    { src: "/assets/item1-1.png", alt: "Skill 1 bg-zinc-100" },
    { src: "/assets/item1-2.png", alt: "Skill 2 " },
    { src: "/assets/item1-3.png", alt: "Skill 3" },
    { src: "/assets/item1-4.png", alt: "Skill 4" },
    { src: "/assets/item1-5.png", alt: "Skill 5" },
    { src: "/assets/item1-6.png", alt: "Skill 6" },
    { src: "/assets/item1-7.png", alt: "Skill 7" },
    { src: "/assets/item1-8.png", alt: "Skill 8" },
    { src: "/assets/item1-9.png", alt: "Skill 9" },
    { src: "/assets/item1-10.png", alt: "Skill 10" },
    // Adicione mais skills conforme necessário
  ];

  // Lista de projetos (imagens)
  const projetos = [
    { src: "/assets/item2_3.jpg", alt: "Projeto 1" },
    { src: "/assets/item2_4.jpg", alt: "Projeto 2" },
    { src: "/assets/item2_8.jpg", alt: "Projeto 3" },
    { src: "/assets/Projeto-mario-bros.png", alt: "Projeto 4" },
    { src: "/assets/clima-tempo.png", alt: "Projeto 5" },
    { src: "/assets/devbills.png", alt: "Projeto 6" },
    { src: "/assets/DevBurguer.png", alt: "Projeto 7" },
    { src: "/assets/item2_9.png", alt: "Projeto 8" },
    { src: "/assets/Clone tiwtter.png", alt: "Projeto 9" },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <div className="bg-zinc-900 text-white mx-w-screen-xl mx-auto p-5">
      <main className="flex items-center ml-6 min-h-[100vh]">
        <div className="Container">
          <h1 className="text-7xl font-bold">Olá, eu sou <span className="text-blue-500">Alexsandro</span>.</h1>
          <p className="text-2xl text-gray-300 mt-4 mb-5 max-w-[768px]">
            Sou um Desenvolvedor FullStack, apaixonado por criar aplicações inovadoras, impactantes e com muita eficiência de grandes projetos já realizados, e obtive a oportunidade de demostrar isso, e colocar em prática todo conhecimento e habilidades
            adquiridos durante minha jornada na plataforma do <span className="text-blue-500">Dev Club</span>, sob a mentoria do incrível <span className="text-blue-500">Rodolfo Mori</span>.</p>
          <p className="text-lg text-gray-300">Programador Júnior - Banco de Dados Backend, com o foco Reactjs, Nextjs, Javascript, Typescript, MongoDB, Docker e soluções de alta
            complexidade em resolver as tarefas e desafios reais que surgem no dia a dia.
          </p>
          <a href="/dashboard" className="mt-6 inline-block px-6 py-2 bg-blue-500 font-bold text-white rounded cursor-pointer hover:bg-blue-400 font-bold  hover:scale-115 transition-transform duration-500">Ver Projetos</a>
        </div>
        <div className="ml-10">
          <Image
            src="/image-perfil.jpg"
            alt="Foto de perfil de Alexsandro da Silva"
            width={500}
            height={500}
            className="rounded-full shadow-lg border-2 border-blue-500 hover:scale-105 transition-transform duration-400"
          />
        </div>
      </main>
      <section className="bg-zinc-900 text-white">
        <div className="Container text-center">
          <h2 className="text-4xl font-bold mb-8">My Skills <span className="text-blue-400">end</span> Projects</h2>
          <Carousel
            items={skills}
            direction="left"
            itemWidth={200}
            itemHeight={200}
            className="w-full my-18"
          />
          <Carousel
            items={projetos}
            direction="right"
            itemWidth={350}
            itemHeight={350}
            className="w-full my-18"
          />
        </div>
      </section>
    </div>
  );
}
