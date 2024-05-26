import { useState, useEffect } from "react";
import { fetchPopularTVShows } from "../util/helper";
import { IMDBImagePath } from "../util/constants";

export default function TVShows() {
  const [tvshows, setTVShows] = useState([]);
  useEffect(() => {
    fetchPopularTVShows(setTVShows);
  }, []);

  return (
    <div>
      {tvshows.map((tvshow) => (
        <div className="movie--listing" key={tvshow.id}>
          <img
            id="poster"
            src={`${IMDBImagePath}/${tvshow.poster_path}`}
            alt={tvshow.title}
          />
          <p key={tvshow.id}>
            {tvshow.poster} {tvshow.original_name}
          </p>
        </div>
      ))}
    </div>
  );
}
