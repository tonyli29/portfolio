import React from "react";
import { Link } from "react-router-dom";

const ProjectTop = props => {
  return (
    <div className="project-head">
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
      <div className="blank-space"></div>
    </div>
  );
};

// height 35px

export default ProjectTop;
