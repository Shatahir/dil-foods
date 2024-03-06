import React from 'react'
import HomePage from '../Components/HomePage'
import NavBar from '../Components/Navigation/NavBar'
import Dashboard from '../Components/Dashboard'
import FoodCollection from '../Components/FoodCollection'
import Footer from '../Components/Footer'

function MainPage() {
  return (
    <div>
      <HomePage />
      <Dashboard />
      <FoodCollection />
      <Footer />
    </div>
  )
}

export default MainPage
