import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import PokemonCard from "../components/PokemonCard";

export default function Favoritos() {
  const { favorites } = useFavorites();

  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-zinc-950 pb-10 relative">
      <h1 className="text-5xl md:text-7xl font-extrabold my-10 text-yellow-400 font-[Montserrat] drop-shadow-lg select-none text-center">
        Favoritos
      </h1>
      <Link
        to="/pokemon"
        className="mb-10 px-10 py-5 bg-gradient-to-br from-blue-600 to-blue-500 text-yellow-400 text-3xl font-extrabold rounded-2xl shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500"
        style={{
          color: "#facc15",
          textShadow: "0 1px 12px #000, 0 1px 1px #000"
        }}
      >
        Voltar para Pokédex
      </Link>
      {favorites.length === 0 ? (
        <p className="text-white text-xl mt-24">Nenhum Pokémon favoritado ainda.</p>
      ) : (
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4">
          {favorites.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
      <footer className="fixed bottom-2 right-4 text-zinc-500 text-sm select-none z-50">
        © Enzo Favero
      </footer>
    </div>
  );
}
