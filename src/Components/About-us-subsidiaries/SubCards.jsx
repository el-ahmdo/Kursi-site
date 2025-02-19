import React from "react";
import "./SubCards.css";
const SubCards = ({ number, header, paragraph }) => {
  return (
    <div className="SubCards_con">
      <div className="number">
        <div>{number}</div>
      </div>
      <h3>{header}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default SubCards;
