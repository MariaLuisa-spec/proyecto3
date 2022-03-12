import "./Peliculas.css";
import Pelicula from "../Pelicula/Pelicula";
import { useEffect, useState } from "react";

function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);

  const cargarPeliculas = () => {
    fetch("http://localhost:3000/json/peliculas.json")
      .then((respuesta) => respuesta.json())
      .then((data) => setPeliculas(data));
  };

  useEffect(() => {
    cargarPeliculas();
  }, []);

  return (
    <section id="peliculas">
      <div className="container">
        <h1>Peliculas</h1>
        <div className="grid-peliculas">
          {peliculas.map((pelicula) => (
            <Pelicula key={pelicula.id} data={pelicula}></Pelicula>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Peliculas;
