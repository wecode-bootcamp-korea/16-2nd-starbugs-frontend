import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HEAD1 } from "./NavData";

export default class Navfirst extends Component {
  render() {
    return (
      <div>
        <div className="gnb_sub_wrap">
          <div className="gnb_sub">
            <div className="gnb_sub_inner">
              <ul className="gnb_sub_ul">
                {HEAD1.map((menu) => {
                  const { id, link, content } = menu;
                  return menu.id === 0 ? (
                    <li id={id}>
                      <Link to={link}>{content}</Link>
                    </li>
                  ) : (
                    <li id={id} style={{ lineHeight: 0.3 }}>
                      <Link to={link}>{content}</Link>
                    </li>
                  );
                })}
              </ul>
              <ul className="gnb_sub_ul">
                <li>
                  <Link to="/">나와. 어울리는 커피</Link>
                </li>
              </ul>
              <ul className="gnb_sub_ul">
                <li>
                  <Link to="/">스타벅스 리저브</Link>
                </li>
              </ul>
              <ul className="gnb_sub_ul">
                <li>
                  <Link to="/">에스프레소 음료</Link>
                </li>
              </ul>
              <ul className="gnb_sub_ul">
                <li>
                  <Link to="/">최상의 커피를 즐기는 법</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
