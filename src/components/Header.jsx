import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../IMG/logoBroHack.png';
import profile from '../IMG/goku--.jpg';
import '../styles/header.scss';
import {faHeadphones} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return <>
    <nav>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <main className='nav_part'>
        <Link className='links' to="/">Home</Link>
        <Link className='links' to="/services">Categories</Link>
      </main>
      <div className="profile">
        <FontAwesomeIcon icon={faHeadphones} className='feedback-icon'/>
        <img src={profile} alt="user"></img>
      </div>
    </nav>
  </>
}

export default Header