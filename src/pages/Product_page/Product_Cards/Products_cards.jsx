import React, { useContext } from "react";
import "./Products_cards.css";
import I from "../../../Components/Assets/images/Ivector.png";
import ex from "../../../Components/Assets/images/Xicon.png";
import arrow from "../../../Components/Assets/images/card-footer-icon.png";
import { Link, useNavigate } from "react-router-dom";
import { productsContext } from "../../../App";
const Products_cards = ({ background, text, id }) => {
  const navigate = useNavigate();
  const handleCardClick = (productId) => {
    navigate(`/Products/${productId}`); // Navigate to the details page with the product ID
  };
  return (
    <div
      className="product-card"
      style={{ backgroundImage: `url(${background})` }}
      onClick={() => handleCardClick(id)}
    >
      <div className="card-header">
        <div className="card-header-left">
          <div className="icon">
            <img src={I} alt="" />
          </div>
          <h3>{text}</h3>
        </div>
        <div className="card-header-right">
          <img src={ex} alt="" srcset="" />
        </div>
      </div>
      <div className="card-footer">
        <h4>Request Form</h4>
        <div className="card-footer-button">
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Products_cards;
