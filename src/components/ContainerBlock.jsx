import React, { useState } from "react";
import Block from "./block";
import Bottom from "./Bottom";
import Top from "./Top";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import resume from "../Resume/ResumePortfolio.pdf";

const ContainerBlock = props => {
  const [catagorie, setCatagorie] = useState([
    {
      catagorie: "Project",
      title: "AlgoV",
      param: "algov",
      image: "algoProject.jpeg"
    },
    {
      catagorie: "Technologies",
      title: "Placeholder",
      image: "coming-soon.jpg"
    },
    {
      catagorie: "Contact",
      param: "realestateapp",
      title: "RealEstate App",
      image: "house.png"
    },
    {
      catagorie: "Placeholder",
      title: "Placeholder",
      image: "coming-soon.jpg"
    }
  ]);
  const [hoveredL, setHoveredL] = useState(false);
  const [hoveredG, setHoveredG] = useState(false);
  const toggleHoverL = () => {
    setHoveredL(!hoveredL);
  };
  const toggleHoverG = () => {
    setHoveredG(!hoveredG);
  };

  return (
    <div className="container">
      <Top></Top>
      <div className="block-container">
        <div className="big-block">
          <div className="info-box">
            <div className="header">
              <h1>Tony Li</h1>
              <p>litony1999@gmail.com</p>
              <p>416-668-1415</p>
              <h2>Student | Developer</h2>
              <a id="resume-button" className="button" href={resume} download>
                Resume
              </a>

              <div className="social-buttons">
                <a href="https://github.com/tonyli29" target="_blank">
                  <img
                    onMouseEnter={() => toggleHoverG()}
                    onMouseLeave={() => toggleHoverG()}
                    src={
                      hoveredG
                        ? require("../images/GitHub-Mark-120px-plus.png")
                        : require("../images/GitHub-Mark-Light-120px-plus.png")
                    }
                    className="social"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/tony-li-2b9745165/"
                  target="_blank"
                >
                  <img
                    onMouseEnter={() => toggleHoverL()}
                    onMouseLeave={() => toggleHoverL()}
                    className="social"
                    src={
                      hoveredL
                        ? require("../images/In-Blue-128.png")
                        : require("../images/In-White-128.png")
                    }
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="block-section">
          {catagorie.map(block => (
            <Link to={`/${block.param}`}>
              <Block
                catagorie={block.catagorie}
                image={block.image}
                title={block.title}
              />
            </Link>
          ))}
        </div>
      </div>
      <Bottom></Bottom>
    </div>
  );
};

export default ContainerBlock;
