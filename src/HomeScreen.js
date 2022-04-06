import React from 'react'
import './HomeScreen.css'
import Navbar from './navbar'
import SearchSpace from './SearchSpace.js'

function HomeScreen() {
    
  return (
      <div className="HomeScreen" style={{height:"750px"}}>
      <Navbar/>
      <SearchSpace />
      </div>
  )
}

export default HomeScreen