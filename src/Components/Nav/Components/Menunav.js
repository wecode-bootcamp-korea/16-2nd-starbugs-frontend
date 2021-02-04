import React, { Component } from "react";
import Coffeemenu from "./Coffeemenu";
import Foodmenu from "./Foodmenu";
import "./Menunav.scss";

// COFFEE ~ WHAT'S NEW Navbar
export default class Menunav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: null,
    };
  }

  enterHandler = (id) => {
    this.setState({ currentId: id });
  };

  leaveHandler = () => {
    this.setState({ currentId: 0 });
  };

  render() {
    const { currentId } = this.state;

    return (
      <div className="sub_nav">
        <div className="sub_nav_inner">
          <ul className="sub_top_ul">
            {NAV_ARR.map((menu, idx) => {
              return (
                <li
                  key={idx}
                  onMouseEnter={() => this.enterHandler(idx + 1)}
                  className="sub_li"
                >
                  {menu}
                </li>
              );
            })}
            <div onMouseLeave={this.leaveHandler}>{MAPPING_OBJ[currentId]}</div>
          </ul>
        </div>
      </div>
    );
  }
}

const MAPPING_OBJ = {
  1: <Coffeemenu />,
  2: <Foodmenu />,
};

const NAV_ARR = [
  "COFFEE",
  "MENU",
  "STORE",
  "RESPONSIBILITY",
  "STARBUGS REWARDS",
  "WHAT'S NEW",
];
