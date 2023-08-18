import './App.css'
import React from 'react';
import { Landing } from './pages/landing/landing';


//AQUI SE CORREGIRÁ TODO SE AÑADIRAN ROOTERS PARA MOVERSE ENTRE PAGINAS
function App() {

  return (
    <main>
      <Landing/>
      <div className="inicio">
        <div className="fondo">
          <div className="carousel">
            <div className="slide"></div>
            <img className="logo" src='src/images/logo.png'></img>
            <div className='cajitadenombres'>
              <div className="name1"><p>Punto final</p></div>
              <div className="name2"><p>a la violencia</p></div>
            </div>
            <img className="flechita" src='src/images/flechita.png'></img>
          </div>
        </div>
      </div>
    </main>
  )
}

export {App}
