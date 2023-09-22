import React, { useEffect, useState } from 'react';
import StatusBar from './StatusBar';
import './homescreen.css';
import svgRecursos from './icons/recursos.svg'
import svgWunsup from './icons/wunsup.svg'
import svgSalir from './icons/Salir.svg'
import svgNosotros from './icons/nosotros.svg'
import svgFAQ from './icons/faq.svg'
import svgAyuda from './icons/ayuda.svg'

function HomeScreen() {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [temperature, setTemperature] = useState('');

  // Hook para reloj
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { hour: 'numeric', minute: 'numeric', hour12: true };
      const timeString = now.toLocaleTimeString(undefined, options).toLowerCase();
      setTime(timeString);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000); // Actualizar cada segundo
    return () => clearInterval(interval);
  }, []);

  // Hook para obtener la temperatura (asumiendo que tienes una función getTemperatureFromAPI)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reemplaza 'tu_api_de_temperatura' con la URL de tu API real
        const response = await fetch('tu_api_de_temperatura');
        const data = await response.json();
        // Supongamos que la temperatura se encuentra en la propiedad 'temperature' de la respuesta
        setTemperature(data.temperature);
      } catch (error) {
        console.error('Error al obtener la temperatura:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="box">
        <div className="statusBar">
          <StatusBar />
        </div>
        <h2>Homescreen</h2>
        <div className="clock">
          <p id="time">{time}</p>
          <p id="date">{date}</p>
          <p id="temperature">{temperature}&deg;C</p>
        </div>
        <div className="buttons">
          <button>
            <div className="button-svg">
              <img src={svgWunsup} alt="icono de wunsup" />
              Wunsup
            </div>
          </button>
          <button>
            <div className="button-svg">
              <img src={svgRecursos} alt="Icono de recursos" />
              Recursos
            </div>
          </button>
          <button>
            <div className="button-svg">
              <img src={svgSalir} alt="Icono de salir" />
              Salir
            </div>
          </button>
          <div className='quick-access'>
            <button>
              <div className="button-svg">
                <img src={svgNosotros} alt="Icono de nosotros" />
                Nosotros
              </div>
            </button>
            <button>
              <div className="button-svg">
                <img src={svgFAQ} alt="Icono de FAQ" />
                FAQ
              </div>
            </button>
            <button>
              <div className="button-svg">
                <img src={svgAyuda} alt="Icono de ayuda" />
                Ayuda
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { HomeScreen };

