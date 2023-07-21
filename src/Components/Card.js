import React from "react";

export default function Card(props) {
  return (
    <div className="product-card card1">
      <img className="product-image" src={props.image} alt="" />
      <p className="price">{props.price}</p>
      <p className="desc">{props.description}</p>
    </div>
  );
}
