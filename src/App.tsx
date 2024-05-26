import './App.css'
import './index.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LandingPage from './Pages/landing-page/landing-page.tsx'

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
