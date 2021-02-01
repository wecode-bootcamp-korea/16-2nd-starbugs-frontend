import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withRouter, useHistory } from "react-router-dom";
import BuyBtns from "./Buybtns";
import { CART_API } from "../../../config";

function CtrlAmount({ drinkDetail, cupSize, price, name }) {
  const [amount, setamount] = useState(1);
  const { history } = useHistory();

  useEffect(() => {
    setamount(1);
    drinkDetail.map((item) => (item.amount = 1));
  }, [cupSize, drinkDetail]);

  const addToCart = () => {
    const accessToken = localStorage.getItem("Kakao_token");
    fetch(CART_API, {
      headers: { Authorization: accessToken },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.item) {
          alert(`${name} ${cupSize} ${amount}개 장바구니에 담기 성공!`);
          let move2Cart = window.confirm("장바구니로 이동하시겠습니까?");
          move2Cart && history.push("/cart");
        } else {
          alert("로그인이 필요한 서비스 입니다.");
        }
      });
  };

  const ctrlAmount = (e) => {
    const { name } = e.target;
    drinkDetail.map((item) => {
      name === "plus" ? (item.amount += 1) : (item.amount -= 1);
      return setamount(item.amount);
    });
  };

  return (
    <>
      <ProductPrice>
        {name}
        <div>{cupSize}</div>
        <CtrlAmountForm>
          <MinusBtn name="minus" onClick={ctrlAmount}>
            -
          </MinusBtn>
          <input type="number" value={amount} min="1" max="10" />
          <PlusBtn name="plus" onClick={ctrlAmount}>
            +
          </PlusBtn>
        </CtrlAmountForm>
        {`${amount * parseInt(price)} 원`}
      </ProductPrice>
      <BuyBtns addToCart={addToCart} />
    </>
  );
}

const CtrlAmountForm = styled.div`
  input[type="number"] {
    height: 30px;
    text-align: center;
    background-color: white;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const PlusBtn = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid lightgray;
  background-color: ${({ theme }) => theme.basicColor};
`;

const MinusBtn = styled(PlusBtn)``;

const ProductPrice = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 40px;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.basicColor};
  font-size: 1em;
`;

export default withRouter(CtrlAmount);
