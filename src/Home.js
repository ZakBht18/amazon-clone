import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          src='https://m.media-amazon.com/images/I/81UwfObBWFL.jpg'
          className='home__image'
          alt=''
        />
        <div className='home__row'>
          <Product
            id='14142'
            title='The lean startup: How Constant Innovation
             Creates Radically Successful Business'
            price={11.96}
            rating={3}
            image='https://images-na.ssl-images-amazon.com/images/I/51nzbA9IboL._SX330_BO1,204,203,200_.jpg'
          />
          <Product
            id='2424'
            title='Amazon Basics Stainless Steel Sauce Pan with Lid, 3-Quart'
            price={28.99}
            rating={4}
            image='https://m.media-amazon.com/images/I/411Z-Ts4G0L._AC_SL1000_.jpg'
          />
        </div>

        <div className='home__row'>
          <Product
            id='6877'
            title='Echo Dot (4th Gen) | Smart speaker| Twilight Blue'
            price={76.55}
            rating={5}
            image='https://m.media-amazon.com/images/I/71UCjudB1cL._AC_SL1000_.jpg'
          />
          <Product
            id='1013544'
            title='2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Silver'
            price={895.99}
            rating={5}
            image='https://m.media-amazon.com/images/I/815KnP2wjDS._AC_SL1500_.jpg'
          />
          <Product
            id='41479575'
            title='2021 Apple MacBook Pro 16-inch Silver'
            price={2416.55}
            rating={5}
            image='https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_SL1500_.jpg'
          />
        </div>
        <div className='home__row'>
          <Product
            id='145555'
            title='Sceptre Curved 30" 21:9 Gaming LED Monitor 2560x1080p UltraWide Ultra Slim HDMI DisplayPort Up to 85Hz MPRT 1ms FPS-RTS Build-in Speakers, Machine Black (C305W-2560UN)'
            price={520}
            rating={7}
            image='https://m.media-amazon.com/images/I/71bI0RQV0TL._AC_SL1500_.jpg'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
