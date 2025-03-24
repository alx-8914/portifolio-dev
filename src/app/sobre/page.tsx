import Image from "next/image";

export default function Sobre() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8"><span className="text-blue-500">Sobre </span>Mim</h1>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Foto ou avatar */}
          <div className="w-58 h-68 rounded-full overflow-hidden border-3 border-blue-500 hover:scale-105 transition-transform duration-500">
            <Image
              src="/image-perfil.jpg" // Substitua pelo caminho da sua foto
              alt="Foto de perfil"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Descrição */}
          <div className="flex-1">
            <p className="text-lg text-gray-300 mb-4">
              Olá! Meu nome é Alexsandro da Silva,
              tenho 43 anos e sou um Desenvolvedor <span className="text-blue-500">FullStack</span> e  sou apaixonado por desenvolver aplicações e soluções Web´s digitais que impactam positivamente a vida das pessoas trazendo uma experiência incrível ao usuário.
              Com mais de 1 ano de experiência em desenvolvimento web, tenho trabalhado com tecnologias como descrevo em minhas habilidades logo abaixo e buscando sempre entregar projetos de alta qualidade e performance.
            </p>
            <p className="text-lg text-gray-300">
              Além do Desenvolvimento, atualmente trabalho em outra área e sigo na minha nova transição de carreira, sou entusiasta de boas práticas de código, arquitetura de software e experiência do usuário (UX/UI). Estou sempre em busca de novos desafios e oportunidades para aprender e crescer profissionalmente.
            </p>
            {/* Botão para baixar o currículo */}
            <a
              href="/alexsandro-da-silva.pdf" // Substitua pelo caminho do seu currículo
              download
              className="inline-block mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 hover:scale-105 transition-transform duration-400 transition-colors duration-200"
            >
              Baixar Currículo
            </a>
          </div>
        </div>

        {/* Habilidades */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Habilidades</h2>
          <div className="flex flex-wrap gap-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Next.js",
              "React.js",
              "React Native",
              "Styled Components",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "MySQL",
              "PostgreSQL",
              "Prisma",
              "Docker",
              "AWS",
              "Firebase",
              "C#",
              "SQL",
              "Git&GitHub",
              "Figma",
              "UX/UI Design",
            ].map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-blue-500/20 text-blue-500 hover:scale-115 transition-transform duration-400 rounded-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        {/*certificados */}
        <div className="mt-12 flex flex-col gap-4">
          <h2 className="text-3xl font-bold mb-6">Certificados</h2>
          <div className="flex grid-cols-3 grid gap-4">
            <Image
              src="/certificadoDevClub.png" // Substitua pelo caminho da sua foto
              alt="certificadoDevClub"
              width={300}
              height={300}
            />
            <Image
              src="/certificado2.png" // Substitua pelo caminho da sua foto
              alt="certificadoDevClub"
              width={300}
              height={300}
            />
            <Image
              src="/Certificado - Dev Club - Alexsandro da Silva - Esquenta pré-Desafio Programador do Zero.png" // Substitua pelo caminho da sua foto
              alt="certificadoDevClub"
              width={300}
              height={300}
            />
            <Image
              src="/certificadoEscolaTrb40.jpeg"
              alt="certificadoDOtrabalhador4.0"
              width={300}
              height={300}
            />
            <Image
              src="/certificadoAlura.jpeg"
              alt="certificadoAlura"
              width={300}
              height={300}
            />
            <Image
              src="/certificadoFrontAlura.jpeg"
              alt="certificadoFrontAlura"
              width={300}
              height={300}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
