import { useState, useEffect } from "react";
import { fetchPopularTVShows } from "../util/helper";
import { IMDBImagePath } from "../util/constants";
import { Link } from "react-router-dom";

export default function TVShows() {
  const [tvshows, setTVShows] = useState([]);
  useEffect(() => {
    fetchPopularTVShows(setTVShows);
  }, []);

  return (
    <div className="movie--container">
      {tvshows.map((tvshow) => (
        <Link key={tvshow.id} to={`/search/tv/${tvshow.id}`}>
          <div className="listing--details">
            <div className="no-overflow">
              <img
                id="poster"
                src={`${IMDBImagePath}/${tvshow.poster_path}`}
                alt={tvshow.original_name}
              />
            </div>
            <p className="name">{tvshow.original_name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
