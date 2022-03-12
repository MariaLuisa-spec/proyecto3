import { useParams } from "react-router-dom";
import "./ViewPelicula.css";

function ViewPelicula() {
  const { id } = useParams();

  return <>{id}</>;
}

export default ViewPelicula;
