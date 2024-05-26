import './App.css'
import './index.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LandingPage from './Pages/landing-page/landing-page.tsx'
import SignupPage from './Pages/sign-up-page/signup-page.tsx'
import LogInPage from './Pages/log-in-page/log-in-page.tsx'

function App() {
  return (
    <>
    <div className='m-0 p-0'>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/sign-up' element={<SignupPage />} />
          <Route path='/log-in' element={<LogInPage />} />
        </Routes>
      </Router>
    </div>
    
   
     
    </>
  )
}

export default App
