import React from "react";
import '../css/hero.css'
import '../css/navbar.css'

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="content">
          <h1 className="shopName">Maan Digital Shop</h1>
          <p className="heroText">
            Sell Your Digital Creative Products By MAAN
          </p>
          <input type="submit" value="Browser Products" className="hero-btn" />
        </div>
      </div>
      <div className="underHeroSection">
        <div className="users">
          <h1 className="number">5,000</h1>
          <p className="purpose">Happy Users</p>
        </div>
        <div className="heroProducts">
          <h1 className="number">45</h1>
          <p className="purpose">products</p>
        </div>
        <div className="subscribers">
          <h1 className="number">9,500</h1>
          <p className="purpose">Subscribers</p>
        </div>
      </div>
    </>
  );
}
