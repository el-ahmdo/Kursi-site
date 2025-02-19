import React, { createContext, useContext } from "react";
import "./Product.css";
import Products_cards from "./Product_Cards/Products_cards";
import { productsContext } from "../../App";
import { Outlet } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

const Product = () => {
  const products = useContext(productsContext);

  //   const handleCardClick = (productId) => {
  //     navigate(`/product/${products.id}`); // Navigate to the details page with the product ID
  //   };
  return (
    <div className="product_page">
      <div className="products_cards_container">
        {products.map(({ id, background, product }) => (
          <Products_cards
            key={id}
            id={id}
            background={background}
            text={product}
          />
        ))}
        <Outlet />
      </div>
    </div>
  );
};

export default Product;
