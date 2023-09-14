import "./NotFound.css";
import React from "react";

export const NotFound = () => {
    return(
        <>
            <div className="inicio">
                <div className="fondo">
                    <div className="icono">
                        <img 
                            className="iconoNotFound"
                            src="src\pages\NotFound\images\404_icon.png"/>
                    </div>
                    <div className="moradito">
                        <div className="texto">
                            <p>¡Oh no!<br/>Página no encontrada</p>
                        </div>
                        <div className="boton">
                            <button className="regresar" type="button" onClick={"history.back();"}>Regresar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}