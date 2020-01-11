import React from "react";
import ProjectTop from "./ProjectTop";

const House = props => {
  return (
    <div className="container">
      <ProjectTop></ProjectTop>
      <div className="block-container project-container">
        <div className="big-block project-block">
          <div className="info-box">
            <img id="house" src={require("../images/house.png")}></img>
            <div className="header project-header">
              <h1>RealEstate App</h1>
              <div className="app-buttons">
                <a
                  href="https://github.com/tonyli29/realEstateApp"
                  target="_blank"
                  className="button"
                >
                  Source Code
                </a>
                <a
                  href="https://tonylihouse.herokuapp.com/"
                  target="_blank"
                  className="button"
                >
                  Application
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project-info">
          <div className="project-title">
            <h1>Fullstack Real Estate App</h1>
          </div>
          <div className="project-info-grid">
            <div className="project-tools">
              <h2>Tools</h2>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>DjangoREST framework</li>
                <li>Python</li>
                <li>postgreSQL</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="project-description">
              <h2>Overview</h2>
              <p></p>
            </div>
            <div className="project-features">
              <h2>Features</h2>
              <ul>
                <li>Authentication</li>
                <li>Add/Delete Houses</li>
                <li>Google maps api</li>
                <li></li>
                <li>REST API</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
