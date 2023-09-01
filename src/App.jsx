import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/landing/landing";
import { Conversation } from "./pages/conversation/Conversation";
import { HomeScreen } from "./pages/homescreen/homescreen";

//AQUI SE CORREGIRÁ TODO SE AÑADIRAN ROOTERS PARA MOVERSE ENTRE PAGINAS
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Landing />}/>
        <Route path="/Conversacion-1" element={<Conversation/>}/>
        <Route path="/HomeScreen" element={<HomeScreen/>}/>
      </Routes>
      
      
    </Router>
  );
}

export { App };
