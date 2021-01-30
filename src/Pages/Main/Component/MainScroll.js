import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const MainScroll = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <MainBeanWrap data-aos="fade-up">
        <MainBeanContent>
          <img src="./Images/background.jpg" alt="커피 사진" />
          <MainBeanText>
            <MainImage data-aos="fade-left">
              <img src="./Images/stabugs3.png" alt="favorite 사진" />
            </MainImage>
            <img src="Images/favorite.png" alt="pick" />
            <MainStrongText data-aos="fade-left">
              다양한 메뉴를 STARBUGS에서 즐겨보세요.
            </MainStrongText>
            <MainNormalText>
              STARBUGS 만의 특별함을 경험할 수 있는 최상의 선택 음료
            </MainNormalText>
            <MainNormalText>
              STARBUGS 커피와 완벽한 어울림을 자랑하는 푸드
            </MainNormalText>
            <MainNormalText>
              다양한 시도와 디자인으로 가치를 더하는 상품
            </MainNormalText>
            <DetailBtn data-aos="fade-left">
              <Link to="/detail">DETAIL</Link>
            </DetailBtn>
          </MainBeanText>
        </MainBeanContent>
      </MainBeanWrap>
      <BottomWrap>
        <BottomImage>
          <img src="./Images/stabugs1.png" alt="Store 사진" />
        </BottomImage>
        <BottomText>
          <BottomStrongText>
            STARBUGS를 가까이에서 경험해보세요.
          </BottomStrongText>
          <BottomNormalText>
            고객님과 가장 가까이 있는 매장을 찾아보세요!
          </BottomNormalText>
          <BottomBtn>
            <Link data-aos="fade-left" to="/detail">
              STORE
            </Link>
          </BottomBtn>
        </BottomText>
      </BottomWrap>
    </>
  );
};

export default MainScroll;

const MainBeanWrap = styled.section`
  background-color: #1e3932;
`;

const MainBeanContent = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 1000px;
  }
`;

const MainBeanText = styled.div`
  position: absolute;
  top: 23%;
  right: 12%;
  left: 20%;
  color: white;
  line-height: 1.5;
  img {
    width: 500px;
    height: 400px;
    margin-bottom: 40px;
  }
`;

const MainNormalText = styled.p`
  font-size: 15px;
`;

const MainStrongText = styled.h2`
  font-size: 30px;
`;

const MainImage = styled.div`
  position: absolute;
  left: 600px;
`;

const DetailBtn = styled.div`
  width: 121px;
  height: 36px;
  line-height: 34px;
  margin: 30px 2px 0 0;
  font-size: 14px;
  text-align: center;

  a {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 2px solid white;
    color: white;
  }
`;

const BottomWrap = styled.div`
  position: relative;
  height: 500px;
  background-color: #1e3932;
  img {
    width: 350px;
  }
`;

const BottomImage = styled.div`
  width: 900px;
  margin: 0 auto;
  padding: 100px 0px;
`;

const BottomText = styled.div`
  position: absolute;
  top: 33%;
  right: 22%;
  line-height: 1.4;
  color: white;
`;

const BottomStrongText = styled.h2`
  font-size: 33px;
`;

const BottomNormalText = styled.p`
  font-size: 23px;
`;

const BottomBtn = styled.div`
  width: 200px;
  height: 36px;
  line-height: 34px;
  margin: 30px 2px 0 0;
  font-size: 14px;
  text-align: center;

  a {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 2px solid white;
    color: white;
  }
`;
