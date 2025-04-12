import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Resume from './pages/Resume'
import LinkedinComp from './pages/LinkedinComp'


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/linkedin-comparison" element={<LinkedinComp />} />
      </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App