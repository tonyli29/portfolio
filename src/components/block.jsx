import React, { useState } from "react";

const Block = props => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div
      onMouseEnter={() => toggleHover()}
      onMouseLeave={() => toggleHover()}
      // className={hovered ? "block-hovered" : "block"}
      className={
        hovered
          ? `block hovered ${props.catagorie}-block`
          : `block ${props.catagorie}-block`
      }
    >
      <span id={props.catagorie}>{props.title}</span>
      <img
        className="testimage"
        src={require("../images/" + props.image)}
      ></img>
    </div>
  );
};

export default Block;
