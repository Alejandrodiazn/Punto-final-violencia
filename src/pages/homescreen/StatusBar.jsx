// StatusBar.jsx

import React from 'react';
import './statusbar.css';

function StatusBar() {
  return (
    <div className="status-bar">
      <div className="signal"></div>
      <div className="front-camera"></div> 
      <div className="battery">
        <div className="battery-icon"></div>
        <div className="battery-percentage">75%</div>
      </div>
    </div>
  );
}

export default StatusBar;
