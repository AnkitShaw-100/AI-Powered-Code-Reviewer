import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Playground from './pages/Playground'
import Report from './pages/Report'
import Docs from './pages/Docs'
import Pricing from './pages/Pricing'
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/report" element={<Report />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  )
}

export default App
