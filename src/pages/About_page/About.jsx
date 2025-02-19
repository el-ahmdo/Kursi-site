import React from "react";
import "./About.css";
import About_Hero from "../../Components/About_hero/About_Hero";
import SubCards from "../../Components/About-us-subsidiaries/SubCards";
import Gala from "../../Components/Gala/Gala";
const About = () => {
  const subsidiaries = [
    {
      number: 1,
      header: "Kursi Investments",
      paragraph: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Suspendisse varius. `,
    },
    {
      number: 2,
      header: "Azhrah Jewels & Gems",
      paragraph: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Suspendisse varius. `,
    },
    {
      number: 3,
      header: "Kursi Ore",
      paragraph: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Suspendisse varius. `,
    },
    {
      number: 4,
      header: "Kursi Haixia Technology",
      paragraph: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Suspendisse varius. `,
    },
    {
      number: 5,
      header: "Kursi Trades & Services",
      paragraph: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Suspendisse varius. `,
    },
    {
      number: 6,
      header: "Kursi Capital",
      paragraph: `Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Suspendisse varius. `,
    },
  ];
  return (
    <>
      <About_Hero />
      <div className="subsidiaries__section">
        <div className="subsidiaries__section_head">
          <h2>Kursi Group Subsidiaries</h2>
          <p>You’ll get access to our ever-expanding variety of products.</p>
        </div>

        <div className="subsidiaries__section_cards">
          {subsidiaries.map((item) => (
            <SubCards
              key={item.number}
              number={item.number}
              header={item.header}
              paragraph={item.paragraph}
            />
          ))}
        </div>
      </div>
      <Gala />
    </>
  );
};

export default About;
