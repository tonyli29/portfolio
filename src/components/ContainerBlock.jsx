import React, { useState } from "react";
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
          <button>Contact</button>
          <button>Resume</button>
          <div className="social-buttons">
            <img
              className="social"
              src={require("../images/GitHub-Mark-Light-120px-plus.png")}
            />
            <img
              className="social"
              src={require("../images/In-White-128.png")}
            />
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
