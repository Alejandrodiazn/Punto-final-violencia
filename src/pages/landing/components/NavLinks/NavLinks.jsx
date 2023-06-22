import React from 'react'

import './NavLinks.css'
const NavLinks = props =>{
    //Cada NavLink redirige a una ruta que eligamos en to = "./x"
    return (
        <ul className='nav-links'>
            <li>
                <button><a>Inicio</a></button>
            </li>
            <li>
                <button><a>About us</a></button>
            </li>
            <li>
                <button><a>Contactanos</a></button>
            </li>
        </ul>
    )
};

export default NavLinks;