import React from "react";
import styled from "styled-components";

export default function Buybtns({ addToCart }) {
  return (
    <BtnWrapper>
      <BuyBtn>구매하기</BuyBtn>
      <CartBtn onClick={addToCart}>장바구니</CartBtn>
    </BtnWrapper>
  );
}

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const BuyBtn = styled.p`
  width: 45%;
  padding: 20px 0;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.themeColor};
  font-size: 1.3em;
  font-weight: bold;
  color: white;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const CartBtn = styled(BuyBtn)`
  color: black;
  background-color: ${({ theme }) => theme.basicColor};
`;
