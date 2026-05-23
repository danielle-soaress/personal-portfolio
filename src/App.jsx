import HomePage from './pages/Home/HomePage.jsx'
import PortifolioPage from './pages/PortifolioPage/PortifolioPage.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ReactLenis } from 'lenis/react'

function App() {
  return (
    <>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}/>
      <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/portifolio" element={<PortifolioPage/>} />
          </Routes>
      </Router>
    </>
  )
}

export default App;
