import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HEAD1 } from "../NavData";

export default class Coffeemenu extends Component {
  render() {
    return (
      <div>
        <div className="gnb_sub_wrap">
          <div className="gnb_sub">
            <div className="gnb_sub_inner">
              {HEAD1.map((menus) => {
                return (
                  <ul className="gnb_sub_ul" key={menus.id}>
                    {menus.title}
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
      </div>
    );
  }
}
