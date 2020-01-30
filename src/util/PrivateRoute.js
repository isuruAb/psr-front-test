import React from "react";
import store from "../redux/store";
import { Route, Redirect } from "react-router-dom";
import { ROUTES } from "./routes";

function PrivateRoute({ component: Component, ...rest }) {
  let { name } = store.getState();

  store.subscribe(() => {
    name = store.getState().name;
  });

  return (
    <Route
      {...rest}
      render={props =>
        name ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: ROUTES.index, state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
