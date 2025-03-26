import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa"; // Importe o ícone de seta

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  details: string;
}

// Lista de projetos (substitua por uma chamada à API ou banco de dados)
const projects: Project[] = [
  {
    id: 1,
    title: "DevBills-Controle Financeiro",
    description: "Ver no Netlify cliqui aqui no card.",
    imageUrl: "/assets/Controle-dev.png",
    link: "https://controles-financeiros-devbills.netlify.app/",
    details: "Detalhes de uma aplicação voltada para controle financeiro, que permite gerenciar receitas e despesas de forma organizada e intuitiva. Este projeto foi desenvolvido usando Backend: Node.js, Express, MongoDB Atlas e TypeScript, Frontend: React.js, Styled Components, Context API e TypeScript. O foco foi criar uma interface de usuário amigável e responsiva, proporcionando uma experiência de navegação intuitiva.",
  },
  {
    id: 2,
    title: "DevBurguer-Interface",
    description: "Descrição breve do Projeto 2.",
    imageUrl: "/assets/Capa-home-devburger.png",
    link: "https://github.com/alx-8914/devburger-interface",
    details: "Tratar-se de uma aplicação de uma Hamburgueria, onde o usuários comum se cadastra e faz seu login, mostrando os produtos em Home, Cardápio, de modo intuitivo escolhendo cada item em forma de carrossel e todo tipo de categorias entre as paginas",
  },
  {
    id: 3,
    title: "Clone Twitter",
    description: "Clone Twitter",
    imageUrl: "/assets/Clone tiwtter.png",
    link: "https://clone-tiwtters.netlify.app/",
    details: "Clone Twitter, uma rede social que permite aos usuários compartilhar pensamentos, ideias e experiências em formato de postagens curtas. Com uma interface intuitiva e recursos de interação, os usuários podem seguir outros usuários, curtir e comentar postagens, criando uma comunidade online dinâmica e colaborativa. Tecnologias Utilizadas Front-end: React.js, JSX, CSS Tailwind, Back-end: Javascript, Node.js @Vite; Outras Ferramentas: CryptoJS (para geração de hashes MD5), e Git/GitHub para versionamento do projeto.",
  },
  {
    id: 4,
    title: "Flappy-Bird",
    description: "Flappy-Bird-Game",
    imageUrl: "/assets/FlappyBirdGmae.png",
    link: "https://game-project-flappybird.netlify.app/",
    details: "Flappy Bird é um jogo clássico de arcade desenvolvido por Dong Nguyen em 2013. O objetivo do jogo é controlar um pássaro voando através de tubos verticais, evitando colidir com eles. O jogo é conhecido por sua simplicidade e jogabilidade desafiadora. Tecnologias Utilizadas: HTML5, CSS3, JavaScript.",
  },
  {
    id: 5,
    title: "Dev-Movies",
    description: "Dev-Movies",
    imageUrl: "/assets/DevMovies.png",
    link: "https://dev-movies.netlify.app/",
    details: "DevMovies é uma aplicação web que permite aos usuários explorar e descobrir filmes. Com uma interface moderna e responsiva, os usuários podem navegar por diferentes categorias, ver detalhes dos filmes, trailers e avaliações. Tecnologias Utilizadas: React.js, CSS Tailwind, API de Filmes.",
  },
  {
    id: 6,
    title: "Show-Cars",
    description: "Show-Cars-Interface",
    imageUrl: "/assets/Capa-ferrari.png",
    link: "https://fp-sellection-cars.netlify.app/",
    details: "Site com Aniamação de Carros, com uma seleção de carros de luxo, incluindo modelos de alta performance e design elegante. Tecnologias Utilizadas: HTML5, CSS3 e JavaScript.",
  },
  // Adicione mais projetos conforme necessário
];

// Função para gerar os parâmetros estáticos
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  // Encontra o projeto com base no ID da URL
  const project = projects.find((p) => p.id === parseInt(params.id));

  // Se o projeto não for encontrado, exibe uma mensagem de erro
  if (!project) {
    return (
      <div className="bg-zinc-800 text-white min-h-screen flex items-center justify-center">
        <p>Projeto não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Voltar para Projetos
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <p className="text-gray-600 mb-6">{project.description}</p>
            <div className="prose max-w-none">
              <p className="text-gray-700">{project.details}</p>
            </div>
            <div className="mt-8">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Ver Projeto
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}