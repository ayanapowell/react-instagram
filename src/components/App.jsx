import React from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import { Switch, Route } from "react-router-dom";
import UserFeed from "./UserFeed";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/user" component={UserFeed} />
      </Switch>
    </div>
  );
}

export default App;
