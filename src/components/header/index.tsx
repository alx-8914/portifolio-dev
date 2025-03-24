import Link from "next/link";

export default function Header() {
  return (
    <header className="flex px-4 py-2 bg-zinc-900 text-white">
      <div className="flex items-center justify-between w-full mx-auto max-w-5xl">
        <nav>
          <ul className="flex items-center justify-center gap-12">
            <li>
              <Link href="/" className="hover:text-blue-400 font-bold transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-blue-500 font-bold transition-colors duration-200">
                Projetos
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:text-blue-600 font-bold transition-colors duration-200">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/contatos" className="hover:text-blue-700 font-bold transition-colors duration-200">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
          <Link href="/">
            <h1 className="text-3xl font-bold mt-2 hover:text-purple-700 font-bold transition-colors duration-200">
              Portfólio<span className="text-zinc-500 hover:text-red-900 font-bold transition-colors duration-200">.Dev</span>
            </h1>
          </Link>
        </div>
    </header>
  );
}