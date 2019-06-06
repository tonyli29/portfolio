import React from "react";
import "./App.css";
import ContainerBlock from "./components/ContainerBlock";

const App = props => {
  return (
    <div>
      <img className="background" src="https://i.imgur.com/aUhpEz3.jpg" />
      <ContainerBlock />
    </div>
  );
};

export default App;
