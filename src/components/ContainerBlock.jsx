import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router";
import Block from "./block";

const ContainerBlock = props => {
  const [catagorie, setCatagorie] = useState([
    {
      catagorie: "Project"
    },
    {
      catagorie: "Technologies"
    },
    {
      catagorie: "Contact"
    },
    {
      catagorie: "Placeholder"
    }
  ]);
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => {
    setHovered(!hovered);
    if (hovered) {
      console.log("gg");
    }
  };

  return (
    <div className="block-container">
      <div className="big-block">
        <div className="info-box">
          <h1>Tony Li</h1>
          <h2>Fullstack Developer</h2>
          <button>Contact</button>
          <button>Resume</button>

          <div className="social-buttons">
            <a href="https://github.com/tonyli29" target="_blank">
              <img
                className="social"
                src={require("../images/GitHub-Mark-Light-120px-plus.png")}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tony-li-2b9745165/"
              target="_blank"
            >
              <img
                className="social"
                src={require("../images/In-White-128.png")}
              />
            </a>
            <a>
              <img
                className="social"
                src={require("../images/gmail_icon-icons.com_59877.png")}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="block-section">
        {" "}
        {catagorie.map(block => (
          <Block catagorie={block.catagorie} />
        ))}
      </div>
    </div>
  );
};

export default ContainerBlock;
