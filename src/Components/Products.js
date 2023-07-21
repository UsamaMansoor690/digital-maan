import React from "react";
import "../css/products.css";

/* Images */
import socialMedia from "../images/social-media-icons.jpg";
import iphone from "../images/iphone.jpg";
import gallery from "../images/gallery.jpg";
import Card from "./Card";

export default function Products() {
  return (
    <div className="products">
      <p className="productsText">Create Amazing Digital Works</p>
      <h1 className="productsHeading">Creative Products</h1>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={socialMedia}
              price="$32"
              description="600 Flat Icons"
            />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card image={iphone} price="$58" description="Traveler UI Kits" />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={gallery}
              price="$37"
              description="40 iDevice Mockups"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
