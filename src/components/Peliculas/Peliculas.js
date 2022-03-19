import "./Peliculas.css";
import Pelicula from "../Pelicula/Pelicula";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);

  const { user } = useContext(UserContext);
  const isUserLoggedIn = user ? true : false;
  console.log("isUserLoggedIn", isUserLoggedIn);

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
        {isUserLoggedIn ? (
          <button className="btn btn-dark agregar-pelicula">
            Agregar pelicula
          </button>
        ) : null}
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
