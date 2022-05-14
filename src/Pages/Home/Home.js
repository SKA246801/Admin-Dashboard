import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      {/* <Navbar /> */}
      <Sidebar />
      <div className='homeContainer'>Container</div>
    </div>
  )
}

export default Home
