import React from 'react';
import '../styles/header.scss';

import logo from '../assets/logo.png'
import profile from '../assets/profile_photo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return <>
  <nav>
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    <div className="navOptions">
      <ul>
        <li>Home</li>
        <li>Categories</li>
      </ul>
      <div className="navProfile">
        <div className='headphones'>
          <FontAwesomeIcon icon={faHeadphones} />
        </div>
        <img src={profile} alt="profile" />
      </div>
    </div>
  </nav>
  </>
}

export default Header