import React from 'react'
import './Navbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import LanguageIcon from '@mui/icons-material/Language'
import SettingsIcon from '@mui/icons-material/Settings'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navWrapper'>
        <div className='navLeft'>
          <p>SKA246801</p>
        </div>
        <div className='navRight'>
          <div className='iconContainer'>
            <NotificationsNoneIcon fontSize='large' />
            <span className='iconBadge'>2</span>
          </div>
          <div className='iconContainer'>
            <LanguageIcon fontSize='large' />
            <span className='iconBadge'>2</span>
          </div>
          <div className='iconContainer'>
            <SettingsIcon fontSize='large' />
          </div>
          <img className='avatar' src={require('../../Assets/Images/marvel.jpg')} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
