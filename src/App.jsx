import "./App.css";

import { useEffect, useState } from "react";
import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

function App() {
  const [movies, setMovie] = useState([]);
  //let movies = [];
  const [tvshows, setTVShows] = useState([]);

  //useEffect is immediately rendered as soon as the app is called.
  useEffect(() => {
    fetchPopularMovies();
    fetchPopularTVShows();
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

  async function fetchPopularTVShows() {
    const response = await fetch("https://api.themoviedb.org/3/tv/popular", {
      methodthod: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY} `,
      },
    });
    const popularTVShows = await response.json();
    //console.log(popularTVShows);
    setTVShows(popularTVShows.results);
  }

  return (
    <main>
      <section>
        <h2> Movies</h2>
        <Slider {...settings}>
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
        </Slider>
        <hr className="horizontal--line" />
        <h2> TV Shows</h2>
        <Slider {...settings}>
          {tvshows.map((tvshow) => (
            <div key={tvshow.id} className="listing--details">
              <div className="no-overflow">
                <img
                  id="poster"
                  src={`https://image.tmdb.org/t/p/w500/${tvshow.poster_path}`}
                  alt={tvshow.original_name}
                />
              </div>
              <p className="movie--name">{tvshow.original_name}</p>
            </div>
          ))}
        </Slider>
      </section>
    </main>
  );
}

export default App;
