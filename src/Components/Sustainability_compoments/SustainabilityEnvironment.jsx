import React from "react";
import "../Sustainability_compoments/SustainabilityEnvironment.css";
import EnvImage from "../Assets/images/content-focused.VdVRy80q.webp-2.png"; // Replace with actual image
import CurvedArrow from "../Assets/images/SVG.png";
const SustainabilityEnvironment = (props) => {
  return (
    <div>
      <div className="sustainability_environment">
        {/* Left Section */}
        <div className="sustainability_environment_left">
          <div className="sustainability_topic">
            <img src={CurvedArrow} alt="" srcset="" />
            <h3>{props.text}</h3>
          </div>
          <p>
            At Kursi we are committed to responsible environmental stewardship.
            Mining impacts land, water, and surrounding ecosystems, and we work
            proactively to minimise these effects. Our environmental management
            systems help us identify and manage risks while meeting regulatory
            and voluntary commitments.
          </p>{" "}
          <br />
          <p> We aim for zero environmental incidents and focus on:</p> <br />
          <p>
            Efficient water and energy use <br /> Reducing emissions <br />{" "}
            Protecting biodiversity <br /> Responsible materials management{" "}
            <br /> Addressing climate risks <br />
            Integrating environmental care into mine closures
          </p>
        </div>
        {/* Right Section */}
        <div className="sustainability_environment_right">
          <img src={EnvImage} alt="Environmental Sustainability" />
        </div>
      </div>

      {/* card section */}
      <div className="sustainability_environment_cardSection">
        <div className="sustainability_environment_card milk">
          <img
            className="sustainability_environment_card_image"
            src={EnvImage}
          />{" "}
          <h4>Water</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="sustainability_environment_card green">
          {" "}
          <img
            className="sustainability_environment_card_image"
            src={EnvImage}
          />{" "}
          <h4>Energy & Climate Change</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="sustainability_environment_card purple">
          {" "}
          <img
            className="sustainability_environment_card_image"
            src={EnvImage}
          />{" "}
          <h4>Tailings & Waste</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="sustainability_environment_card grey">
          {" "}
          <img
            className="sustainability_environment_card_image"
            src={EnvImage}
          />
          <h4>Ensuring Integrated Closure</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityEnvironment;
