import React, { useState } from "react";
import "./News.css";
import newsImg from "../Assets/images/newsimg.png";
import icon from "../Assets/images/Vector-7.png";

const News = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;

  const text = [
    `Nigeria has recorded a commercial transaction of raw gold sales
    at the London Bullion Market Association, the Minister of Solid
    Minerals Development, Dele Alake disclosed on Sunday.`,
    `Nigeria has recorded a commercial transaction of raw gold sales
    at the London Bullion Market Association, the Minister of Solid
    Minerals Development, Dele Alake disclosed on Sunday.`,
  ];

  // Truncate text properly
  const previewText1 =
    text[0].length > maxLength
      ? text[0].substring(0, maxLength) + "..."
      : text[0];
  const previewText2 =
    text[1].length > maxLength
      ? text[1].substring(0, maxLength) + "..."
      : text[1];

  return (
    <div className="containerNews">
      <h2 className="containerNews-heading">Latest News and Updates</h2>

      <div className="newsHead">
        <div className="news-head-container">
          <h3>Latest News Around the Country</h3>
          <h2>
            Tinubu celebrates as Nigeria sells gold, injects $5m into economy
          </h2>
          <p>{text[0]}</p>
        </div>
      </div>

      <div className="news-cards">
        {/* Left Card */}
        <div className="leftcard">
          <div className="leftcard-image">
            <img src={newsImg} alt="News" />
          </div>
          <div className="leftcard-text">
            <div className="Textcon">
              <div className="gold">Gold</div>
              <h2>
                Tinubu celebrates as Nigeria sells gold, <br /> injects $5m into
                economy
              </h2>
              <p>{isExpanded ? text[0] : previewText1}</p>
            </div>
            {text[0].length > maxLength && (
              <p
                className="read-more2"
                onClick={() => setIsExpanded(!isExpanded)}
                style={{ cursor: "pointer", color: "#fff" }}
              >
                {isExpanded ? "Show less" : "Read more"}
                <img src={icon} alt="Arrow" style={{ marginLeft: "5px" }} />
              </p>
            )}
          </div>
        </div>

        {/* Right Card */}
        <div className="rightcard">
          <div className="rightcard-image">
            <img src={newsImg} alt="News" />
          </div>
          <div className="rightcard-text">
            <div className="Textcon">
              <div className="gold">Gold</div>
              <h2>
                Tinubu celebrates as Nigeria sells gold, <br /> injects $5m into
                economy
              </h2>
              <p>{isExpanded ? text[1] : previewText1}</p>
            </div>
            {text[1].length > maxLength && (
              <p
                className="read-more2"
                onClick={() => setIsExpanded(!isExpanded)}
                style={{ cursor: "pointer", color: "#ffffff" }}
              >
                {isExpanded ? "Show less" : "Read more"}
                <img src={icon} alt="Arrow" style={{ marginLeft: "5px" }} />
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="morebutton">
        <div className="viewmoreBtn">View more</div>
      </div>
    </div>
  );
};

export default News;
