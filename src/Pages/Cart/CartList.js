import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CART_API } from "../../config";
import ItemListTable from "./Components/ItemListTable";

export default function CartList() {
  const [initItemData, setInitItemData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // fetch("http://192.168.202.128:3000/data/CartItemData.json")
    const accessToken = localStorage.getItem("Kakao_token");
    fetch(CART_API, {
      headers: {
        Authorization: accessToken,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setInitItemData(res.item);
      });
  }, []);

  const allCheckedHandler = (isChecked) => {
    if (isChecked) {
      const idArr = [];
      initItemData.forEach((item) => idArr.push(item.id));
      setCheckedItems(idArr);
      let total = 0;
      initItemData.map((item) => (total += item.price * item.amount));
      setTotalPrice(total);
    } else {
      setCheckedItems([]);
      setTotalPrice(0);
    }
  };

  return (
    <CartWrapper>
      <CartListContainer>
        <SubjectTable>
          <ItemSubject>
            <CheckBoxSection>
              <AllCheckBtn
                type="checkbox"
                onChange={(e) => allCheckedHandler(e.target.checked)}
                checked={
                  checkedItems.length === initItemData.length ? true : false
                }
              />
            </CheckBoxSection>
            <DrinkInfo>
              <DrinkTitle>음료</DrinkTitle>
            </DrinkInfo>
            <CupSize>
              <CupSizeTitle>컵 사이즈</CupSizeTitle>
            </CupSize>
            <DrinkAmount>
              <DrinkAmountTitle>수량</DrinkAmountTitle>
            </DrinkAmount>
            <Price>
              <PriceTitle>가격</PriceTitle>
            </Price>
          </ItemSubject>
        </SubjectTable>
        <ItemListTable
          initItemData={initItemData}
          setInitItemData={setInitItemData}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
        <AmountWrap>
          <PaymentTable>
            <AmountInfo>
              <AmountEmptySection />
              <AmountContents>
                <AmountText>
                  <PaymentCost>결제금액</PaymentCost>
                </AmountText>
                <AmountCost>{totalPrice}원</AmountCost>
              </AmountContents>
              <AmountEmptySection />
            </AmountInfo>
          </PaymentTable>
        </AmountWrap>
        <PaymentBtn>결제하기</PaymentBtn>
      </CartListContainer>
    </CartWrapper>
  );
}

const CartWrapper = styled.div`
  width: 100%;
`;

const SubjectTable = styled.table`
  width: 100%;
  font-size: 1.1em;
  background-color: ${({ theme }) => theme.basicColor};
  border-bottom: 1px solid #ddd;
  border-top: 1px solid ${({ theme }) => theme.themeColor};
`;

const ItemSubject = styled.tr`
  width: 100%;
  height: 90px;
`;

const CheckBoxSection = styled.th`
  width: 100px;
  padding: 20px 40px;
`;

const AllCheckBtn = styled.input`
  width: 20px;
  height: 20px;
`;

const DrinkTitle = styled.div`
  width: 100%;
`;

const DrinkInfo = styled.th`
  width: 100%;
`;

const CupSize = styled.th``;

const CupSizeTitle = styled.div`
  width: 120px;
`;

const DrinkAmount = styled.th``;

const DrinkAmountTitle = styled.div`
  width: 100px;
`;

const Price = styled.th``;

const PriceTitle = styled.div`
  width: 140px;
`;

const CartListContainer = styled.section``;

const PaymentCost = styled.div``;

const AmountWrap = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 1.2em;
  background-color: ${({ theme }) => theme.basicColor};
`;

const PaymentTable = styled.table`
  padding: 40px 0;
  border-bottom: 1px solid ${({ theme }) => theme.themeColor};
`;

const AmountInfo = styled.tr``;

const AmountEmptySection = styled.td``;

const AmountContents = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 40px auto;
`;

const AmountText = styled.td``;

const AmountCost = styled.td`
  width: 200px;
  margin-right: 40px;
`;

const PaymentBtn = styled.p`
  width: 300px;
  margin: 20px 0 0 auto;
  padding: 20px 0;
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
  color: white;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.themeColor};

  &:hover {
    cursor: pointer;
  }
`;
