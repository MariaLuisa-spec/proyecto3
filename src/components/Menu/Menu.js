import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul className="menu flex">
      <li>
        <Link to="peliculas">Peliculas</Link>
      </li>
      <li>
        <Link to="series">Series</Link>
      </li>
      <li>
        <Link to="premios">Premios</Link>
      </li>
      <li>
        <Link to="actores">Actores</Link>
      </li>
    </ul>
  );
}

export default Menu;
