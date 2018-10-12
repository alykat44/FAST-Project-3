import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Customer from "./pages/Customer";
import Dispatch from "./pages/Dispatch";
import Login from "./pages/Login";
import React from 'react';

const App = () => {
  return (



    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/customer" component={Customer} />
          <Route exact path="/dispatch" component={Dispatch} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;

