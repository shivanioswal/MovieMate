import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

import { fetchPopularMovies, fetchPopularTVShows } from "./util/helper";

import Carousel from "./component/carousel";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [tvshows, setTVShows] = useState([]);

  useEffect(() => {
    fetchPopularMovies(setMovies);
    fetchPopularTVShows(setTVShows);
  }, []);

  return (
    <div>
      {movies.length === 0 ? (
        <div className="loader">
          <HashLoader color="#caf4ff" />
        </div>
      ) : (
        <Carousel data={movies} category={"Movies"} redirect={"/movies"} />
      )}

      {tvshows.length === 0 ? (
        <div className="loader">
          <HashLoader color="#caf4ff" />
        </div>
      ) : (
        <Carousel data={tvshows} category={"TV Shows"} redirect={"/tv"} />
      )}
    </div>
  );
}

export default App;
