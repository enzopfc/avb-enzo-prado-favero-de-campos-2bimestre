import React from "react";

// Fonte bonita opcional: adicione em index.html se quiser <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
export default function PokemonCard({ pokemon }) {
  // Cores de borda por tipo
  const type = pokemon.types[0]?.type.name;
  const typeColors = {
    fire: "border-red-500 shadow-red-500/30",
    water: "border-blue-500 shadow-blue-500/30",
    grass: "border-green-500 shadow-green-500/30",
    electric: "border-yellow-400 shadow-yellow-400/30",
    bug: "border-lime-500 shadow-lime-500/30",
    poison: "border-purple-500 shadow-purple-500/30",
    normal: "border-zinc-400 shadow-zinc-400/30",
    ground: "border-yellow-700 shadow-yellow-700/30",
    rock: "border-yellow-900 shadow-yellow-900/30",
    psychic: "border-pink-500 shadow-pink-500/30",
    ice: "border-cyan-300 shadow-cyan-300/30",
    fighting: "border-orange-800 shadow-orange-800/30",
    ghost: "border-indigo-900 shadow-indigo-900/30",
    dragon: "border-indigo-700 shadow-indigo-700/30",
    dark: "border-gray-800 shadow-gray-800/30",
    fairy: "border-pink-300 shadow-pink-300/30",
    steel: "border-gray-400 shadow-gray-400/30",
    flying: "border-sky-400 shadow-sky-400/30",
    default: "border-zinc-700 shadow-zinc-700/30"
  };
  const borderColor = typeColors[type] || typeColors.default;

  return (
    <div className={`bg-zinc-900 rounded-2xl border-4 ${borderColor} shadow-2xl transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-yellow-200/20 w-60 mx-auto flex flex-col items-center cursor-pointer`}>
      <div className="w-full flex justify-end pr-2 pt-2 select-none">
        <span className="text-xs text-gray-400 font-bold">#{pokemon.id}</span>
      </div>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto my-1 w-24 h-24 drop-shadow-lg select-none"
        draggable={false}
      />
      <h2 className="text-xl font-extrabold capitalize mb-2 text-white font-[Montserrat] select-none">{pokemon.name}</h2>
      <div className="mb-1 text-sm">
        <span className="font-semibold text-gray-300">Altura:</span> {pokemon.height / 10} m
      </div>
      <div className="mb-1 text-sm">
        <span className="font-semibold text-gray-300">Peso:</span> {pokemon.weight / 10} kg
      </div>
      <div className="mb-3 text-sm">
        <span className="font-semibold text-gray-300">Tipo:</span>{" "}
        {pokemon.types.map((type) => (
          <span
            key={type.type.name}
            className="inline-block bg-yellow-300 text-gray-900 px-2 py-1 rounded-full text-xs mx-1 font-bold"
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}
