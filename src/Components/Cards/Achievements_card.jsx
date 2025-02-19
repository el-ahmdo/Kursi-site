import React, { useState } from "react";
import "./Achievements_card.css";
import icon from "../Assets/images/Vector-6.png";

const Achievements_card = ({ image, header, paragraph }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Define max length for preview
  const maxLength = 200;

  // If paragraph is longer than maxLength, show part of it with "..."
  const previewText =
    paragraph.length > maxLength
      ? paragraph.substring(0, maxLength) + "..."
      : paragraph;

  return (
    <div className="card-container">
      <div className="left-card">
        <img src={image} alt="Achievement" />
      </div>
      <div className="right-card">
        <div className="right-content">
          <h2>{header}</h2>
          <p>{isExpanded ? paragraph : previewText}</p>
          {paragraph.length > maxLength && (
            <div
              className="read-more"
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ cursor: "pointer", color: "#364152" }}
            >
              {isExpanded ? "Show less" : "Read more"}
              <img src={icon} alt="Arrow" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Achievements_card;
