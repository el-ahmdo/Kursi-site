import React from "react";
import "./SubCard.css";
const SubCard = ({ number, header, paragraph, isExpanded, onExpand }) => {
  return (
    <div
      className={`Subcard_con ${isExpanded ? "expanded" : ""}`}
      onClick={onExpand}
    >
      <div className="number">{number}</div>
      <h3>{header}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default SubCard;
