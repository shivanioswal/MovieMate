import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { Rating } from "react-simple-star-rating";
import { Heart, Plus } from "lucide-react";
import { toast } from "react-toastify";

import { fetchDetails } from "../util/helper";
import { search, IMDBImagePath } from "../util/constants";
import { FavoritesContext } from "../context/favorites";
import { Watchlatercontext } from "../context/watchlater";

export default function Detail() {
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState(null);
  const { endpoint, id } = useParams();

  const { favorites, setFavorites } = useContext(FavoritesContext);
  const isFavorite = favorites?.filter((item) => item.id === id).length !== 0;

  function addToFavorites() {
    const favoriteMovie = {
      id,
      poster: details.poster_path,
      name: details.title || details.original_name,
      category: endpoint,
    };

    if (!isFavorite) {
      setFavorites((curr) => [...curr, favoriteMovie]);
      toast(`${favoriteMovie.name} added to favorites!`);
    } else {
      const filtered = favorites?.filter((item) => item.id !== id);
      setFavorites(filtered);
    }
  }

  const { watchlater, setWatchlater } = useContext(Watchlatercontext);
  const isWatchlater =
    watchlater?.filter((item) => item.id === id).length !== 0;

  function addtoWatchlater() {
    const watchlatermovie = {
      id,
      poster: details.poster_path,
      name: details.title || details.original_name,
      category: endpoint,
    };

    if (!isWatchlater) {
      setWatchlater((curr) => [...curr, watchlatermovie]);
      toast(`${watchlatermovie.name} added to WatchLater!`);
    } else {
      const filtered = watchlater?.filter((item) => item.id !== id);
      setWatchlater(filtered);
    }
  }

  useEffect(() => {
    fetchDetails(`${search}/${endpoint}/${id}`, setDetails, setIsLoading);
  }, [id, endpoint]);

  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <HashLoader color="#caf4ff" />
        </div>
      ) : (
        <>
          {details ? (
            <div className="detail">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <img
                  id="detail--poster"
                  src={`${IMDBImagePath}/${details.poster_path}`}
                  alt={details.title || details.original_name}
                />
                <div className="detail--buttons ">
                  <button
                    className="detail--buttons"
                    id="like"
                    onClick={addToFavorites}
                  >
                    <Heart
                      style={{
                        fill: isFavorite && "red",
                        color: isFavorite && "red",
                      }}
                    />
                    {isFavorite ? "Dislike" : "Like"}
                  </button>
                  <button
                    className="detail--buttons"
                    id="watch-later"
                    onClick={addtoWatchlater}
                  >
                    <Plus />
                    {isWatchlater ? "Remove" : "Add "}
                  </button>
                </div>
              </div>
              <div>
                <div className="detail--info">
                  <p id="detail--name">
                    {details.title || details.original_name}
                  </p>
                  <Rating
                    size={30}
                    initialValue={Math.ceil(details.vote_average) / 2}
                    readonly
                  />
                  <p>{details.overview}</p>
                </div>
                {details.homepage && (
                  <p>
                    Homepage:&nbsp;
                    <a href={details.homepage} style={{ color: "#5AB2FF" }}>
                      Visit Here
                    </a>
                  </p>
                )}
                {details.runtime && details.runtime !== 0 && (
                  <p>Runtime: {details.runtime} minutes</p>
                )}
                {details.release_date && (
                  <p>Release Date: {details.release_date}</p>
                )}
                <p>Status: {details.status}</p>
                <div className="detail--companies">
                  <p>Production Studio: </p>
                  {details.production_companies.length > 0 &&
                    details.production_companies.map((company, idx) => {
                      if (idx < 3) {
                        return (
                          <p key={company.id} id="company">
                            {company.name}
                          </p>
                        );
                      }
                    })}
                </div>
                <div className="detail--genres">
                  <p>Genre: </p>
                  {details.genres.length > 0 &&
                    details.genres.map((genre) => (
                      <p key={genre.id} id="genre">
                        {genre.name}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            <p>Could not find details of {id}</p>
          )}
        </>
      )}
    </div>
  );
}
