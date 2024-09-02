import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { IMDBImagePath } from "../util/constants";
import { FavoritesContext } from "../context/favorites";
import { Watchlatercontext } from "../context/watchlater";

export default function Listing() {
  const { favorites } = useContext(FavoritesContext);
  const { watchlater } = useContext(Watchlatercontext);

  const location = useLocation();
  const currentPath = location.pathname.split("/").pop();

  return (
    <section>
      {currentPath === "favorites" ? (
        <div className="listing" style={{ padding: "2rem 0" }}>
          {favorites.length > 0 &&
            favorites?.map((item) => (
              <Link key={item.id} to={`/search/${item.category}/${item.id}`}>
                <div className="listing--details">
                  <div className="no-overflow">
                    <img
                      id="poster"
                      src={`${IMDBImagePath}/${item.poster}`}
                      alt={item.name}
                    />
                  </div>
                  <p className="name">{item.name}</p>
                </div>
              </Link>
            ))}
        </div>
      ) : (
        <div className="listing" style={{ padding: "2rem 0" }}>
          {watchlater.length > 0 &&
            watchlater?.map((item) => (
              <Link key={item.id} to={`/search/${item.category}/${item.id}`}>
                <div className="listing--details">
                  <div className="no-overflow">
                    <img
                      id="poster"
                      src={`${IMDBImagePath}/${item.poster}`}
                      alt={item.name}
                    />
                  </div>
                  <p className="name">{item.name}</p>
                </div>
              </Link>
            ))}
        </div>
      )}
    </section>
  );
}
