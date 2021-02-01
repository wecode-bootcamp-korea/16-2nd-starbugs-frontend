import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import Smap from "./Components/Smap";
import CtrlAmount from "./Components/CtrlAmount";
import Badge from "./Components/Badge";
import ProductNutritionsInfo from "./Components/ProductNutritionsInfo";
import { DETAIL_API } from "../../config";

export default function ProductDetail(props) {
  const [drinkDetail, setDrinkDetail] = useState([]);
  const [cupSizeInfo, setCupSizeInfo] = useState(0);
  useEffect(() => {
    // fetch("http://localhost:3000/data/productDetailData.json")
    // fetch(`${DETAIL_API}/${math.params.id}`)
    // fetch(DETAIL_API)
    fetch("http://192.168.202.128:3000/data/productDetailData.json")
      .then((res) => res.json())
      .then((res) => {
        setDrinkDetail(res.item);
      });
  }, []);

  const cupSizeHandler = (e) => {
    const { value } = e.target;
    value === "0" ? setCupSizeInfo(0) : setCupSizeInfo(1);
  };

  return (
    <DetailContainer>
      {drinkDetail &&
        drinkDetail.map((item) => {
          return (
            <Fragment key={item.id}>
              <SubTitWrap>
                <SubTitInner>
                  <SubCategoryName>{item.sub_category_name}</SubCategoryName>
                  <Smap
                    name={item.korea_name}
                    categoryName={item.sub_category_name}
                  />
                </SubTitInner>
              </SubTitWrap>
              <ContentsWrap>
                <ProductViewWrap1>
                  <ProductViewPic>
                    <ProductBigPic
                      src={item.img_url}
                      alt={item.korea_name}
                    ></ProductBigPic>
                  </ProductViewPic>
                </ProductViewWrap1>
                <ProductViewWrap2>
                  <ProductDetailBox>
                    <h1>
                      {item.korea_name}
                      <br />
                      <span>{item.english_name}</span>
                      <Badge feel={item.feel} taste={item.taste} />
                    </h1>
                    <p>{item.main_description}</p>
                    <ProductViewInfo>
                      <p>
                        제품 영양 정보
                        <select onChange={(e) => cupSizeHandler(e)}>
                          <option value="0">Tall(톨) / 355ml (12 fl oz)</option>
                          <option value="1">
                            Grande(그란데) / 473ml (16 fl oz)
                          </option>
                        </select>
                      </p>
                      <ProductInfoContent>
                        <ProductNutritionsInfo
                          nutritions={item.size[cupSizeInfo].nutritions}
                        />
                      </ProductInfoContent>
                      {item.allergies && (
                        <ProductAllergy>
                          <p>
                            알레르기 유발요인 :&nbsp;
                            {item.allergies.map(
                              (allergies) => allergies.allergy_name + " "
                            )}
                          </p>
                        </ProductAllergy>
                      )}
                      <CtrlAmount
                        drinkDetail={drinkDetail}
                        setDrinkDetail={setDrinkDetail}
                        name={item.korea_name}
                        cupSize={item.size[cupSizeInfo].size_name}
                        price={item.size[cupSizeInfo].price}
                      />
                    </ProductViewInfo>
                  </ProductDetailBox>
                </ProductViewWrap2>
              </ContentsWrap>
              <ProductViewWrap3>{item.sub_description}</ProductViewWrap3>
            </Fragment>
          );
        })}
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  width: 100%;
  margin-top: 123px;
`;

const SubTitWrap = styled.div`
  width: 100%;
  height: 100px;
`;

const SubTitInner = styled.div`
  width: 60%;
  margin: 0 auto;
  height: 100px;
`;

const SubCategoryName = styled.h1`
  padding: 40px 0 0 0;
  font-size: 1.8em;
`;

const ContentsWrap = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid lightgray;
`;

const ProductViewWrap3 = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-bottom: 85px;
  font-size: 0.9em;
  color: gray;
`;

const ProductViewWrap1 = styled.div`
  width: 45%;
  margin: 0 auto 0 0;
`;

const ProductDetailBox = styled.div`
  display: block;
  h1 {
    margin-bottom: 20px;
    padding-bottom: 48px;
    border-bottom: 2px solid black;
    font-size: 28px;
  }
  span {
    font-size: 0.6em;
    font-weight: lighter;
    color: gray;
  }
  & > p {
    margin-bottom: 20px;
  }
`;

const ProductViewInfo = styled.div`
  & > p {
    padding: 20px 0px 20px 10px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    font-size: 1.2em;

    select {
      width: auto;
      margin: -20px 0;
      margin-right: 10px;
      font-size: 30px;
      border: none;
      background-color: white;
      text-align-last: right;
      font-weight: normal;
      font-size: 20px;

      &:focus {
        outline: none;
      }
    }
  }
`;

const ProductAllergy = styled.div`
  margin: 0 0 23px 0;
  p {
    padding: 20px 11px;
    background-color: ${({ theme }) => theme.basicColor};
    border-radius: 3px;
    font-size: 0.9em;
  }
`;

const ProductViewPic = styled.div``;

const ProductBigPic = styled.img`
  width: 90%;
  height: auto;
`;

const ProductViewWrap2 = styled.div`
  width: 55%;
  margin: 0 0 0 auto;
`;

const ProductInfoContent = styled.div`
  display: flex;
  margin: 20px 0;
  ul {
    width: 100%;
    border-right: 1px dotted lightgray;
    &:last-child {
      border: none;
    }
    li {
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      margin-bottom: 15px;
      font-size: 0.9em;
      dt {
        width: 200px;
      }
    }
  }
`;
