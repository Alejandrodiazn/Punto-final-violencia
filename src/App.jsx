import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/landing/landing";
import { Conversation } from "./pages/conversation/Conversation";
import { HomeScreen } from "./pages/homescreen/homescreen";
import { NotFound } from "./pages/NotFound/NotFound";
//AQUI SE CORREGIRÁ TODO SE AÑADIRAN ROOTERS PARA MOVERSE ENTRE PAGINAS
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Landing />}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/Conversacion-1" element={<Conversation username={"Antonio Loquillo"}/>}/>
        <Route path="/HomeScreen" element={<HomeScreen/>}/>
      </Routes>
      
      
    </Router>
  );
}

export { App };
