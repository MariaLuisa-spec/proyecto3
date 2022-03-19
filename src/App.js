import "./App.css";
import Peliculas from "./components/Peliculas/Peliculas";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Template from "./components/template/Template";
import ViewPelicula from "./components/ViewPelicula/ViewPelicula";
import Login from "./components/Login/Login";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route element={<Template />}>
            <Route path="/" element={<Navigate to="/peliculas" replace />} />
            <Route path="peliculas" element={<Peliculas />} />
            <Route path="pelicula/:id" element={<ViewPelicula />} />
            <Route path="series" element={<></>} />
            <Route path="login" element={<Login></Login>} />
          </Route>
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
