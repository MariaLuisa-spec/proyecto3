import { Link } from "react-router-dom";
import "./Pelicula.css";

function Pelicula({ data }) {
  return (
    <div className="pelicula">
      <img src={data.imagen}></img>
      <div className="info">
        <h2>{data.titulo}</h2>
        <Link to={`/pelicula/${data.id}`}>ver más</Link>
      </div>
    </div>
  );
}

export default Pelicula;
