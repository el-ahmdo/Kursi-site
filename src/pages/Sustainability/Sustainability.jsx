import React from "react";
import "./Sustainability.css";
import { Outlet, useNavigate } from "react-router-dom";
import susNewsImg from "../../Components/Assets/images/content-focused.VdVRy80q.webp.png";
const Sustainability = () => {
  const navigate = useNavigate();

  const handleCardClick = (page) => {
    navigate(`/sustainability/${page}`); // Navigate to the details page
  };

  return (
    <div className="sustainability_container">
      <h2>SUSTAINABILITY</h2>
      <div className="sustainability_nav">
        <div onClick={() => navigate("/sustainability")}>Home</div>
        <div onClick={() => handleCardClick("environment")}>Environment</div>
        <div onClick={() => handleCardClick("social")}>Social</div>
        <div onClick={() => handleCardClick("government")}>Government</div>
      </div>

      <Outlet />

      <div className="sustainability_news_section1">
        <h2 className="containerNews-heading">Latest News and Updates</h2>

        {/* <div className="newsHead">
          <div className="news-head-container">
            <h3>Latest News Around the Country</h3>
            <h2>
              Tinubu celebrates as Nigeria sells gold, injects $5m into economy
            </h2>
            <p>
              Nigeria has recorded a commercial transaction of raw gold sales at
              the London Bullion Market Association, the Minister of Solid
              Minerals Development, Dele Alake disclosed on Sunday.
            </p>
          </div>
        </div> */}

        <div className="sustainability_news_section_cards">
          <div className="suscard">
            <img src={susNewsImg} alt="" />
            <div className="card_text_con">
              <h2>State of the Art Infrastructure</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type{" "}
              </p>
            </div>
          </div>
          <div className="suscard">
            <img src={susNewsImg} alt="" />
            <div className="card_text_con">
              <h2>AI and Artificial Intelligence in Mining</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
          <div className="suscard">
            <img src={susNewsImg} alt="" />
            <div className="card_text_con">
              <h2>
                Nigerian minister presents gold bar to Tinubu, says transaction
                will boost foreign reserves
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
