import { useEffect, useState } from "react";
import { fetchPopularMovies, fetchPopularTVShows } from "./util/helper";

import Carousel from "./component/carousel";
import "./App.css";

function App() {
  const [movies, setMovie] = useState([]);
  const [tvshows, setTVShows] = useState([]);

  useEffect(() => {
    fetchPopularMovies(setMovie);
    fetchPopularTVShows(setTVShows);
  }, []);

  return (
    <main>
      <section>
        <Carousel data={movies} category={"Movies"} redirect={"/movies"} />
        <Carousel data={tvshows} category={"TV Shows"} redirect={"/tv"} />
      </section>
    </main>
  );
}

export default App;
