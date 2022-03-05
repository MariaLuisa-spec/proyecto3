import './Navigation.css';

function Navigation() {
  return (
    <nav className="large-nav">
      <ul className='flex'>
        <li><a href="#">Peliculas</a></li>
        <li><a href="#">Series</a></li>
        <li><a href="#">Premios</a></li>
        <li><a href="#">Actores</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;