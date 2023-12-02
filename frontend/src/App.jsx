import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React,{ Component } from 'react';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';

{/* <script src="https://kit.fontawesome.com/b90099deb6.js" crossorigin="anonymous"></script> */}
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Home from './pages/home'
import Ambulance from './pages/ambulance';
import Navbar from './components/navbar';
import Chatbot from './pages/chatbot';
import LobbyScreen from './screens/Lobby';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">

      <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/ambulance" element={<Ambulance />} />
                <Route path="/mental_health" element={<Chatbot />} />
                <Route path="/consult" element={<LobbyScreen />} />

                
            </Routes>
        </Router>
    </div>

    <>
      <h1>GAME STARTS NNNNNNNNNNNNNNNNNNN</h1>
    </>

  )
}

export default App
