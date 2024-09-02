import { useState, useEffect, createContext } from "react";

export const FavoritesContext = createContext(null);

export default function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const current = JSON.parse(window.localStorage.getItem("favorites"));
    if (current && current.length > 0) {
      return current;
    }
    return [];
  });

  useEffect(() => {
    window.localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}
