import React from "react";
import "./App.css";
import AlgoV from "./components/AlgoV";
import House from "./components/House";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContainerBlock from "./components/ContainerBlock";

const App = props => {
  return (
    <Router>
      <Switch>
        <div className="main-container">
          <Route exact path="/" component={ContainerBlock} />
          <Route path="/algov" component={AlgoV} />
          <Route path="/realestateapp" component={House} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
