import React, { Component } from "react";
import "./app.css";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import ChatBox from "./components/Chatbox/Chatbox";
import User1Route from "./components/User1Route";
import User2Route from "./components/User2Route";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/user1" component={User1Route} />
          <Route path="/user2" component={User2Route} />
          <Route component={ChatBox} />
        </Switch>
      </div>
    );
  }
}

export default App;
