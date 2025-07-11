import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-screen h-screen min-h-screen flex flex-col items-center justify-center bg-zinc-950 relative">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-10 text-yellow-400 font-[Montserrat] drop-shadow-lg select-none text-center">
        Mini-Projeto DSW: Pokédex
      </h1>
      <p className="mb-10 text-white text-2xl text-center max-w-xl">
        Veja todos os Pokémon do mundo na Pokédex! <br />
        Clique abaixo para começar.
      </p>
      <div className="flex flex-row gap-8">
        <Link
          to="/pokemon"
          className="px-10 py-5 bg-gradient-to-br from-blue-600 to-blue-500 text-yellow-400 text-3xl font-extrabold rounded-2xl shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500"
          style={{
            color: "#facc15",
            textShadow: "0 1px 12px #000, 0 1px 1px #000"
          }}
        >
          Abrir Pokédex
        </Link>
        <Link
          to="/favoritos"
          className="px-10 py-5 bg-gradient-to-br from-yellow-400 to-yellow-300 text-blue-900 text-3xl font-extrabold rounded-2xl shadow-lg transition-all duration-200 hover:scale-105 hover:from-yellow-500 hover:to-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-400"
        >
          Ver Favoritos ⭐
        </Link>
      </div>
      <footer className="fixed bottom-2 right-4 text-zinc-500 text-sm select-none z-50">
        © Enzo Favero
      </footer>
    </div>
  );
}
