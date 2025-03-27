import { Metadata } from "next";
import "./globals.css";
import Cursor from '@/components/cursor/cursor';
import Header from "@/components/header";
import {Carousel} from "@/components/carousel";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Portfólio.dev",
  description: "Portfólio de projetos de desenvolvimento full stack",
  openGraph: {
    title: "Portfólio.dev",
    description: "Portfólio de projetos de Desenvolvimento Full Stack",
    images: ['https://agenciaplatz.com.br/wp-content/uploads/2019/04/banner-meio-programa%C3%A7%C3%A3o.png']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-900 text-white">
        <Header />
        <Carousel items={[]}/>
        {children}
        <Cursor />
        <Footer />
      </body>
    </html>
  );
}
