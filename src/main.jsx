import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import Navbar from "./component/navbar.jsx";
import Movies from "./pages/movies.jsx";
import TV from "./pages/tv.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./pages/detail.jsx";

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
    path: "/search/:endpoint/:id",
    element: (
      <>
        <Navbar />
        <Detail />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
