import React, { Component } from "react";
import Footertitle from "./Footertitle";
import Footersubtitle from "./Footersubtitle";
import styled from "styled-components";

class Footer extends Component {
  render() {
    return (
      <FooterWrap>
        <Fooinner>
          <List>
            <Footertitle />
          </List>
          <List>
            <Footersubtitle />
          </List>
        </Fooinner>
      </FooterWrap>
    );
  }
}

export default Footer;

const FooterWrap = styled.footer`
  position: relative;
  background: #2c2a29;
  height: 270px;
`;

const Fooinner = styled(FooterWrap)`
  width: 1100px;
  margin: 0 auto;
  background-repeat: no-repeat;
`;

const List = styled.ul`
  padding-top: 30px;
`;
