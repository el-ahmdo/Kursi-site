import React from "react";
import "./SustainabilityHome.css";
import HomeCards from "../Assets/images/Rectangle 4504.png";
const SustainabilityHome = () => {
  const cards = [
    {
      id: 1,
      title: "Environment",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: HomeCards, // Replace with actual image path
    },
    {
      id: 2,
      title: "Social",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: HomeCards, // Replace with actual image path
    },
    {
      id: 3,
      title: "Governance",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: HomeCards, // Replace with actual image path
    },
  ];

  return (
    <div className="homeCards_container">
      {cards.map((card) => (
        <div
          key={card.id}
          className="homeCards"
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div className="homeCards_content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SustainabilityHome;
