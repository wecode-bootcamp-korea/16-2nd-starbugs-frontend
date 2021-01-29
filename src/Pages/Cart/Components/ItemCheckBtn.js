import React from "react";
import styled from "styled-components";

export default function ItemCheckBtn({
  itemId,
  checkedItems,
  itemTotalPrice,
  checkedItemHandler,
}) {
  const checkHandler = ({ target }, id, price) => {
    checkedItemHandler(id, target.checked, price);
  };

  return (
    <div>
      <CheckBtn
        type="checkbox"
        onChange={(e) => checkHandler(e, itemId, itemTotalPrice)}
        checked={checkedItems.includes(itemId) ? true : false}
      />
    </div>
  );
}

const CheckBtn = styled.input`
  width: 20px;
  height: 20px;
`;
