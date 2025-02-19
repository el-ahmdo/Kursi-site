import React, { useContext } from "react";
import "./Generalinfo.css";
import { productsContext } from "../../App";
import { useParams } from "react-router-dom";
import star from "../../Components/Assets/images/star.png";
const Generalinfo = () => {
  const products = useContext(productsContext);
  const { productId } = useParams();
  const specificProduct = products.find(
    (product) => product.id === Number(productId)
  );
  return (
    <div className="General_container">
      <div className="product_image">
        <h2> {specificProduct.product}</h2>
        <div
          className="product_image_con"
          style={{ backgroundImage: `url(${specificProduct.background})` }}
        ></div>
      </div>
      <div className="information">
        <h2> General Info</h2>
        <div className="product_info_con">
          <img src={star} alt="" />

          <p>
            Gold is a precious metal that has been valued for its beauty,
            rarity, and durability for thousands of years. It is highly
            malleable, resistant to tarnish, and is often used in jewellery,
            electronics, and as a form of currency. Gold is also a symbol of
            wealth and status and is traded globally as a commodity. Its
            chemical symbol is Au, and it has a distinctive yellow colour that
            doesn't corrode or rust, making it ideal for long-lasting
            applications
          </p>
        </div>
      </div>
    </div>
  );
};

export default Generalinfo;
