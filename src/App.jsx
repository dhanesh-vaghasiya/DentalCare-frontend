import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Learn from './pages/Learn'
import Services from './pages/Services'
import Team from './pages/Team'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App
