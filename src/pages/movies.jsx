import { useState, useEffect } from "react";
import { fetchPopularMovies } from "../util/helper";
import { Link } from "react-router-dom";
import { IMDBImagePath } from "../util/constants";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies(setMovies);
  }, []);

  return (
    <div className="movie--container">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/search/movie/${movie.id}`}>
          <div className="listing--details">
            <div className="no-overflow">
              <img
                id="poster"
                src={`${IMDBImagePath}/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <p className="name">{movie.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
