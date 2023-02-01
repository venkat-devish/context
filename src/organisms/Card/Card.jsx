import React from "react";
import "./Card.scss";

const Card = ({ image, title, price, fastDelivery, inStock }) => {
  return (
    <div className="card__container">
      <img src={image} alt="Image" />
      <div className="card__content">
        <p className="card__content-text">{title}</p>
        <p className="card__content-text">Rs. {price.split(".")[0]}</p>
      </div>
      <div>
        {fastDelivery ? <div>Fast Delivery</div> : <div>4 days delivery</div>}
        {/* {inStock===0>} */}
      </div>
      <div className="card__btn">
        <button className="card__btn card__btn-add">Add</button>
      </div>
    </div>
  );
};

export default Card;
