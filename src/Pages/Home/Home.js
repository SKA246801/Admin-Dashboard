import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Widget from '../../Components/Widget/Widget'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
        <div className='widgets'>
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earnings' />
          <Widget type='balance' />
        </div>
      </div>
    </div>
  )
}

export default Home
