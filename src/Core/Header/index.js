import React from "react";
import { NavLink } from "react-router-dom";
import Linka from "../../shared/Linka";
import { Navigation } from "./styled";

const Header = () => {
  return (
    <header>
      <Navigation as="nav">
        <Linka className="brand-logo " to="/">
          <b>BRAND</b>{" "}
        </Linka>
        <span>
          <Linka as={NavLink} className="nav-item" exact to="/">
            Home{" "}
          </Linka>
          <Linka as={NavLink} className="nav-item" to="/about">
            About{" "}
          </Linka>
        </span>
      </Navigation>
    </header>
  );
};

export default Header;
