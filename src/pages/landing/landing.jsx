import './landing.css'
import React from 'react';
import {Navbar} from './components/NavBar/navbar.jsx'


//Aquí se añadira la estructura de nelly (recordar que esto nos HTML es JSX)
function Landing() {
return (
    <main>
        <Navbar/>
        <div>
            <p>Hola soy la landing</p>
        </div>
    </main>
    )
}
export {Landing}