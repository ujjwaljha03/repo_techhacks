import React from 'react';
import Header from './Header';
import '../styles/home.scss';
import  Searchbar from '../Backened/Searchbar';

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
      </section>
      
      <Searchbar />

      <section className="popular">
        <h1>Popular Searches</h1>
        <div className="FirstPart">

          <div className="iphone15pro">
            <img src="" alt="iphone" />
            <h2>Iphone 15 pro max</h2>
            <span>1TB</span>
            <span>|</span>
            <span>Titanium</span>
            <button>Compare Price</button>
          </div>
          <div className="twoSmall">
            <div className="marshal">
              <img src="" alt="marshal"></img>
              <h2>Marshal</h2>
              <p>`Major IV Wireless Bluetooth On Ear Headphone with Mic $(Black)`</p>
              <button>Compare Price</button>
            </div>
            <div className="jbl">
              <img src="" alt="marshal"></img>
              <h3>JBL</h3>
              <img src="" alt="marshal"></img>
              <h2>Marshal</h2>
              <p>`Major IV Wireless Bluetooth On Ear Headphone with Mic $(Black)`</p>
              <button>Compare Price</button>
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


        <div className="secondPart">
          <div className="SonySpeakers">
            <img src="" alt="Sony Speakers"></img>
            <h2>Sony Speakers</h2>
            <p>`Sony Home Theatre speakers 1200 watt wired`</p>
            <button>Compare Prices</button>
          </div>
          <div className="jblheadphones">
            <img src="" alt="JBL Headphones"></img>
            <h2>JBL Headphones</h2>
            <p>`Major IV Wireless Bluetooth On Ear Headphone with Mic $(Black)`</p>
            <button>Compare Prices</button>
          </div>
        </div>
        <div className="thirdPart">
          <div className="mackbook">
            <img src="" alt="Mackbook"></img>
            <h2>`MACKBOOK AIR (M1)`</h2>
            <p>`Mackbook Air M1 with i 15 Generation Intel Chip,2Tb storage with GUIC supported.`</p>
            <button>Compare Prices</button>
          </div>
          <div className="marshalSpeaker">
            <img src="" alt="JMarshal Speaker"></img>
            <h2>Marshal</h2>
            <p>`Major IV $(Black) Wireless with 20 hrs battery Backup Speaker.`</p>
            <button>Compare Prices</button>
          </div>
          <div className="asus">
            <img src="" alt="Asus Phone"></img>
            <h2>Asus ROG 5</h2>
            <p>` Specila Edition Gaming Mobile Phone with best processor edition $(Black)`</p>
            <button>Compare Prices</button>
          </div>
          <div className="jblspeaker">
            <img src="" alt="JBL Speakers"></img>
            <h2>JBL Speaker</h2>
            <p>`High Quality BAse Sterio Sound Effect with JBl 2000 watt Speaker and 14hrs Battery Backup.`</p>
            <button>Compare Prices</button>
          </div>
        </div>
        <div className='explore_part'>
          <button>Explore More</button>
        </div>
      </section>
      <section className="content">
        <p>
          price matters on your every buying
          comparing is the best way to dash dash dash
          COMPARE NOW </p>
          <button></button>
      </section>
      <footer>@Copyright</footer>
    </main>
  )
}

export default Home;