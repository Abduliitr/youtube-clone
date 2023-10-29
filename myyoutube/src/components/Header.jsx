import React from 'react'
import { Link } from 'react-router-dom'

import youtubeLogo from '../assets/images/yt-logo.jpeg'
import youtubeLogoMobile from '../assets/images/yt-logo-mobile.png'
import profilePicture from '../assets/images/profile.png'
import search from '../assets/images/search.svg'
import upload from '../assets/images/upload.svg'
import notification from '../assets/images/notification.svg'

export default function Header() {
  return (
    <div className='position-sticky top-0 bg-light h-14 d-flex align-items-center justify-content-between'>
      <div id='logo' className='h-5 px-2'>
        <Link to="/">
          <img src={youtubeLogo} className='p-2 d-none d-md-block' width={150} height={45}/>
          <img src={youtubeLogoMobile} className='p-2 d-block d-md-none' width={80} height={55}/>
        </Link>
      </div>
      
      <div id='search-option' className='p-2 input-group justify-content-center'>
          <form className='w-50 d-flex search-form' method='GET'>
            <input type='search' className='form-control rounded-left search-box' placeholder='Search' />
            <button className='search-button p-2 px-3 bg-white'>
              <img src={search}/>
            </button>
          </form>
      </div>

      <div id='profile-functions' className='d-flex justify-content-space-around'>
        <img src={upload} className='p-2 mx-1 d-none d-md-block' width={40}></img>
        <img src={notification} className='p-2 mx-1 d-none d-md-block' width={40}></img>
        <img src={profilePicture} className='p-2 float-right' width={55} height={55}></img>
      </div>

    </div>
    
  )
}
