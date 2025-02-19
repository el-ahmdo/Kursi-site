import React from "react";
import "./NewsPage.css";
import susNewsImg from "../../Components/Assets/images/content-focused.VdVRy80q.webp.png";
import Golden from "../../Components/Golden/Golden";
import Achievement from "../../Components/Achievement/Achievement";

const NewsPage = () => {
  return (
    <div className="News_page_container">
      <h2 className="page_heading">News & Media</h2>

      <div className="sustainability_news_section">
        <h2 className="containerNews-heading"> News and Updates</h2>

        <div className="newsHead">
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
        </div>

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

      <Golden />
      <Achievement />
    </div>
  );
};

export default NewsPage;
