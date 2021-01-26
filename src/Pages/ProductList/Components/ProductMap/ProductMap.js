import React from "react";
import Product from "../Product/Product";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ProductMap({ products, checkedMarkNames }) {
  return (
    <ProductMapWrap>
      {products.map((product) => {
        // [조건] 상세 분류 버튼 중 무엇을 체크 했는가?
        const isNewChecked = checkedMarkNames.includes("신규 출시된 메뉴");
        const isSeasonChecked = checkedMarkNames.includes(
          "한정기간 출시되는 시즌성 메뉴"
        );

        // [조건] 각 상품의 뉴/시즌이 true 인가?
        const isNewProduct = product.isnew === true;
        const isSeasonProduct = product.isseason === true;

        // [상품 보여줄 수 있는 경우의 수]
        const canShowProduct =
          (!isNewChecked && !isSeasonChecked) ||
          (isNewChecked && isNewProduct) ||
          (isSeasonChecked && isSeasonProduct);

        if (!canShowProduct) return null;

        return (
          <Div>
            <Link to={`/productDetail/${product.id}`}>
              <Product
                id={product.id}
                image={product.image}
                isnew={product.isnew}
                isseason={product.isseason}
                title={product.title}
              />
            </Link>
          </Div>
        );
      })}
    </ProductMapWrap>
  );
}

const Div = styled.div`
  width: 25%;
`;

const ProductMapWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
