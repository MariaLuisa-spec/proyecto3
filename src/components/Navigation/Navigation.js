import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="large-nav">
      <ul className="flex">
        <li>
          <Link to="peliculas">Peliculas</Link>
        </li>
        <li>
          <Link to="series">Series</Link>
        </li>
        <li>
          <a href="#">Premios</a>
        </li>
        <li>
          <a href="#">Actores</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
