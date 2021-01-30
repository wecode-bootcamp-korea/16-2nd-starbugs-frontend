import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HEAD } from "../NavData";
import "./Subnav.scss";

//Sign in ~ Find a Stoer Navbar
class Subnav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  loginChecked = () => {
    this.setState({
      isChecked: localStorage.getItem("Kakao_token") ? true : false,
    });
  };

  componentDidMount() {
    this.loginChecked();
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="nav_wrap">
            <div className="nav_inner">
              <h1 className="logo">
                <Link to="/">
                  <i class="fas fa-coffee fa-3x"></i>
                  <div>STARBUGS</div>
                </Link>
              </h1>
              <div className="util_nav">
                <ul>
                  {HEAD.map((menu, idx) => {
                    const { id, content, link } = menu;
                    if (idx === 3 && !this.state.isChecked) return null;
                    if (idx === 0 && this.state.isChecked) return null;
                    return (
                      <li
                        key={idx}
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
