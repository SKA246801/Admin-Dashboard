import React from 'react'
import './Navbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import LanguageIcon from '@mui/icons-material/Language'
import SettingsIcon from '@mui/icons-material/Settings'
import SearchOutlineIcon from '@mui/icons-material/SearchOutlined'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined'
import FullscreenExitOutlined from '@mui/icons-material/FullscreenExitOutlined'
import ChatBubbleOutlineOutlined from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ListOutlined from '@mui/icons-material/ListOutlined'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navWrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <SearchOutlineIcon />
        </div>
        <div className='navRight'>
          <div className='iconContainer'>
            <LanguageIcon />
            English
          </div>
          <div className='iconContainer'>
            <DarkModeOutlined />
          </div>
          <div className='iconContainer'>
            <FullscreenExitOutlined />
          </div>
          <div className='iconContainer'>
            <NotificationsNoneIcon />
            <span className='iconBadge'>2</span>
          </div>
          <div className='iconContainer'>
            <ChatBubbleOutlineOutlined />
            <span className='iconBadge'>2</span>
          </div>
          <div className='iconContainer'>
            <ListOutlined />
          </div>
          <img className='avatar' src={require('../../Assets/Images/marvel.jpg')} alt='avatar' />
          <div className='iconContainer'>
            <SettingsIcon />
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Navbar
