import React from "react";
import "./App.css";
import ContainerBlock from "./components/ContainerBlock";

const App = props => {
  return (
    <div>
      <img
        className="background"
        src={require("./images/black-and-white-device-electronics-698808.jpg")}
      />

      <ContainerBlock />
    </div>
  );
};

export default App;
