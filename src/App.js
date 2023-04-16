import './App.css';
import React from 'react'
import Cadastro from "./pages/pageCadastro"
import Login from "./pages/pageLogin"
import Home from "./pages/pageHome"
import Indefinido from "./pages/pageIndefinido"
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"


function App() {

  return (
    <div className='App'>


<Router>
      <Routes>
        <Route path="/" element={<Cadastro/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/indefinido" element={<Indefinido/>}></Route>
      </Routes>
    </Router>

    </div>
    
  );
}

export default App;
