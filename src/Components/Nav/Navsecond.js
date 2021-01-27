import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HEAD2 } from "./NavData";

export default class Navsecond extends Component {
  render() {
    return (
      <div>
        <div className="gnb_sub_wrap">
          <div className="gnb_sub">
            <div className="gnb_sub_inner">
              <ul className="gnb_sub_ul">
                {HEAD2.map((menu) => {
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
                  <Link to="/">푸드</Link>
                </li>
              </ul>
              <ul className="gnb_sub_ul">
                <li>
                  <Link to="/">상품</Link>
                </li>
              </ul>
              <ul className="gnb_sub_ul">
                <li>
                  <Link to="/">카드.</Link>
                </li>
              </ul>
              <ul className="gnb_sub_ul">
                <li>
                  <Link to="/">메뉴 이야기</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
