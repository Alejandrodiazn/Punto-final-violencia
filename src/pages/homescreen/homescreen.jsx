import React, { useEffect } from 'react';
import StatusBar from './StatusBar';
import './homescreen.css';


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
      <div className="statusBar"> <StatusBar /> </div>
      
        <h2>MANSPLAINING</h2>
        {/* Real-time clock */}
        <div className="clock">
          <p id="time"></p>
        </div>

        <div className="buttons">
        <button>Wunsup</button>
        <button>Recursos</button>
        <button>Salir</button>
        <button>Nosotros</button>
        <button>FAQ</button>
        <button>Ayuda</button>
        </div>
      </div>
    </div>
  );
}

export { HomeScreen };

