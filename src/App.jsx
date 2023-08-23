import './App.css'
import React from 'react';
import Navbar from './components/Navbar/navbar.jsx';
import ChatsView from './components/ChatsView/ChatsView.jsx';
function App() {

  return (
    <main>
      <Navbar/>
      <ChatsView/>
    </main>

  )
}

export default App
