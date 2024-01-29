import React from 'react'
import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { Hero } from './components/Hero/Hero'

function App() {
  return (
    <>
      <NavBar/>
      <div className='container'>
        <Hero/>
      </div>
    </>
  )
}

export default App
