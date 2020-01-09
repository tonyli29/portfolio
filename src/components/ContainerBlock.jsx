import React, { useState } from "react";
import Block from "./block";
import Bottom from "./Bottom";

const ContainerBlock = props => {
  const [catagorie, setCatagorie] = useState([
    {
      catagorie: "Project",
      image: "../images/download.png"
    },
    {
      catagorie: "Technologies",
      image: "../images/GitHub-Mark-120px-plus.png"
    },
    {
      catagorie: "Contact",
      image: "../images/GitHub-Mark-120px-plus.png"
    },
    {
      catagorie: "Placeholder",
      image: "../images/GitHub-Mark-120px-plus.png"
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
    <div>
      <div className="block-container">
        <div className="big-block">
          <div className="info-box">
            <div className="header">
              <h1>Tony Li</h1>
              <h2>Student</h2>
              <button className="contact-button">Resume</button>
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
          {" "}
          {catagorie.map(block => (
            <Block catagorie={block.catagorie} image={block.image} />
          ))}
        </div>
      </div>
      <Bottom></Bottom>
    </div>
  );
};

export default ContainerBlock;
