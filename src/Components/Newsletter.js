import React from "react";
import "../css/newsletter.css";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1 className="newsText">
              Subscribe to our newsletter so you won’t miss our great premium
              wordpress themes or the other products and interesting things to
              share!
            </h1>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="form">
              <input
                type="email"
                name="email"
                className="news-input"
                placeholder="Enter Your Email"
              />
              <input type="submit" value="Subscribe" className="news-btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
