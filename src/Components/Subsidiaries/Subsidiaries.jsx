import React, { useState } from "react";
import "./Subsidiaries.css";
import SubCard from "./Cards/SubCard";

const Subsidiaries = () => {
  const [expandedId, setExpandedId] = useState(null); // Track expanded card

  const subsidiaries = [
    {
      number: 1,
      header: "Kursi Investments",
      paragraph:
        "Is the backbone of the Kursi Group. The company has evolved over the years into one of the leading and most competitive Gold mining, processing and refining companies in Nigeria. ",
    },
    {
      number: 2,
      header: "Azhrah Jewels & Gems",
      paragraph: `Specialises in crafting exquisite jewellery using refined gold sourced directly from the operations of Kursi Investments Ltd, expertly combined with various precious gemstones. `,
    },
    {
      number: 3,
      header: "Kursi Ore",
      paragraph: `Kursi Ore Ltd is a dynamic force in the mining sector, specialising in the extraction, processing, and trading of metallic ores, including lithium and tin.`,
    },
    {
      number: 4,
      header: "Kursi Haixia Technology",
      paragraph: `Was incorporated into the Nigerian Corporate Affairs Commission in 2023, as a joint venture with Fujian Haixia Technology, one of the leading explosive manufacturing companies in the world. `,
    },
    {
      number: 5,
      header: "Kursi Trades & Services",
      paragraph: `Kursi Trades & Services Ltd serves as the commercial arm of the Kursi Group. Our diverse portfolio includes mineral and commodity trading, with a strong focus on off-taking from our production arms, Kursi Investments and Kursi Ore. `,
    },
    {
      number: 6,
      header: "Kursi Capital",
      paragraph: `The Kursi Capital Limited is designed to provide banking, asset management, financing & investment services. The company is managed by highly competent banking & financial professionals.`,
    },
  ];

  const handleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id); // Toggle expansion
  };

  return (
    <div className="subsidiaries_section">
      <h2>Kursi Group Subsidiaries</h2>

      <div className="SubCardContainer">
        {expandedId
          ? subsidiaries
              .filter((item) => item.number === expandedId) // Show only the expanded card
              .map((item) => (
                <SubCard
                  key={item.number}
                  paragraph={item.paragraph}
                  number={item.number}
                  header={item.header}
                  isExpanded={true} // Ensure it's expanded
                  onExpand={() => handleExpand(null)} // Clicking again collapses
                />
              ))
          : subsidiaries.map((item) => (
              <SubCard
                key={item.number}
                paragraph={item.paragraph}
                number={item.number}
                header={item.header}
                isExpanded={false}
                onExpand={() => handleExpand(item.number)}
              />
            ))}
      </div>

      {/* {expandedId && (
        <div className="subBtnCon">
          <button className="viewlessBtn" onClick={() => setExpandedId(null)}>
            View All
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Subsidiaries;
