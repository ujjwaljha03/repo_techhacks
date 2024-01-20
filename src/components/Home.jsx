import React from 'react';
import Header from './Header';
import '../styles/home.scss';

import waves from '../assets/waves.png'
import img1 from '../assets/img1.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <Header />
      <section className="title">
        <h1> PRICE MATTERS </h1>
        <form className="search">
          <input type="text" placeholder='Type Your Product Name..' />
          <button><Link className='prod' to="/productdetails">Search</Link></button>
        </form>
      </section>
      <section className="popular">
        <div className="division">
          <div className="popularBeginStyle">
            <FontAwesomeIcon icon={faAnglesDown} />
          </div>
        <img src={waves} alt="waves" />
        </div>
        <div className="popularBegin">
          <h1>Recent Searches</h1>
          <div className="popularCards">
            <div className="iphone15pro">
              <img src={img1} alt="iphone" />
              <h2>Iphone 15 pro max</h2>
              <span>1TB</span>
              <span>|</span>
              <span>Titanium</span>
            </div>
          </div>
        </div>
          
      </section>

    </main>
  )
}

export default Home;