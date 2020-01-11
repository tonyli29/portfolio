import React from "react";
import ProjectTop from "./ProjectTop";
const AlgoV = props => {
  return (
    <div className="container">
      <ProjectTop></ProjectTop>
      <div className="block-container project-container">
        <div className="big-block project-block">
          <div className="info-box">
            <img id="algov" src={require("../images/algoProject.jpeg")}></img>
            <div className="header project-header">
              <h1>AlgoV</h1>
              <div className="app-buttons">
                <a
                  href="https://github.com/tonyli29/algoVisualizer"
                  target="_blank"
                  className="button"
                >
                  Source Code
                </a>
                <a
                  href="http://algov.herokuapp.com/"
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
            <h1>Pathfinding Algorithm Visualizer</h1>
          </div>
          <div className="project-info-grid">
            <div className="project-tools">
              <h2>Tools</h2>
              <ul>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="project-description">
              <h2>Overview</h2>
              <p>
                AlgoV is a web application built purely in React. AlgoV has a
                start and finish node, and based on what algorithm the user
                selects it is able to animate and compute the shortest path
                based on the algorithm. Users can also make walls/obstacles on
                the grid that forces the algorithm to go around. So far it is
                able to visualize A* and Dijkstras algorithm on a grid of
                unweighted nodes. The A* algorithm uses a heuristic called the
                manhattan distance, which is basicly the euclidean distance of a
                grid but it movement is restricted to only 4 directions (up,
                down, left, right).
              </p>
            </div>
            <div className="project-features">
              <h2>Features</h2>
              <ul>
                <li>A*</li>
                <li>Dijkstras Algorithm</li>
                <li>Reset</li>
                <li>walls</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgoV;
