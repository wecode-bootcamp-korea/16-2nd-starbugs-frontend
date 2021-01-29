import React from "react";
import styled from "styled-components";
import CartList from "./CartList";

export default function Cart() {
  return (
    <Container>
      <CartWrap>
        <CartTitle>장바구니</CartTitle>
        <CartList />
      </CartWrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 160px;
  margin-bottom: 80px;
`;

const CartTitle = styled.h1`
  margin: 40px 0 40px 5px;
`;

const CartWrap = styled.div`
  width: 80%;
  margin: 0 auto;
`;
