import React from "react";
import "./About_Hero.css";
import icon from "../Assets/images/Vector-7.png";
import placeholder from "../Assets/images/Ellipse 3927.png";
import chairman from "../Assets/images/Untitled-1 1.png";
import company_his from "../Assets/images/CompanyHistory.png";
import charman from "../Assets/images/chairman.png";
import services from "../Assets/images/computers-generative-ai-contemporary-office 1.png";
import about_pic from "../Assets/images/About.png";
const About_Hero = () => {
  return (
    <>
      <div className="about">
        <div className="About_hero">
          <div className="About-hero-left">
            <div className="About-hero-left-head">
              <div className="About-hero-left-head-text">
                <span>
                  Management Team <br />
                </span>
                <p>
                  We currently employ over 2,500 workers made up of diverse
                  nationalities and skills. Our system by design is built{" "}
                </p>
              </div>
              <div className="About-hero-left-head-btn">
                <div className="div">
                  <p>Meet the team</p>
                  <img src={icon} alt="" srcset="" />
                </div>
              </div>
            </div>
            {/* end of text side head */}
            <div className="bord_chairman">
              <div className="bord_chairman-left">
                <div className="chariman_pic">
                  <img src={charman} alt="" />
                </div>
              </div>
              <div className="bord_chairman-right">
                <div>
                  <span>Amb. Abdulfatah Yahaya Seriki</span>
                  <br />
                  <h2>Board Chairman/CEO</h2>
                </div>
              </div>
            </div>
            <div className="directors_box">
              <div className=" director-card">
                <div className="directors-img">
                  <img src={placeholder} alt="" srcset="" />
                </div>
                <h2>Mrs Fatimah Abdulfatai</h2>
                <h1>Director</h1>
              </div>
              <div className=" director-card">
                <div className="directors-img">
                  <img src={placeholder} alt="" srcset="" />
                </div>
                <h2>Mrs Fatimah Abdulfatai</h2>
                <h1>Director</h1>
              </div>
              <div className=" director-card">
                <div className="directors-img">
                  <img src={placeholder} alt="" srcset="" />
                </div>
                <h2>Mrs Fatimah Abdulfatai</h2>
                <h1>Director</h1>
              </div>
            </div>
          </div>
          {/* end of left side */}
          <div className="About-hero-right">
            <div>
              {" "}
              <img src={chairman} alt="" srcset="" />
            </div>
          </div>
        </div>
        {/* end of hero section  */}
        <div className="About-texts">
          Kursi Group, is a Nigerian-based Mining, Mineral processing and
          trading company. The company was incorporated in 2005 and has since
          grown to become one of Nigeria’s biggest and most reliable mining and
          trading company. The head office is located in Abuja, with mining,
          operational and processing sites spread across 22 of the 36 states in
          Nigeria.
        </div>
        {/* endof texts section */}

        <div className="company_history">
          <img src={company_his} alt="" srcset="" />
        </div>
        <div className="services">
          <img src={services} alt="" />
        </div>
        {/* end of images secton */}

        <div className="About_us_section">
          <div className="About_us_section_text">
            <h1>About Us</h1>
            <p>
              Kursi holds the titles for some of the most viable mineral assets
              in Nigeria, with combined mineral resources and reserve estimation
              of over 100 billion us dollars. We mine, process and trade on base
              metals, precious stones and rare earth minerals. We supply to
              off-takers, manufacturers and end-users in the global value chain.
              Our Gold mining and processing lines have the capacity for 8500
              tons of ore per day, with optimal grade recovery rate. We also
              lead the Nigerian market in the mining and trading of Lithium,
              Lead, Zinc, Tin, Columbite, Tantalite, Monoxide, Manganese,
              Wolframite, Graphite and Fluorite.
            </p>
            <div className="our-products-button">Our Products</div>
          </div>
          <div className="About_us_section_image">
            <img src={about_pic} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About_Hero;
