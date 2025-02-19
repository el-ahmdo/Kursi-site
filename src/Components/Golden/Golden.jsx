import React from "react";
import "./Golden.css";
import bash from "../Assets/images/Vector-3.png";
import plus from "../Assets/images/Vector-4.png";
import vid_cut from "../Assets/images/example-blogs.pylraey9.png.png";

const Golden = () => {
  return (
    <div className="golden-container">
      <div className="golden-heading ">
        <h1>Golden Opportunities in Every Ore</h1>
        <p>
          The fastest growing mining company in Nigeria helping millions of{" "}
          <br /> our customers all over the world by providing quality products.
        </p>
      </div>

      <div className="golden-content">
        <div className="content-left">
          <div className="content">
            <div className="gold-box">
              <div className="gold-box-head">
                <h2>Gold</h2>
                <img src={bash} alt="" />
              </div>

              <p>
                Experience unmatched purity and a legacy of prestige with our
                globally recognised precious opulence, offering you a tangible
                treasure to diversify your portfolio.
              </p>

              <div className="gold-box-footer">
                <h3>Sell</h3>
                <h3>Buy</h3>
              </div>
            </div>
            <div className="tantalite">
              <h3>Tantalite</h3>
              <img src={plus} alt="" srcset="" />
            </div>

            <div className="tantalite">
              <h3>Manganese</h3>
              <img src={plus} alt="" srcset="" />
            </div>

            <div className="tantalite">
              <h3>Lead</h3>
              <img src={plus} alt="" srcset="" />
            </div>
            <div className="tantalite">
              <h3>Tin</h3>
              <img src={plus} alt="" srcset="" />
            </div>

            <div className="see">
              <h3>See More</h3>
            </div>
          </div>
        </div>

        <div className="content-right">
          <div className="container2">
            <img src={vid_cut} alt="" srcset="" />

            <div className="box-container">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Golden;
