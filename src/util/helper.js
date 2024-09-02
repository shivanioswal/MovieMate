import { popularMovies, popularTv } from "./constants";

async function fetchPopularMovies(setMovies) {
  const response = await fetch(popularMovies, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY} `,
    },
  });
  const movies = await response.json();
  setMovies(movies.results);
}

async function fetchPopularTVShows(setTVShows) {
  const response = await fetch(popularTv, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY} `,
    },
  });
  const tv = await response.json();

  setTVShows(tv.results);
}

async function fetchDetails(url, setDetails, setIsLoading) {
  setIsLoading(true);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY} `,
    },
  });
  const details = await response.json();
  if (response.status === 200) {
    setDetails(details);
  } else {
    setDetails(null);
  }
  setTimeout(() => setIsLoading(false), 1000); //after 1 second we are setting isloading to false
}

export { fetchPopularMovies, fetchPopularTVShows, fetchDetails };
