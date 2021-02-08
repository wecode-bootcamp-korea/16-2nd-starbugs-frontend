import React, { Component } from "react";
import styled from "styled-components";
import SubCategory from "../SubCategory/SubCategory";
import { Icon } from "react-icons-kit";
import { twoUp } from "react-icons-kit/iconic/twoUp";
import { menu } from "react-icons-kit/iconic/menu";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import "./ProductCategory.scss";

export default class ProductCategory extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
      whatIsChecked: "",
      checkedMarkNames: [],
      markBtnClick: false,
    };
  }

  clickHandler = (id) => {
    this.setState({ currentId: id });
  };

  handleMarkBtn = () => {
    const { markBtnClick } = this.state;
    this.setState({ markBtnClick: !markBtnClick });
  };

  // (상세 분류 내부) 체크 박스 onClick 메소드
  handleCheckBox = (e) => {
    const { value } = e.target;
    this.setState(
      {
        whatIsChecked: value,
      },
      () => this.makeMarkArr(value)
    );
  };

  // 체크 상태만 들어간 배열(checkedMarkNames state) 제작 mtd
  makeMarkArr = (value) => {
    const { checkedMarkNames } = this.state;
    const isAlreadyInclude = checkedMarkNames.some((name) => name === value);

    if (isAlreadyInclude) {
      const deleteOverlappedName = checkedMarkNames.filter((name) => {
        return name !== value;
      });
      this.setState({
        checkedMarkNames: deleteOverlappedName,
      });
    } else {
      this.setState({
        checkedMarkNames: [...this.state.checkedMarkNames, value],
      });
    }
  };

  render() {
    const { copyCategories, state, checkedNames } = this.props;
    const {
      currentId,
      whatIsChecked,
      markBtnClick,
      checkedMarkNames,
    } = this.state;

    return (
      <div className="productCategory">
        <ProductCategoryWrapper>
          <AllBtnsWrapper>
            <BtnWrap>
              {BTN_WATCH_THROUGH.map((btn, idx) => {
                return (
                  <BTN
                    key={idx + 1}
                    onClick={() => this.clickHandler(idx + 1)}
                    className={btn}
                    currentId={currentId}
                    num={idx + 1}
                  >
                    {idx === 0 && <Icon icon={twoUp} size={12} />}
                    {idx === 1 && <Icon icon={menu} size={12} />}
                    &nbsp;
                    {btn}
                  </BTN>
                );
              })}
            </BtnWrap>

            <SelectBtnWrapper show={currentId}>
              <MarkBtnP>
                <MarkBtn onClick={this.handleMarkBtn} isClick={markBtnClick} />
                <MarkBtnSpan>상세분류</MarkBtnSpan>
                <IconDiv>
                  <FiChevronDown size={20} />
                </IconDiv>
              </MarkBtnP>
              <MarkOptionUl show={markBtnClick}>
                {MARKBTN_OPTIONS.map((text, idx) => {
                  const isSelectedName = checkedMarkNames.includes(text);

                  return (
                    <MarkOptionLi>
                      <MarkOptionLabel>
                        <input
                          type="checkbox"
                          value={text}
                          onChange={this.handleCheckBox}
                          id={"markBtn" + idx}
                        />
                        <IsNewLabel for={"markBtn" + idx}>
                          <IsNewIconDiv>
                            {isSelectedName && (
                              <AiOutlineCheck size={10} color="#006633" />
                            )}
                          </IsNewIconDiv>
                        </IsNewLabel>
                        <IsNew matchName="신규 출시된 메뉴" nowText={text}>
                          NEW
                        </IsNew>
                        <IsSeason
                          matchName="한정기간 출시되는 시즌성 메뉴"
                          nowText={text}
                        >
                          시즌
                          <br />
                          한정
                        </IsSeason>
                        <IsNewSpan>{text}</IsNewSpan>
                      </MarkOptionLabel>
                    </MarkOptionLi>
                  );
                })}
              </MarkOptionUl>
            </SelectBtnWrapper>
          </AllBtnsWrapper>

          <SubCategory
            copyCategories={copyCategories}
            currentId={currentId}
            state={state}
            checkedNames={checkedNames}
            checkedMarkNames={checkedMarkNames}
          />
        </ProductCategoryWrapper>{" "}
      </div>
    );
  }
}

// - 배열
// 사진/영양정보 버튼 text
const BTN_WATCH_THROUGH = ["사진으로 보기", "영양정보로 보기"];

// 상세분류 option text
const MARKBTN_OPTIONS = ["신규 출시된 메뉴", "한정기간 출시되는 시즌성 메뉴"];

// - 스타일드 컴포넌트
const ProductCategoryWrapper = styled.main``;

const AllBtnsWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  height: 40px;
`;

// 사진/영양정보 버튼
const BtnWrap = styled.section`
  display: flex;
  align-items: flex-end;
`;

const BTN = styled.button`
  width: 114px;
  height: 28px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-right: 15px;
  &: last-child {
    margin-right: 0px;
  }
  font-size: 12px;
  background-color: ${(props) =>
    props.currentId == props.num ? "#666" : "white"};
  color: ${(props) => (props.currentId == props.num ? "white" : "#666")};
`;

// 상세분류 버튼
const SelectBtnWrapper = styled.div`
  display: ${(props) => (props.show === 1 ? "inline-block" : "none")};
  width: 248px;
  height: 40px;
  border-radius: 3px;
`;

const MarkBtnP = styled.p`
  position: relative;
  height: 40px;
`;

const MarkBtn = styled.button`
  border: ${(props) => (props.isClick ? "1px solid #666" : "1px solid #ddd")};
  border-radius: 3px;
  width: 248px;
  height: 40px;
`;

const MarkBtnSpan = styled.span`
  position: absolute;
  left: 10px;
  top: 13px;
  font-size: 14px;
`;

const IconDiv = styled.div`
  position: absolute;
  right: 10px;
  bottom: 9px;
`;

const MarkOptionUl = styled.ul`
  display: ${(props) => (props.show ? "block" : "none")};
  width: 100%;
  border-radius: 3px;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
  background-color: white;
`;

const MarkOptionLi = styled.li`
  border-bottom: 1px solid #eee;
  padding: 5px;
`;

const MarkOptionLabel = styled.label`
  display: flex;
  align-items: center;
`;

const IsNewSpan = styled.span`
  font-size: 13px;
  margin-left: 4px;
`;

const IsNewLabel = styled.label`
  position: relative;
  display: inline-block;
  margin-right: 2px;
  width: 12px; /* 체크박스의 너비를 지정 */
  height: 12px; /* 체크박스의 높이를 지정 */
  line-height: 21px; /* 세로정렬을 위해 높이값과 일치 */
  text-align: center;
  border: 1px solid #ddd;
  background-color: "white";
  cursor: pointer;
`;

const IsNewIconDiv = styled.div`
  position: absolute;
  bottom: -6px;
`;

const IsNew = styled.div`
  display: ${(props) =>
    props.matchName == props.nowText ? "inline-flex" : "none"};
  justify-content: center;
  align-items: center;
  bottom: -6px;
  left: 16px;
  margin-left: 6px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 3px;
  font-weight: bold;
  color: white;
  background-color: #006633;
`;

const IsSeason = styled(IsNew)`
  display: ${(props) =>
    props.matchName == props.nowText ? "inline-flex" : "none"};
  font-weight: 600;
  background-color: #669900;
`;
