import React, { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import ClassificationBoxCheckbox from "./ClassificationBoxCheckbox";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";

export default function ClassificationBox({
  categories,
  state,
  isCheckedCategoryName,
  checkedNames,
}) {
  const [isToggleOpen, setIsToggleOpen] = useState(true);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  console.log("isToggleOpen", isToggleOpen);

  return (
    <div className="classificationBox">
      <ClassificationBoxWrapper>
        <ClassificationTitle show={isToggleOpen}>분류 보기</ClassificationTitle>
        <ToggleBtnDiv onClick={handleToggleOpen}>
          {!isToggleOpen && <FiChevronDown size={30} />}
          {isToggleOpen && <FiChevronUp size={30} />}
        </ToggleBtnDiv>
        <CategoryBtnCheckboxDiv show={isToggleOpen}>
          <CategoryBtn>카테고리</CategoryBtn>
          <ClassificationBoxCheckbox
            categories={categories}
            state={state}
            isCheckedCategoryName={isCheckedCategoryName}
            checkedNames={checkedNames}
          />
        </CategoryBtnCheckboxDiv>
      </ClassificationBoxWrapper>
    </div>
  );
}

// styled Components
// mixin
const Flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 개별
const ClassificationBoxWrapper = styled.section`
  position: relative;
  margin-bottom: 40px;
  padding: 30px 30px 0px;
  border: 1px solid #ddd;
  border-radius: 5px;
  // height: 244px; // 실제 데이터 들어오면 삭제
`;

const ClassificationTitle = styled.div`
  height: 48px;
  padding-bottom: 30px;
  // border-bottom: 1px solid #ddd;
  // border-bottom: ${(props) => (props.show ? "none" : "1px solid #ddd")};
  border-bottom: ${(props) => (props.show ? "1px solid #ddd" : "none")};
  font-size: 18px;
  font-weight: bold;
`;

const ToggleBtnDiv = styled.div`
  ${Flex};
  position: absolute;
  top: 15px;
  right: 30px;
  height: 42px;
  width: 42px;
  background-color: #f4f4f1;
  border-radius: 50%;
`;

const CategoryBtnCheckboxDiv = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  // height: 164px;
  padding: 30px 0px;
`;

const CategoryBtn = styled.button`
  height: 35px;
  width: 200px;
  border-radius: 3px;
  color: white;
  background-color: #006633;
`;
