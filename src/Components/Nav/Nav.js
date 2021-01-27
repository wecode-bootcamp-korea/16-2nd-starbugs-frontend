import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navfirst from "./Navfirst";
import Navsecond from "./Navsecond";
import { HEAD } from "./NavData";
import "./Nav.scss";

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
    };
  }

  clickHandler = (id) => {
    this.setState({ currentId: id });
  };

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="nav_wrap">
            <div className="nav_inner">
              <h1 className="logo">
                <Link to="/">
                  <img src="./Images/logo2.jpg" alt="로고 이미지"></img>
                </Link>
              </h1>
              <div className="util_nav">
                <ul>
                  {HEAD.map((menu) => {
                    const { id, content, link } = menu;
                    return menu.id === 0 ? (
                      <li id={id} className="util_sign_in">
                        <Link to={link}>{content}</Link>
                      </li>
                    ) : (
                      <li id={id} className="util_sign_in2">
                        <Link to={link}>{content}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="sub_nav">
          <div className="sub_nav_inner">
            <ul className="sub_top_ul">
              <li
                onMouseEnter={() => this.clickHandler(1)}
                onMouseLeave={this.clickHandler}
                className="sub_li"
              >
                <Link to="">COFFEE</Link>
                {this.state.currentId === 1 && <Navfirst />}
              </li>
              <li
                onMouseEnter={() => this.clickHandler(2)}
                onMouseLeave={this.clickHandler}
                className="sub_li"
              >
                <Link to="">MENU</Link>
                {this.state.currentId === 2 && <Navsecond />}
              </li>
              <li onMouseEnter={() => this.clickHandler(3)} className="sub_li">
                <Link to="">STORE</Link>
                {this.state.currentId === 3}
              </li>
              <li className="sub_li">
                <Link to="">RESPONSIBILITY</Link>
              </li>
              <li className="sub_li">
                <Link to="">STARBUCKS REWARDS</Link>
              </li>
              <li className="sub_li">
                <Link to="">WHAT'S NEW</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
