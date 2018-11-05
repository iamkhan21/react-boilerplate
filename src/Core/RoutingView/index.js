import React from "react";
import Loadable from "react-loadable";
import { Route, Switch } from "react-router-dom";
import Loading from "../../shared/Loading";
import { WrapContainer } from "../../shared/Wraps";

const Home = Loadable({
  loader: () => import("../../pages/Home"),
  loading: Loading
});

const About = Loadable({
  loader: () => import("../../pages/About"),
  loading: Loading
});

const NotFound = Loadable({
  loader: () => import("../../pages/NotFound"),
  loading: Loading
});

const RoutingView = () => {
  return (
    <WrapContainer as="main">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route component={NotFound} />
      </Switch>
    </WrapContainer>
  );
};

export default RoutingView;
