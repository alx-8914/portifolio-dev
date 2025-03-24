import Image from "next/image";
import React from "react";

interface CarouselProps {
  items: { src: string; alt: string }[]; // Lista de itens (imagens ou ícones)
  direction?: "left" | "right"; // Direção do carrossel (opcional)
  itemWidth?: number; // Largura dos itens (opcional)
  itemHeight?: number; // Altura dos itens (opcional)
  className?: string; // Classes adicionais (opcional)
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  direction = "left",
  itemWidth = 200,
  itemHeight = 200,
  className = "mx-4",
}) => {
  // Duplica os itens para criar o efeito de carrossel infinito
  const duplicatedItems = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex ${
          direction === "left" ? "animate-scroll" : "animate-scroll-reverse"
        }`}
      >
        {/* Renderiza os itens duplicados */}
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={item.src}
              alt={item.alt}
              width={itemWidth}
              height={itemHeight}
              className="mx-4"
            />
          </div>
          ))}
        {/* Renderiza os itens */}
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={item.src}
              alt={item.alt}
              width={itemWidth}
              height={itemHeight}
              className="mx-4"
            />
          </div>
        ))}
        {/* Renderiza os itens novamente para o efeito infinito */}
        {items.map((item, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0">
            <Image
              src={item.src}
              alt={item.alt}
              width={itemWidth}
              height={itemHeight}
              className="mx-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;