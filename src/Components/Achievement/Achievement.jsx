import React from "react";
import "./Achievements.css";
import pic1 from "../Assets/images/cash.png";
import pic2 from "../Assets/images/62a0d08b38d0a055f41b47d7_pawel-czerwinski-jkwWCG6wYcI-unsplash-p-500.jpeg.png";
import pic3 from "../Assets/images/pic3.png";
import Cards from "../Cards/Achievements_card";

const Achievement = () => {
  return (
    <div className="Achievement-container">
      <div className="highlights">
        <h2>Key Highlights & Achievements</h2>
        <div className="Achievements-div">
          <p>Step into the future with Kursi Group </p>
          <button>view all</button>
        </div>
      </div>
      <div className="cards-container">
        <Cards
          image={pic1}
          header={"The Yahaya Seriki Foundation"}
          paragraph={`At Kursi, we're all about giving back! Big shoutout to our founder, Amb AbdulFatai Yahaya Seriki Gambari MFR, for spearheading the innovative "Cash Boost Initiative." This program is set to inject N250 million in cash grants to uplift entrepreneurs, small businesses, youth, men, and women in Kwara State. Let's create a ripple effect of positive change!`}
        />
        <Cards
          image={pic2}
          header={"The Significance of Gold"}
          paragraph={`Over the years, we've delved into the meticulous process that transforms raw gold into these gleaming bars of timeless value. Gold isn't just a precious metal; it's a fundamental asset that transcends borders and generations.
            Its significance spans from traditional wealth preservation to cutting-edge technology. As we navigate an ever-changing landscape, gold stands as a symbol of stability and an embodiment of our unwavering commitment to excellence.`}
        />

        <Cards
          image={pic3}
          header={"The Yahaya Seriki Foundation Empowerment Pogram"}
          paragraph={`Faces and Moments from the Yahaya Seriki Foundation Empowerment Program.`}
        />

        <Cards
          image={pic1}
          header={"The Yahaya Seriki Foundation"}
          paragraph={`At Kursi, we're all about giving back! Big shoutout to our founder, Amb AbdulFatai Yahaya Seriki Gambari MFR, for spearheading the innovative "Cash Boost Initiative." This program is set to inject N250 million in cash grants to uplift entrepreneurs, small businesses, youth, men, and women in Kwara State. Let's create a ripple effect of positive change!`}
        />
      </div>
    </div>
  );
};

export default Achievement;
