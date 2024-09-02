import { useState, useEffect, createContext } from "react";

export const Watchlatercontext = createContext(null);

export default function WatchlaterContextProvider({ children }) {
  const [watchlater, setWatchlater] = useState(() => {
    const current = JSON.parse(window.localStorage.getItem("watchlater"));
    if (current && current.length > 0) {
      return current;
    }
    return [];
  });

  useEffect(() => {
    window.localStorage.setItem("watchlater", JSON.stringify(watchlater));
  }, [watchlater]);

  return (
    <Watchlatercontext.Provider value={{ watchlater, setWatchlater }}>
      {children}
    </Watchlatercontext.Provider>
  );
}
