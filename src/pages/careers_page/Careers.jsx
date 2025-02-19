import React from "react";
import "./Careers.css";
import searchIcon from "../../Components/Assets/images/SearchIcon.png";
import teamsImage from "../../Components/Assets/images/Teams_3_copy.jpg@2x.png";
import jobCategoriesImg from "../../Components/Assets/images/job-categories-900x600.jpg.png";
import locationsImg from "../../Components/Assets/images/Location_copy.jpg.png";
const Careers = () => {
  return (
    <div>
      <section class="find-jobs-container">
        <div class="find-jobs-content">
          {/* <!-- Left Side --> */}
          <div class="find-jobs-left">
            <h2>Find Jobs</h2>

            <input
              type="text"
              placeholder="Search for jobs by title or keyword"
            />
          </div>

          {/* <!-- Right Side --> */}
          <div class="find-jobs-right">
            <input type="text" placeholder="Location" />
            <button class="search-button">
              <img src={searchIcon} alt="" srcset="" />
            </button>
          </div>
        </div>
      </section>

      <section className="job-cards-section-container">
        <div className="job-cards-container">
          <div className="jobcard">
            <div>
              <h3>Part-Time Jobs</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
            </div>
            <div className="viewJobes">
              <h2>View open jobs</h2>
            </div>
          </div>
          <div className="jobcard">
            <div>
              <h3>Part-Time Jobs</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
            </div>
            <div className="viewJobes">
              <h2>View open jobs</h2>
            </div>
          </div>
          <div className="jobcard">
            <div>
              <h3>Part-Time Jobs</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
            </div>
            <div className="viewJobes">
              <h2>View open jobs</h2>
            </div>
          </div>
        </div>
      </section>

      <section class="Job-opportunities-section">
        <h2>Explore opportunities</h2>
        <div className="Job-opportunities-cards-container">
          {/* <!-- Card 1 --> */}
          <div className="job-card">
            <div>
              <img src={teamsImage} alt="Job Image" />
            </div>{" "}
            <div className="job_content">
              <div>
                <h3>Teams</h3>
                <p className="job-description">
                  Get to know Kursi’s teams, from Kursi Gold to other
                  subsidiaries.
                </p>
              </div>

              <p className="see_all">See all teams</p>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="job-card">
            <div>
              <img src={jobCategoriesImg} alt="Job Image" />
            </div>
            <div className="job_content">
              <div>
                <h3>Job Categories</h3>
                <p class="job-description">
                  Let us find the right job for you at Kursi.{" "}
                </p>
              </div>

              <p className="see_all">See all job categories</p>
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="job-card">
            <div>
              <img src={locationsImg} alt="Job Image" />
            </div>
            <div className="job_content">
              <div>
                <h3>Locations</h3>
                <p class="job-description">
                  View Kursi’s office locations across the country.
                </p>
              </div>
              <p className="see_all">See all locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* build a future sectiion  */}
      <section className="build_future_section">
        <div className="build_future_content">
          <h2>Come build the future with us</h2>
          <p>
            Our mission is to be a customer-centric company. This is what unites
            Kursi across teams and geographies as we are all striving to delight
            our customers and make their lives easier, one innovative product,
            service, and idea at a time.
          </p>
          <div className="Learn-more">
            <h2>Learn about working at Kursi</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
