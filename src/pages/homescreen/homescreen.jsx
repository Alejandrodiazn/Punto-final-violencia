import React, { useEffect } from 'react';
import StatusBar from './StatusBar';
import './homescreen.css';
import svgRecursos from './icons/recursos.svg'
import svgWunsup from './icons/wunsup.svg'
import svgSalir from './icons/Salir.svg'
import svgNosotros from './icons/nosotros.svg'
import svgFAQ from './icons/faq.svg'
import svgAyuda from './icons/ayuda.svg'

function HomeScreen() {
 
  // Hook para reloj
  useEffect(() => { 
    const updateTime = () => {
      const now = new Date();
      const timeElement = document.getElementById('time');
      if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString();
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000); // Actualizar cada segundo
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="box">
      <div className="statusBar">
        <StatusBar />
      </div>
        <h2>Homescreen</h2>
        {/* Real-time clock */}
        <div className="clock">
          <p id="time"></p>
        </div>
        <div className="buttons">
        <button>
          <div class="button-svg">
            <img src={svgWunsup} alt="icono de wunsup" />
            Wunsup
          </div>
        </button>
        <button>
          <div class="button-svg">
            <img src={svgRecursos} alt="Icono de recursos" />
            Recursos
          </div>
        </button>
        <button>
          <div class="button-svg">
            <img src={svgSalir} alt="Icono de salir" />
            Salir
          </div>
        </button>
        <button>
          <div class="button-svg">
            <img src={svgNosotros} alt="Icono de nosotros" />
            Nosotros
          </div>
        </button>
        <button>
          <div class="button-svg">
            <img src={svgFAQ} alt="Icono de FAQ" />
            FAQ
          </div>
        </button>
        <button>
          <div class="button-svg">
            <img src={svgAyuda} alt="Icono de ayuda" />
            Ayuda
          </div>
        </button>
        </div>
      </div>
    </div>
  );
}

export { HomeScreen };

