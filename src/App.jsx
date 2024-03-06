import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import HomePage from './Components/HomePage'
import MainPage from './Page/MainPage'
import NavBar from './Components/Navigation/NavBar'
import FoodCollection from './Components/FoodCollection'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/foodcollection' element={<FoodCollection />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </>
  )
}

export default App
