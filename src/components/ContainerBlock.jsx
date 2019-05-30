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

  return (
    <div className="block-container">
      <div className="big-block">
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
