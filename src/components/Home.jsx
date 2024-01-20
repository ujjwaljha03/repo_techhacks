import React from 'react';
import Header from './Header';
import '../styles/home.scss';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <main>
      <Header />
      <section className="title">
        <h1> PRICE MATTERS </h1>
      </section>
      <section className="link-container"></section>
      <section className="search">
        <input type="text" className="searchBar" placeholder='Type Your Product Name' />
        <button> Search </button>
      </section>
      <section className="popular">
        <h1>Popular Searches</h1>
        <div className="popular-cards">
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
              <h3>Marshal</h3>
              <p>`Major IV Wireless Bluetooth On Ear Headphone with Mic $(Black)`</p>
              <button>Compare Price</button>
            </div>
            <div className="jbl">
            <img src="" alt="marshal"></img>
              <h3>JBL</h3>
              <img src="" alt="marshal"></img>
              <h3>Marshal</h3>
              <p>`Major IV Wireless Bluetooth On Ear Headphone with Mic $(Black)`</p>
              <button>Compare Price</button>
            </div>
          </div>
          <div className='Samsung Smart TV'>
            <img src="" alt="TV"></img>
            <h2>Samsung Smart TV</h2>
            <p>`1m 63cm $(65") Q70A QLED 4K Smart TV`</p>
            <button>Compare Price</button>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home;