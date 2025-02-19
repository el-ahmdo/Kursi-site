import React from "react";
import "./Footer.css";
import Arrow from "../Assets/images/Vector-10.png";
import logo from "../Assets/images/Frame 1618872969.png";
import twitter from "../Assets/images/twitter.png";
import facebook from "../Assets/images/Facebook.png";
import instagram from "../Assets/images/instagram.png";
import linkdin from "../Assets/images/linkdin.png";
const Footer = () => {
  return (
    <div className="Footer_container">
      <div>
        <div className="headThing">
          <div>
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="footer_main">
          <div className="left">
            <div>
              <img src={logo} alt="" srcset="" />
            </div>
            <p>© Kursi Group 2024. All Rights Reserved.</p>
          </div>
          <div className="right">
            <div className="pages">
              <ul>
                <li>
                  <span> pages </span>
                </li>
                <li>Home</li>
                <li>About us</li>
                <li>products</li>
                <li> Company v1</li>
                <li> Company v2</li>
                <li> Company v3</li>
                <li> Other templates</li>
              </ul>
            </div>
            <div className="resources">
              <ul>
                <li>
                  <span> Resoources </span>
                </li>
                <li>FAQ'S</li>
                <li>Blog Categories</li>
                <li>Team Members</li>
                <li> Pricing Categories</li>
                <li> Pricing Single</li>
                <li>Careers Single</li>
              </ul>
            </div>
            <div className="utility">
              <ul>
                <li>
                  <span> Utility Pages </span>
                </li>
                <li>Style Guide</li>
                <li>Licenses</li>
                <li>Changelog</li>
                <li>404</li>
                <li> Passworde</li>
                <li>Careers Single</li>
              </ul>
            </div>
            <div className="newsletter">
              <div>
                <ul>
                  <li>
                    <span> Subscribe to Our Newsletter </span>
                  </li>
                  <li>
                    Join our newsletter to stay up to date on features and
                    releases.
                  </li>
                </ul>
              </div>
              <div className="Footer_input">
                <input type="text" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
              <ul>
                <li>
                  By subscribing you agree to with our Privacy Policy and
                  provide consent to receive updates from our company.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="links">
          <div className="link_left"> © Est 2024.</div>
          <div className="link_right">
            <div className="icons">
              <div>
                <img src={facebook} alt="" srcset="" />
              </div>
              <div>
                <img src={twitter} alt="" srcset="" />
              </div>
              <div>
                <img src={linkdin} alt="" srcset="" />
              </div>
              <div>
                <img src={instagram} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
