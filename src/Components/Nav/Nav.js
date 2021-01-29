import React, { Component, Fragment } from "react";
import Subnav from "./Components/Subnav";
import Menunav from "./Components/Menunav";
import "./Nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <Fragment>
        <Subnav />
        <Menunav />
      </Fragment>
    );
  }
}
