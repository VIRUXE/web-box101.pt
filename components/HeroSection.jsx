import React from "react";

import { Button } from "@/components/ui/button";

const Images = [
	"https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
	"https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
	"https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
	"https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
	"https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
];

export default function HeroSection() {
  return (
    <div className="bg-white h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            A nossa oficina é um espaço dedicado a cuidar de todo o tipo de veículos
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Experimente um serviço de qualidade e confiança
          </p>
          <Button className="px-8 py-3 rounded-lg">
            Agende Já
          </Button>
        </div>
      </div>
    </div>
  )
}