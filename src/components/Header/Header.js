import './Header.css';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';

function Header() {

  const [menuOpened, setMenuOpened] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpened(!menuOpened);
  }

  return (
    <header>
      <div className="container flex justify-space-between align-center">
        <a href="#" className="logo">Movies DB</a>
        <Navigation></Navigation>
        <button className="btn btn-menu-responsive" onClick={handleOpenMenu}><i className="fa-solid fa-bars"></i></button>
      </div>
      <div className={ menuOpened ? 'menu-responsive open' : 'menu-responsive' }>
        <ul className='flex direction-column'>
          {/* mover esto a un componente que se reutilice en el menú normal y el menú mobile */}
          <li><a href="#">Peliculas</a></li>
          <li><a href="#">Series</a></li>
          <li><a href="#">Premios</a></li>
          <li><a href="#">Actores</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;