import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROUTES } from "./util/routes";
import Landing from "./components/Landing/Landing";
import UserAndComputer from "./components/GameOptions/UserAndComputer/UserAndComputer";
import ComputerAndComputer from "./components/GameOptions/ComputeAndComputer/ComputerAndComputer";
import SelectMode from "./components/SelectMode/SelectMode";
import NotFound from "./components/NotFound/NotFound";

import "./App.scss";
import ErrorBoundary from "./util/ErrorBoundary";
import store from "./redux/store";
import PrivateRoute from "./util/PrivateRoute";

function App() {
  let ret = (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route component={Landing} exact path={ROUTES.index} />
            <PrivateRoute
              component={SelectMode}
              exact
              path={ROUTES.game_options}
            />

            <PrivateRoute
              component={ComputerAndComputer}
              exact
              path={ROUTES.computer_and_computer}
            />
            <PrivateRoute
              component={UserAndComputer}
              exact
              path={ROUTES.user_and_computer}
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
  return ret;
}

export default App;
