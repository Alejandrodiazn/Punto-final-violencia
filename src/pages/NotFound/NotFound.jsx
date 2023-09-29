import "./NotFound.css";
import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return(
        <>
            <div className="inicio">
                <div className="fondo">
                    <div className="icono">
                        <div className="imageContainer">
                            <img 
                                className="iconoNotFound"
                                src="src\pages\NotFound\images\404_icon.png"/>
                        </div>
                    </div>
                    <div className="moradito">
                        <div className="texto">
                            <p>¡Oh no!<br/>Página no encontrada</p>
                        </div>
                        <button className="btn-regresar">
                                <Link className="link-regresar" to="/">
                                    Ir a inicio
                                </Link>
                            </button>
                    </div>
                </div>
            </div>
        </>
    )
}