import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 | Página não encontrada</h1>
      <p className="text-zinc-400">A página que você está procurando não existe.</p>
      <Link href="/">Voltar para a página inicial</Link>
    </div>
  );
}
