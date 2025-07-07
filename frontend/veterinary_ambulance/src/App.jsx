import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pets from './components/Pets/Pets'
import Vets from './components/Vets/Vets'
import Appointments from './components/Appointments/Appointments'
import Owners from './components/Owners/Owners'
import NavigationHeader from './components/NavigationHeader/NavigationHeader'

function App() {
  return (
    <>
      <Router>
        <NavigationHeader />
        <Routes>
          <Route path="/pets" element={<Pets />} />
          <Route path="/vets" element={<Vets />} />
          <Route path="/owners" element={<Owners />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
