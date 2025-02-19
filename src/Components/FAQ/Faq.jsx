import React from "react";
import arrow from "../Assets/images/Vector 2554.png";
import box from "../Assets/images/Vector-8.png";
import "./Faq.css";

const Faq = () => {
  return (
    <div>
      <div className="Faq_container">
        <div className="faq-left">
          <h3>FAQ’s</h3>
          <div className="faq_content">
            <h2>
              Frequently <br />
              Asked Questions{" "}
            </h2>
            <div className="input-container">
              <div className="Arrow__div">
                <img src={arrow} alt="" />
              </div>
              <input
                type="text"
                placeholder="Enter Question"
                className="input-field"
              />
            </div>
          </div>
        </div>
        <div className="faq__right">
          <div class="circle-container">
            <div class="circle circle1"></div>
            <div class="circle circle2"></div>
            <div class="circle circle3"></div>
            <div class="circle circle4"></div>
          </div>
        </div>
      </div>

      <div className="faq__cards">
        <div className="card card_one">
          <div className="rectangle_content">
            <div class="rectangle-container">
              <div class="rectangle rect1"></div>
              <div class="rectangle rect2"></div>
              <div class="rectangle rect3"></div>
            </div>
          </div>
          <h4>stories</h4>
          <h2>
            How can Artificial Intelligence and data science be used for better
            operations
          </h2>

          <img src={arrow} alt="" />
        </div>

        <div className="card card_two">
          <div className="circle_content">
            <div class="nested-shapes">
              <div class="inner-shape"></div>
              <div class="middle-shape"></div>
              <div class="outer-shape"></div>
            </div>
          </div>

          <h4>International</h4>
          <h2>
            How can Artificial Intelligence and data science be used for better
            operations
          </h2>
          <img src={arrow} alt="" />
        </div>

        <div className="card card_three">
          <div className="circle_content">
            <div class="stacked-rectangles">
              <div class="layer-one"></div>
              <div class="layer-two"></div>
              <div class="layer-three"></div>
            </div>
          </div>
          <h4>Local</h4>
          <h2>How much is a carat of gold?</h2>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
