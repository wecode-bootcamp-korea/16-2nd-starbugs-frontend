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
              {HEAD2.map((menu) => {
                const { id, link, title, content } = menu;
                return (
                  <ul className="gnb_sub_ul">
                    <li id={id}>
                      <Link to={link}>{title}</Link>
                      {content}
                    </li>
                  </ul>
                );
              })}

              {/* <div className="div">
                {HEAD2.map((menu) => {
                  const { id, link, title } = menu;
                  return (
                    <ul>
                      {id}
                      <li>
                        <Link to={link}>{title}</Link>
                      </li>
                    </ul>
                  );
                })} */}
              {/* <ul className="gnb_sub_ul">
                  <li>
                    <Link to="/">푸드</Link>
                  </li>
                  <li>
                    <Link to="/">상품</Link>
                  </li>

                  <li>
                    <Link to="/">카드</Link>
                  </li>

                  <li>
                    <Link to="/">메뉴 이야기</Link>
                  </li>
                </ul> */}
            </div>
          </div>
        </div>
      </div>

      // </div>
    );
  }
}
