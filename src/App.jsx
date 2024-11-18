import Home from './components/home/Home.jsx'
import PortifolioPage from './components/portifolioPage/PortifolioPage.jsx'


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/portifolio" element={<PortifolioPage/>} />
        </Routes>
    </Router>
  )
}

export default App;
