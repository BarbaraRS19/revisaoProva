import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PaginaCEP from './pages/PaginaCEP'
import BuscaCachorrinho from './components/BuscaCachorrinho'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/busca-cep" element={<PaginaCEP/>}></Route>
        <Route path="/busca-cachorrinho" element={<BuscaCachorrinho/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
