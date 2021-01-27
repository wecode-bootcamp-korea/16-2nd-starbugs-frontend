import React, { Component } from "react";
import styled from "styled-components";
import { FOOTER } from "./Footerdata";

class Footersubtitle extends Component {
  render() {
    return (
      <Wrapper>
        {FOOTER.map((list, idx) => {
          return (
            <Listinner key={idx}>
              {list.content.map((lists, idx) => {
                return (
                  <Listcontent key={idx}>{lists.content_list}</Listcontent>
                );
              })}
            </Listinner>
          );
        })}
      </Wrapper>
    );
  }
}

export default Footersubtitle;

const Wrapper = styled.div`
  display: flex;
`;

const Listinner = styled.li`
  display: flex;
  flex-direction: column;
  width: 250px;
  color: white;
  line-height: 1.5;
  & a:hover {
    color: #00b050;
  }
`;

const Listcontent = styled.a`
  font-size: 14px;
  & a:hover {
    border-bottom: 1px solid white;
  }
`;
