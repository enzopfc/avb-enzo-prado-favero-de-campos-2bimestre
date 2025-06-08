import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(pokemon) {
    setFavorites((prev) =>
      prev.find((fav) => fav.id === pokemon.id)
        ? prev.filter((fav) => fav.id !== pokemon.id)
        : [...prev, pokemon]
    );
  }

  function isFavorite(id) {
    return favorites.some((fav) => fav.id === id);
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
