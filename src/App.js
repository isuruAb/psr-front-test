import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ComputerAndComputer from "./components/GameOptions/ComputerAndComputer";
import ErrorBoundary from "./util/ErrorBoundary";
import Landing from "./components/Landing";
import NotFound from "./components/NotFound";
import PrivateRoute from "./util/PrivateRoute";
import { ROUTES } from "./util/routes";
import SelectMode from "./components/SelectMode";
import store from "./redux/store";
import UserAndComputer from "./components/GameOptions/UserAndComputer";
import "./assets/styles/App.scss";

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
