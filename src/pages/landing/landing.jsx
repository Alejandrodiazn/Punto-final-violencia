import "./Landing.css";
import React from "react";
import { Navbar } from "./components/NavBar/navbar.jsx";

//Aquí se añadira la estructura de nelly (recordar que esto nos HTML es JSX)
function Landing() {
  return (
    <>
      <Navbar />
      <div>
        <p>Hola soy la landing</p>
      </div>
    </>
  );
}
export { Landing };
