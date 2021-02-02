import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HEAD2 } from "../NavData";

export default class Foodmenu extends Component {
  render() {
    return (
      <div className="gnb_sub_wrap">
        <div className="gnb_sub">
          <div className="gnb_sub_inner">
            {HEAD2.map((menus) => {
              return (
                <ul className="gnb_sub_ul" key={menus.id}>
                  <Link to={menus.link}>{menus.title}</Link>
                  {menus.content.map((menu, idx) => {
                    return (
                      <li
                        key={menu[idx]}
                        className={menu.id === 0 ? "" : "change"}
                      >
                        <Link to={menu.menu_link}>{menu.menu_title}</Link>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
