import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROUTES } from "./util/routes";
import Landing from "./components/Landing/Landing";
import UserAndComputer from "./components/UserAndComputer/UserAndComputer";
import ComputerAndComputer from "./components/ComputeAndComputer/ComputerAndComputer";
import NotFound from "./components/NotFound/NotFound";
import "./App.scss";
import ErrorBoundary from "./util/ErrorBoundary";

function App() {
  let ret = (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route component={Landing} exact path={ROUTES.index} />
          <Route
            component={ComputerAndComputer}
            exact
            path={ROUTES.computer_and_computer}
          />
          <Route
            component={UserAndComputer}
            exact
            path={ROUTES.user_and_computer}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
  return ret;
}

export default App;
