import React, { useState } from "react";

const Block = props => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => {
    setHovered(!hovered);
    if (hovered) {
      console.log("gg");
    }
  };

  return (
    <div
      onMouseEnter={() => toggleHover()}
      onMouseLeave={() => toggleHover()}
      className={hovered ? "block-hovered" : "block"}
    >
      <span>{props.catagorie}</span>
    </div>
  );
};

export default Block;
