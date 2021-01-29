import React from "react";
import styled from "styled-components";

export default function NoResult() {

  return <NoResultWrapper>검색 결과가 없습니다.</NoResultWrapper>;
}

const NoResultWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: 150px;
  font-size: 16px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  color: #222;
`;
