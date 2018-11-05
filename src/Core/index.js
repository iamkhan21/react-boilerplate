import React, { Fragment } from "react";
import { BrowserRouter }   from "react-router-dom";
import Footer              from "./Footer";
import Header              from "./Header";
import RoutingView         from "./RoutingView";

const Core = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <RoutingView />
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
};

export default Core;
