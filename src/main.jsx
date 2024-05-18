import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Movies from "./pages/Movies.jsx";
import Navbar from "./components/navbar.jsx";
import Tv from "./pages/Tv.jsx";

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
        <Tv />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
