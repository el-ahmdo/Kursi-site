import React from "react";
import "./ContactPage.css";
import Achievement from "../../Components/Achievement/Achievement";
import houseIcon from "../../Components/Assets/images/Housevector.png";
import phoneRing from "../../Components/Assets/images/phone-ring.png";
import envelope from "../../Components/Assets/images/envelope.png";
import curve from "../../Components/Assets/images/Frame 35.png";
const ContactPage = () => {
  return (
    <div>
      <section className="Contact-us-section-container">
        <h2 className="pageTitle">Contact Us</h2>
        <div className="Contact-us-section-conetent-conatiner">
          <div className="Contact-us-section-conetent-left">
            <div className="Contact-us-section-conetent-left-top">
              <h3>Contact Us</h3>
              <h2>Get In Touch With Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                adiqua minim veniam quis nostrud exercitation ullamco
              </p>
            </div>
            <div className="Contact-us-section-conetent-left-bottom">
              <div className="Contact-us-section-conetent-left-bottom-contact">
                <div className="contact-bottom-left">
                  <img src={houseIcon} alt="" />
                </div>
                <div className="contact-bottom-right">
                  <h3>Our Location</h3>
                  <p>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
                </div>
              </div>

              <div className="Contact-us-section-conetent-left-bottom-contact">
                <div className="contact-bottom-left">
                  <img src={phoneRing} alt="" />
                </div>
                <div className="contact-bottom-right">
                  <h3>Phone Number</h3>
                  <p>(+234)81 414 257 9980</p>
                </div>
              </div>

              <div className="Contact-us-section-conetent-left-bottom-contact">
                <div className="contact-bottom-left">
                  <img src={envelope} alt="" />
                </div>
                <div className="contact-bottom-right">
                  <h3>Email Address</h3>
                  <p>info@yourdomain.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}

          <div className="Contact-us-section-conetent-right">
            <div className="contact-us-Form-container">
              <form action="">
                <div>
                  <input
                    type="text"
                    className="contact_us_inputs"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="contact_us_inputs"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="contact_us_inputs"
                    placeholder="Your Phone"
                  />
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    className="contact_us_textArea"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="send_message_btn">Send Message</div>
              </form>
            </div>
            <img src={curve} alt="" srcset="" className="curve" />
          </div>
        </div>
      </section>
      <Achievement />
    </div>
  );
};

export default ContactPage;
