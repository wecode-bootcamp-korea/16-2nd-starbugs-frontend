import React, { Component } from "react";
import styled from "styled-components";
import { FOOTER } from "./Footerdata";

export default class Footertitle extends Component {
  render() {
    return (
      <Wrapper>
        <FooterLogo src="./Images/footerlogo.png" alt="로고 사진" />
        {FOOTER.map((list, idx) => {
          return (
            <Listinner key={idx}>
              <Listcontent>{list.title}</Listcontent>
            </Listinner>
          );
        })}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
`;

const Listinner = styled.li`
  display: flex;
  width: 250px;
  color: white;
  cursor: pointer;
  line-height: 1.5;
  & a:hover {
    color: #00b050;
  }
`;

const Listcontent = styled.a`
  font-size: 13px;
`;

const FooterLogo = styled.img`
  position: absolute;
  right: 0;
`;
