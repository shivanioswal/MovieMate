import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to={"/"}>
        <h1 id="logo">MovieMate</h1>
      </Link>
      <ul className="nav--links">
        <Link to={"/movies"}>
          <li>Movies</li>
        </Link>
        <Link to={"/tv"}>
          <li>TV Shows</li>
        </Link>
      </ul>
    </nav>
  );
}
