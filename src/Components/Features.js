import React from "react";
import '../css/features.css'

/* Svg Image */
import feature6 from '../images/features6.svg'

/* Icons */
import {LuSettings} from 'react-icons/lu'
import {LuShieldCheck} from 'react-icons/lu'
import {LuDollarSign} from 'react-icons/lu'
import {AiOutlineCloudDownload} from 'react-icons/ai'

export default function Features() {
  return (
    <div className="features">
      <p className="text">
        All <span>THE BEST</span> features
      </p>
      <p className="someText">
        Excepteur sint occaecat cupidatat non proident, <br />
        sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card-container">
              <div className="icon">
                <LuSettings size={50} color="#913bff" />
              </div>

              <h4 className="cardHeader">Great Support</h4>
              <p className="cardText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card-container">
              <div className="icon">
                <AiOutlineCloudDownload size={50} color="#913bff" />
              </div>

              <h4 className="cardHeader">Free Updates</h4>
              <p className="cardText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card-container">
              <div className="icon">
                <LuShieldCheck size={50} color="#913bff" />
              </div>

              <h4 className="cardHeader">100% Secured Payment Gateway</h4>
              <p className="cardText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card-container">
              <div className="icon">
                <LuDollarSign size={50} color="#913bff" />
              </div>
              <h4 className="cardHeader">30 Days Money Back</h4>
              <p className="cardText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
        </div>

        <div className="row underFeature">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="left">
              <p className="simpleText">One-stop Solution</p>
              <h1 className="headingText">Show Your Portfolio</h1>
              <p className="anotherText">
                Donec vel dapibus massa. Nulla gravida euismod lorem, tempus
                hendrerit est porta eu. Aenean tortor enim, cursus eget euismod
                vel, euismod in eros.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img className="svgImage" src={feature6} alt="svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
