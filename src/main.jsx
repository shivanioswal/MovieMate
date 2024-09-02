import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Navbar from "./component/navbar.jsx";
import Movies from "./pages/movies.jsx";
import TV from "./pages/tv.jsx";
import Detail from "./pages/detail.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FavoritesContextProvider from "./context/favorites.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Listing from "./pages/listing.jsx";

import WatchlaterContextProvider from "./context/watchlater";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <App />
      </>
    ),
  },
  {
    path: "/movies",
    element: (
      <>
        <Navbar />
        <Movies />
      </>
    ),
  },
  {
    path: "/tv",
    element: (
      <>
        <Navbar />
        <TV />
      </>
    ),
  },
  {
    path: "/search/:endpoint/:id",
    element: (
      <>
        <Navbar />
        <Detail />
      </>
    ),
  },
  {
    path: "/favorites",
    element: (
      <>
        <Navbar />
        <Listing />
      </>
    ),
  },
  {
    path: "/watchlater",
    element: (
      <>
        <Navbar />
        <Listing />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <WatchlaterContextProvider>
        <RouterProvider router={router} />
        <ToastContainer autoClose={3000} />
      </WatchlaterContextProvider>
    </FavoritesContextProvider>
  </React.StrictMode>
);
