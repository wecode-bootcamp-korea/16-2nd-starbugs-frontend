import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { IMAGELIST } from "./Maindata";
import { Link } from "react-router-dom";
import MainScroll from "./Component/MainScroll";
// import { MAIN_URL } from "../../config";
import { FaArrowCircleUp } from "react-icons/fa";

const Main = () => {
  const [imageIdx, setImageIdx] = useState(0);
  const [imageList, setImageList] = useState([]);
  const [showScroll, setShowScorll] = useState(false);
  const [logInStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    setImageList(IMAGELIST);
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", barHandler);

    return () => window.removeEventListener("scroll", barHandler);
  });

  // useEffect(() => {
  //   fetch(`${MAIN_URL}`, {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((res) => setImageList(res.my_urls.slice(0, 3)));
  // }, []);

  const handleSlider = (idx) => {
    let sliderClass = "nextSlide";
    if (idx === imageIdx) {
      sliderClass = "currentSlide";
    }
    if (
      idx === imageIdx - 1 ||
      (idx === imageList.length - 1 && imageIdx === 0)
    ) {
      sliderClass = "prevSlide";
    }
    return sliderClass;
  };

  const sliderPrev = () => {
    setImageIdx(imageIdx === 0 ? imageList.length - 1 : imageIdx - 1);
  };

  const slideNext = () => {
    setImageIdx((imageIdx + 1) % imageList.length);
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 1000) {
      setShowScorll(true);
    } else if (showScroll && window.pageYOffset <= 1000) {
      setShowScorll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollBottom = () => {
    window.scrollTo({ top: 2500, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  let barHandler = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = `${totalScroll / windowHeight}`;
    const progressBar = document.getElementById("progressBar");

    progressBar.style.transform = `scale(${scroll}, 1)`;
    progressBar.style.opacity = `${scroll}`;
  };

  const checkIsLoggedIn = () => {
    setLoginStatus({
      isLoggedIn: localStorage.getItem("Kakao_token") ? true : false,
    });
  };

  return (
    <div>
      <BarContainer>
        <div id="progressBar"></div>
      </BarContainer>
      <TopWrap>
        <MainWrap>
          {logInStatus ? (
            <></>
          ) : (
            IMAGELIST.map((image, idx) => {
              const slideClass = handleSlider(idx);
              return (
                <img
                  key={idx}
                  className={`slider_img ${slideClass}`}
                  src={image.img}
                  alt="배너 사진"
                />
              );
            })
          )}
          <SliderLeftBtn onClick={sliderPrev}>◀</SliderLeftBtn>
          <SliderRightBtn onClick={slideNext}>▶︎</SliderRightBtn>
        </MainWrap>
        <FixLayout>
          {showScroll ? (
            <FaArrowCircleUp
              className="scrollTop"
              onClick={scrollTop}
              style={{
                position: "absolute",
                height: "50px",
                width: "50px",
                right: "2%",
                display: "block",
                color: "white",
                zIndex: "11",
              }}
            ></FaArrowCircleUp>
          ) : (
            <i
              onClick={scrollBottom}
              class={"fas fa-arrow-circle-down fa-3x"}
              style={{ right: "10px" }}
            ></i>
          )}
        </FixLayout>
      </TopWrap>
      <LineNotice>
        <NoticeLeft></NoticeLeft>
        <NoticeRight></NoticeRight>
        <NoticeBg>
          <NoticeBgl>
            <NoticeInner>
              <NoticeInLeft>
                <span>NOTICE</span>
              </NoticeInLeft>
            </NoticeInner>
          </NoticeBgl>
          <NoticeBgr>
            <NoticeInRight>
              <NoticeLink>
                <NoticeTitle>
                  <span>STARBUGS PROMOTION</span>
                  <i class="far fa-arrow-alt-circle-down"></i>
                </NoticeTitle>
              </NoticeLink>
            </NoticeInRight>
          </NoticeBgr>
        </NoticeBg>
      </LineNotice>
      <RewardWrap>
        <RewardInner>
          <RewardLogo>
            <div>
              <i class="fas fa-mug-hot fa-8x" style={{ color: "white" }}></i>
            </div>
          </RewardLogo>
          <RewardContent>
            <InfoContent>
              <InfoText>
                <h2>STARBUGS만의 특별한 혜택, STARBUGS 리워드</h2>
                <p>
                  STARBUGS 회원이세요? 로그인을 통해 나만의 리워드를
                  확인해보세요.
                </p>
                <p>
                  STARBUGS 회원이 아니세요? 가입을 통해 리워드 혜택을 즐기세요.
                </p>
              </InfoText>
              <BtnSingIn>
                <Link to="/login">LOGIN</Link>
              </BtnSingIn>
            </InfoContent>
            <GiftText>
              <p>
                카드를 등록하여 리워드 회원이 되신 후, 첫 구매를 하시면
                무료쿠폰을 드립니다.
              </p>
              <p>STARBUGS를 사랑해주셔서 감사합니다.</p>
              <BtnGift>
                <Link to="/detail">DETAIL</Link>
              </BtnGift>
            </GiftText>
          </RewardContent>
        </RewardInner>
      </RewardWrap>
      <MainScroll />
      <BottomWrap></BottomWrap>
    </div>
  );
};

export default Main;

const BarContainer = styled.div`
  position: fixed;
  z-index: 14;
  background: rgba(255, 255, 255, 0, 05);
  width: 100%;
  top: 0;
  left: 0;

  #progressBar {
    height: 5px;
    background: linear-gradient(to left, rgb(36, 56, 50), green);
    transform-origin: top left;
    transform: scale(0, 0);
    opacity: 0;
  }
`;

const TopWrap = styled.section`
  position: relative;
  overflow: hidden;
`;

const MainWrap = styled.div`
  position: relative;
  height: 1000px;
  width: 100%;

  .slider_img {
    position: absolute;
    width: 100%;
    height: 1000px;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
    opacity: 0;
    object-fit: cover;

    &.currentSlide {
      opacity: 1;
      transform: translateX(0);
    }
    &.prevSlide {
      transform: translateX(-100%);
    }
    &.nextSlide {
      transform: translateX(100%);
    }
  }
`;

const FixLayout = styled.div`
  position: fixed;
  top: 250px;
  right: 3%;
  z-index: 999;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  i {
    color: black;
  }
  span {
    margin: 10px 5px;
    height: 25px;
    font-size: 15px;
    color: black;
  }
`;

const SliderRightBtn = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  font-size: 24px;

  transform: translateY(-50%);
  color: black;
  border-radius: 10px;
  top: 50%;
  right: 0;
`;

const SliderLeftBtn = styled(SliderRightBtn)`
  left: 0;
`;

const LineNotice = styled.section`
  width: 100%;
  position: relative;
  display: flex;
`;

const NoticeLeft = styled.div`
  width: 55%;
  height: 62px;
  background: #111;
`;

const NoticeRight = styled.div`
  width: 45%;
  height: 62px;
  background: #f6f5ef;
`;

const NoticeBg = styled.div`
  display: flex;
  position: absolute;
  width: 960px;
  height: 62px;
  left: 50%;
  margin-left: -480px;
`;

const NoticeBgl = styled.div`
  width: 55%;
  height: 62px;
  color: white;
`;

const NoticeBgr = styled.div`
  position: relative;

  height: 62px;
  margin-left: 200px;
`;

const NoticeInner = styled.div`
  margin: 13px 0 0 20px;
  width: 84%;
`;

const NoticeInLeft = styled.div`
  width: 85%;
  margin-top: 25px;
  cursor: pointer;
  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

const NoticeInRight = styled.div`
  width: 55%;
`;

const NoticeLink = styled.a`
  position: absolute;
  height: 36px;
  top: 23px;
  width: 234px;
  cursor: pointer;
`;

const NoticeTitle = styled.p`
  display: inline;
  height: 17px;
  top: 9px;
  width: 129px;
  font-size: 17px;
  font-weight: bold;
  i {
    margin: 0px 10px;
  }
`;

const RewardWrap = styled.section`
  background-color: #1e3932;
  padding-top: 30px;
  padding-bottom: 40px;
`;

const RewardInner = styled.div`
  display: flex;
  max-width: 1080px;
  margin: 0 auto;
`;

const RewardLogo = styled.div`
  width: 176px;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 20px;
  img {
    width: 173px;
  }
`;

const RewardContent = styled.div`
  width: 70%;
  box-sizing: border-box;
  color: #fff;
  letter-spacing: 0.5px;
`;

const InfoContent = styled.div`
  position: relative;
  margin-bottom: 22px;
  border-bottom: 1px solid #4b715b;
`;

const InfoText = styled.div`
  margin-bottom: 12px;
  h2 {
    line-height: 1.4;
    font-size: 26px;
    font-weight: normal;
  }
  p {
    line-height: 1.4;
    font-size: 18px;
  }
`;

const BtnSingIn = styled.div`
  position: absolute;
  width: 170px;
  text-align: center;
  border-radius: 5px;
  border: 2px solid #fff;
  bottom: 20px;
  right: 0;
  a {
    display: inline-block;
    height: 100%;
    width: 100%;
    font-size: 14px;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    line-height: 36px;
  }
`;

const BtnGift = styled.div`
  position: absolute;
  width: 170px;
  top: 0;
  right: 0;
  line-height: 36px;
  font-size: 14px;
  border: 2px solid #fff;
  border-radius: 5px;
  text-align: center;
  a {
    display: block;
    width: 100%;
    height: 100%;
    color: #fff;
  }
`;

const GiftText = styled.div`
  position: relative;
  p {
    line-height: 1.4;
  }
`;

const BottomWrap = styled.div`
  background-color: #fefefe;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  .scrollTop {
    position: absolute;
    width: 100%;
    bottom: 0px;
    height: 40px;
    z-index: 1000;
    color: #1e3932;
    cursor: pointer;
    border: 1px solid white;
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;
