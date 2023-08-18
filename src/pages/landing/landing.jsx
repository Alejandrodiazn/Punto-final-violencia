import './landing.css'
import React from 'react';
import Navbar from './components/NavBar/navbar.jsx'


//Aquí se añadira la estructura de nelly (recordar que esto no es HTML es JSX)
function Landing() {
return (
    <main>
        <Navbar/>
        {/* <div>
            <p>Hola soy la landing</p>
        </div> */}
        <div className="inicio">
        <div className="fondo">
          <div className="carousel">
            <div className="slide"></div>
            <img className="logo" src='src\pages\landing\images\logo.png'></img>
            <div className='cajitadenombres'>
              <div className="name1"><p>Punto final</p></div>
              <div className="name2"><p>a la violencia</p></div>
            </div>
            <img className="flechita" src='src\pages\landing\images\flechita.png'></img>
          </div>
        </div>
      </div>
    </main>
    )
}
export { Landing };
