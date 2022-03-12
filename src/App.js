import "./App.css";
import Peliculas from "./components/Peliculas/Peliculas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from "./components/template/Template";
import ViewPelicula from "./components/ViewPelicula/ViewPelicula";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Peliculas />}></Route>
          <Route path="peliculas" element={<Peliculas />}></Route>
          <Route path="pelicula/:id" element={<ViewPelicula />}></Route>
          <Route path="series" element={<></>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
