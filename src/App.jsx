import './App.css'
import React from 'react';
import { Landing } from './pages/landing/landing';


//AQUI SE CORREGIRÁ TODO SE AÑADIRAN ROOTERS PARA MOVERSE ENTRE PAGINAS
function App() {

  return (
    <>
      <Landing/>
      <div className="inicio">
        <div className="fondo">
          <div className="carousel">
            <div className="slide"></div>
            <img className="logo" src='src/images/logo.png'></img>
            <div className="name"><p>Punto final a</p></div>
            <div className="name2"><p>la violencia</p></div>
          </div>
        </div>
      </div>
    </>
  )
}

export {App}
