export function Footer() {
  return (
    <footer className="bg-zinc-900 font-bold text-white py-6">
      <div className="container mx-auto text-center text-sm">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Alexsandro da Silva. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}