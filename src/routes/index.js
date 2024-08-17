import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// import ApiContext from "./appServices/mediaService/context/ApiContext";
import asyncComponent from "util/asyncComponent";

const NotFoundRedirect = () => <Redirect to="/404" />;

const App = ({ match }) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route
        path={`${match.url}home`}
        component={asyncComponent(() => import("./home"))}
      />
      <Route
        path={`${match.url}sample`}
        component={asyncComponent(() => import("./SamplePage"))}
      />
      <Route
        path={`${match.url}about`}
        component={asyncComponent(() => import("./AboutPage"))}
      />
      <Route
        path={`${match.url}card1`}
        component={asyncComponent(() => import("./CardsStyle1"))}
      />
      <Route
        path={`${match.url}card2`}
        component={asyncComponent(() => import("./CardStyle2"))}
      />
      <Route
        path={`${match.url}table`}
        component={asyncComponent(() => import("./Table"))}
      />
      <Route
        path={`${match.url}apiWork`}
        component={asyncComponent(() => import("./ApiWork"))}
      />

      <Route component={NotFoundRedirect} />
    </Switch>
  </div>
);

export default App;
