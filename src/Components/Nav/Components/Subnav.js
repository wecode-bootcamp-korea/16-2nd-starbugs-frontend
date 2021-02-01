import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HEAD } from "../NavData";
import "./Subnav.scss";

//Sign in ~ Find a Stoer Navbar
class Subnav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="nav_wrap">
            <div className="nav_inner">
              <h1 className="logo">
                <Link to="/">
                  <img src="./Images/logo2.jpg" alt="로고 이미지" />
                </Link>
              </h1>
              <div className="util_nav">
                <ul>
                  {HEAD.map((menu) => {
                    const { id, content, link } = menu;
                    return (
                      <li
                        id={id}
                        className={menu.id === 0 ? "util_sign_in" : "util_all"}
                      >
                        <Link to={link}>{content}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Subnav;
