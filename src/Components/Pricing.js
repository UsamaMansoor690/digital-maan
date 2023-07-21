import React from "react";
import "../css/pricing.css";

export default function Pricing() {
  return (
    <div className="pricing">
      <p className="pricingHeading">
        <strong>SIMPLE</strong> PRICING
      </p>
      <p className="pricingText">
        At <strong>Maan</strong>, we take pride in offering innovative solutions{" "}
        <br />
        that empower businesses and individuals alike.
      </p>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="pricing-card-container">
              <p className="type">Standard</p>
              <p className="pkg-price">
                <sup>$</sup>0
              </p>
              <p className="offer">1 Domain</p>
              <p className="offer">1 Year Premium Support</p>
              <p className="offer">Team fundraising</p>
              <input type="button" value="Choose Plan" className="price-btn" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="pricing-card-container premium">
              <p className="type t">Premium</p>
              <p className="pkg-price">
                <sup className="sup">$</sup>40
              </p>
              <p className="offer">1 Domain</p>
              <p className="offer">1 Year Premium Support</p>
              <p className="offer">Team fundraising</p>
              <input
                type="button"
                value="Choose Plan"
                className="price-btn btn2"
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="pricing-card-container">
              <p className="type">Standard</p>
              <p className="pkg-price">
                <sup className="sup">$</sup>28
              </p>
              <p className="offer">1 Domain</p>
              <p className="offer">1 Year Premium Support</p>
              <p className="offer">Team fundraising</p>
              <input type="button" value="Choose Plan" className="price-btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
