import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import icon_home from "../../../images/productDetail/icon_home.png";
import icon_arrow from "../../../images/productDetail/icon_arrow.png";
import styled from "styled-components";

export default function Smap({ name, categoryName }) {
  const SMAP_OBJ = [
    {
      to: "/main",
      arrow: icon_arrow,
      icon: icon_home,
      alt: "홈",
    },
    {
      to: "/productlist",
      text: "Menu",
      arrow: icon_arrow,
      alt: "메뉴",
    },
    {
      to: "/productlist",
      text: "음료",
      arrow: icon_arrow,
      alt: "음료 리스트",
    },
    {
      to: "/",
      text: categoryName,
      arrow: icon_arrow,
      alt: categoryName,
    },
    {
      to: "/",
      text: name,
      alt: name,
    },
  ];

  return (
    <SmapUl>
      {SMAP_OBJ.map((smap, idx) => {
        return (
          <Fragment key={idx}>
            {smap.icon ? (
              <li>
                <Link to={smap.to}>
                  <img alt={smap.alt} src={smap.icon} />
                </Link>
              </li>
            ) : (
              <li>
                <Link to={smap.to}>
                  <p>{smap.text}</p>
                </Link>
              </li>
            )}
            {smap.arrow && (
              <li>
                <img alt="icon arrow" src={smap.arrow} />
              </li>
            )}
          </Fragment>
        );
      })}
    </SmapUl>
  );
}

const SmapUl = styled.ul`
  display: flex;
  justify-content: flex-end;

  li {
    margin: 0 3px;
    p {
      color: gray;
    }
  }
`;
