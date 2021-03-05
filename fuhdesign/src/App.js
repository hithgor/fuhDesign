import React from "react";
import './App.css';
import HomePage from "./pages/homePage/homePage.page";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
