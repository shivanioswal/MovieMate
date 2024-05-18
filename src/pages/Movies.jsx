import "./App.css";
import { useEffect, useState } from "react";

const Movies = () => {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
  });

  async function fetchPopularMovies() {
    const responseM = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY} `,
        },
      }
    );
    const popularMovies = await responseM.json();
    //json because DB is very large and json can make it into a smaller size
    console.log(popularMovies);
    setMovie(popularMovies.results); //all popular movies are now stored in state where we will display it 1 by 1 in map()
    // movies = popularMovies;
    // console.log(movies);
  }
  return (
    <main>
      <section>
        <h2> Movies</h2>
        {movies.map((movie) => (
          <div key={movie.id} className="listing--details">
            <div className="no-overflow">
              <img
                id="poster"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <p className="movie--name">{movie.title}</p>
          </div>
        ))}
      </section>
    </main>
  );
};
export default Movies;
