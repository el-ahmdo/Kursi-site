import React, { useContext } from "react";
import "./ProductsDetails.css";
import { productsContext } from "../../App";
import { Outlet, useNavigate, useParams } from "react-router-dom";
const ProductDetails = () => {
  const products = useContext(productsContext);
  const { productId } = useParams();
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/Products/${productId}/Graph`); // Navigate to the details page with the product ID
  };

  return (
    <div className="product_details_container">
      <div className="details_nav">
        <div className="general_info">General Info</div>
        <div className="graph" onClick={() => handleCardClick()}>
          Graph
        </div>
      </div>

      <Outlet />

      <div className="requestform_section">
        <h1>Request Form</h1>

        <div className="request_form_container">
          <form action="" className="request_form">
            <input type="text" placeholder="Name / Company Name" />
            <input type="text" placeholder="Contact Number" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Quantity Request" />
          </form>
          <div className="submit_button">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
