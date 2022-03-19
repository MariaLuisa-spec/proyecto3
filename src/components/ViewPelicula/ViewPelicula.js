import { useParams } from "react-router-dom";
import "./ViewPelicula.css";
import { useState, useEffect } from "react";

function ViewPelicula() {
  const { id } = useParams();

  const [pelicula, setPelicula] = useState(undefined);

  useEffect(() => {
    fetch(`http://localhost:3000/json/${id}.json`)
      .then((response) => response.json())
      .then((data) => setPelicula(data));
  }, [id]);

  if (!pelicula) return null;

  return (
    <article id="pelicula">
      <div className="container">
        <h1 className="mb-3">
          <i className="fas fa-film"></i> {pelicula.titulo}
        </h1>

        <div className="wrapper flex">
          <img className="poster" src={pelicula.imagen} alt={pelicula.titulo} />
          <div className="info">
            <p className="calificacion">
              <i className="fas fa-star"></i> 7.5
            </p>
            <p className="sinopsis">{pelicula.sinopsis}</p>
            <p className="director">
              <span className="label">Director:</span>{" "}
              <a href="/">{pelicula.director}</a>
            </p>
            <p className="actores">
              <span className="label">Actores:</span>
            </p>
            <ul>
              {pelicula.actores.map((actor) => {
                return (
                  <li key={actor}>
                    <a href="/">{actor}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ViewPelicula;
