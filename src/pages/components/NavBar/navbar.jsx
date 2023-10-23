import React, { useState } from 'react';
import './Navbar.css'; // Asegúrate de crear este archivo CSS para estilizar el componente

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button id="burger" className={`open-main-nav ${menuOpen ? 'is-open' : ''}`} onClick={toggleMenu}  >
        <span className="burger"></span>
      </button>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} id="main-nav">
        <ul>
          <li>
            <a href="#">Acerca de</a>
          </li>
          <li>
            <a href="#">Recursos</a>
          </li>
          <li>
            <a href="#">Ayuda</a>
          </li>
          <li>
            <img src="src\pages\components\NavBar\images\logo_cd.png" alt="Logo de Centro de Desarrollo" />
          </li>
        </ul>
      </nav>
	  </>
  );
};


export default Navbar;