import './App.css'
import React from 'react';
import { Landing } from './pages/landing/landing';


//AQUI SE CORREGIRÁ TODO SE AÑADIRAN ROOTERS PARA MOVERSE ENTRE PAGINAS
function App() {

  return (
    <main>
      <Landing/>
      <div class="inicio">
        <div class="fondo">
          <div class="carousel">
            <div class="slide"></div>
            <img class="logo" src='src/images/logo.png'></img>
            <div class="name"><p>Punto final a la violencia</p></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export {App}
