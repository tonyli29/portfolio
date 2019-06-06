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
      <div
        onMouseEnter={() => toggleHover()}
        onMouseLeave={() => toggleHover()}
        className={hovered ? "big-block-hovered" : "big-block"}
      >
        <span>Tony Li</span>
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
