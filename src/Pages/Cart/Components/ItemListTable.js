import React from "react";
import styled from "styled-components";
import ItemCheckBtn from "./ItemCheckBtn";

export default function ItemListTable({
  initItemData,
  setInitItemData,
  checkedItems,
  setCheckedItems,
  totalPrice,
  setTotalPrice,
}) {
  const checkedItemHandler = (id, isChecked, price) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, id]);
      console.log(checkedItems);
      setTotalPrice(totalPrice + price);
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== id));
      setTotalPrice(totalPrice - price);
    }
  };

  const amountHandler = (selectedId, e) => {
    const { name } = e.target;
    if (name === "plus") {
      const newDataArr = initItemData.map((item) => {
        if (item.id === selectedId) {
          item.amount += 1;
          checkedItems.includes(selectedId) &&
            setTotalPrice(totalPrice + item.price);
        }
        return item;
      });
      setInitItemData(newDataArr);
    } else {
      const newDataArr = initItemData.map((item) => {
        if (item.amount !== 1) {
          if (item.id === selectedId) {
            item.amount -= 1;
            checkedItems.includes(selectedId) &&
              setTotalPrice(totalPrice - item.price);
          }
          return item;
        }
        return item;
      });
      setInitItemData(newDataArr);
    }
  };

  return (
    <>
      {initItemData &&
        initItemData.map((item) => {
          let itemTotalPrice = item.price * item.amount;
          return (
            <ItemTable key={item.id}>
              <SelectCartItem>
                <ItemCheckSection>
                  <ItemCheckBtn
                    itemId={item.id}
                    checkedItems={checkedItems}
                    itemTotalPrice={itemTotalPrice}
                    checkedItemHandler={checkedItemHandler}
                  />
                </ItemCheckSection>
                <ItemInfo>
                  <ItemInfoContents>
                    <ItemImg alt={item.name} src={item.img} />
                    <ItemInfoText>
                      <ItemTitle>{item.name} </ItemTitle>
                    </ItemInfoText>
                  </ItemInfoContents>
                </ItemInfo>
                <CupSizeContents>
                  <CupSizeInfo>{item.cup_size}</CupSizeInfo>
                </CupSizeContents>
                <ItemAmount>
                  <ItemAmountContents>
                    <CurrentAmount>{item.amount}개</CurrentAmount>
                    <AmountControlSection>
                      <MinusBtn
                        name="minus"
                        onClick={(e) => amountHandler(item.id, e)}
                      >
                        -
                      </MinusBtn>
                      <PlusBtn
                        name="plus"
                        onClick={(e) => amountHandler(item.id, e)}
                      >
                        +
                      </PlusBtn>
                    </AmountControlSection>
                  </ItemAmountContents>
                </ItemAmount>
                <ItemPrice>
                  <ItemPriceContents>{itemTotalPrice}원</ItemPriceContents>
                </ItemPrice>
              </SelectCartItem>
            </ItemTable>
          );
        })}
    </>
  );
}

const ItemTable = styled.table`
  width: 100%;
  border-bottom: 1px solid lightgray;
`;

const SelectCartItem = styled.tr`
  width: 100%;
`;

const ItemCheckSection = styled.th`
  width: 100px;
`;

const ItemInfo = styled.th`
  width: 100%;
  display: flex;
`;

const ItemInfoContents = styled.div`
  display: flex;
`;

const ItemImg = styled.img`
  width: 150px;
  height: 200px;
  margin-right: 40px;
`;

const ItemInfoText = styled.div`
  display: flex;
  align-items: center;
`;

const CupSizeContents = styled.th`
  width: 120px;
`;

const CupSizeInfo = styled.div``;

const ItemTitle = styled.div``;

const ItemAmount = styled.th`
  width: 100px;
`;

const ItemAmountContents = styled.div`
  width: 100px;
`;

const CurrentAmount = styled.div``;

const AmountControlSection = styled.div``;

const PlusBtn = styled.button`
  width: 20px;
  background-color: ${({ theme }) => theme.basicColor};
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: 3px;
`;

const MinusBtn = styled(PlusBtn)``;

const ItemPrice = styled.th`
  width: 140px;
`;

const ItemPriceContents = styled.div``;
