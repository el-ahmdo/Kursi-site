import React from "react";
import background_image from "../Assets/images/Rectangle 2.png";
import sustainable_icon from "../Assets/images/sustaiableIcon.png"; // Corrected typo
import engaging_icon from "../Assets/images/money 1.png";
import ethical_icon from "../Assets/images/ethical.png";
import environment_icon from "../Assets/images/environment.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="grid-1">
          <div className="hero-heading">
            <h2>
              <span className="brown">
                The fastest <br /> growing{" "}
              </span>
              <br /> mining company in <br /> Nigeria
            </h2>
            <p>
              Founded in 2005 with offices in 22 states of Nigeria. We mine,
              process and trade on base metals, precious stones, and rare earth{" "}
              minerals...
            </p>
          </div>
          <div class="hero-text-buttons">
            <div class="hero-contact-us"> Contact Us </div>
            <div class="hero-faq">FAQ’s</div>
          </div>
        </div>

        <div className="grid-2">
          <img className="baground" src={background_image} alt="" />
        </div>

        <div className="grid-3">
          <div className="hero-items sustainable">
            <div className="sustainable-container">
              <div>
                <img src={sustainable_icon} alt="Sustainable Icon" />{" "}
              </div>
              <div>
                <h2>Sustainable</h2>
              </div>
              <div>
                <p>
                  Sustainable, responsible mining with <br /> eco-tech and
                  worker safety focus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-4">
          <div class="sustainable-container rest ">
            <img src={engaging_icon} alt="" />
            <h2>Engaging</h2>
            <p>
              Engage communities,
              <br /> empower locals, and invest in <br /> infrastructure
              development.
            </p>
          </div>

          <div class="sustainable-container rest ">
            <img src={ethical_icon} alt="" />
            <h2>Ethical Practices</h2>
            <p>
              Ethical supply chain, traceable gold, combat illegal mining
              activities.
            </p>
          </div>

          <div class="sustainable-container rest ">
            <img src={environment_icon} alt="" />
            <h2>Environment Friendly</h2>
            <p>
              Preserve environment, protect biodiversity, restore ecosystems,
              and practice land rehabilitation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
