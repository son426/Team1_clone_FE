import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../../components/molecules/Footer";
import ProgressBar from "../../components/molecules/ProgressBar";
import * as S from "./CarouselBtn.styled";
import RightBtn from "./RightBtn";
import tag0 from "../../assets/tag1.png";
import tag1 from "../../assets/tag2.png";
import tag2 from "../../assets/tag3.png";
import tag3 from "../../assets/tag4.png";

const Wrapper = styled.div`
  margin: 0;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: -0.7px;
  padding: 0;
  width: 100%;
`;

const MainCar = styled.div`
  width: 100%;
  height: 300px;
`;

const Section = styled.div`
  width: 100%;
  height: fit-content;
  text-align: center;
  font-size: 40px;
  padding-top: 140px;
  color: #666;
  letter-spacing: -0.7px;
`;

const Title = styled.div`
  font-size: 44px;
  color: #000;
`;

const Subtitle = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin: 40px 0 0;
`;

const Container = styled.div`
  width: calc(100vw - 60px);
  max-width: 1120px;
  margin: 60px auto 0;
  height: fit-content;
  display: flex;
  justify-content: space-between;
`;

const ModelInner1 = styled.div`
  width: 51%;
  position: relative;
  cursor: pointer;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    content: "1위";
    width: 60px;
    height: 60px;
    background: #007fa8;
    font-size: 20px;
    letter-spacing: -0.24px;
    color: #fff;
    line-height: 60px;
  }
`;

const ModelInner2 = styled.div`
  width: 43%;
  position: relative;
`;

const ModelAge = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: left;
`;

const Ages = styled.li`
  display: inline-block;
  border-right: 1px solid #999;
  color: #666;
  line-height: 100%;
  padding: 0 15px;
  font-size: 16px;
  font-weight: 300;
  margin-top: 10px;
`;

const Model1 = styled.div`
  text-align: left;
  font-size: 40px;
  color: #000;
  margin-top: 25px;
  letter-spacing: -1.2px;
  cursor: pointer;
`;

const ModelDiv = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  display: flex;
  align-content: space-between;
  justify-content: space-between;
`;

const ModelDiv2 = styled.div`
  width: 47%;
`;

const ModelSmallImg = styled.div`
  width: 100%;
  cursor: pointer;
`;

const Model2n3 = styled.div`
  width: 100%;
  text-align: left;
  font-size: 18px;
  padding-bottom: 20px;
  color: #000;
  cursor: pointer;
`;

const ElecInner1 = styled.div`
  width: 67%;
`;

const ElecInner2 = styled.div`
  width: 33%;
  position: relative;
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  flex-direction: column;
  padding: 2vw 2.61vw 6.36vw 3vw;
  background: #f7f3f2;
  text-align: left;
`;

const ElecDiv1 = styled.div`
  width: 100%;
  height: fit-content;
`;

const ElecNEW = styled.div`
  background-color: #007fa8;
  border: 1px solid #007fa8;
  color: #fff;
  padding: 4px 5px 3px;
  font-size: 11px;
  display: inline-block;
  font-weight: 400;
  line-height: 1;
`;

const ElecTitle = styled.div`
  font-size: 44px;
  color: #000;
  line-height: 58px;
  margin: 8px 0 6px;
`;

const ElecText1 = styled.div`
  font-size: 16px;
  line-height: 30px;
  color: #000;
  font-weight: 500;
`;

const ElecMore = styled.div`
  margin-top: 2.6vw;
  width: 120px;
  height: 40px;
  font-size: 15px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  background: #002c5f;
  line-height: 35px;
  font-weight: 500;
`;

const ElecDiv2 = styled.div`
  width: 100%;
  height: fit-content;
  z-index: 1;
`;

const ElecNetwork = styled.div`
  font-size: 24px;
  color: #000;
  line-height: 34px;
`;

const ElecText2 = styled.div`
  font-size: 16px;
  line-height: 30px;
  color: #666;
  font-weight: 500;
  margin: 6px 0 3px;
`;

const ElecLink = styled.div`
  color: #002c5f;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

const ElecImg = styled.div`
  position: absolute;
  right: 2.6vw;
  bottom: 2.6vw;
  display: block;
  content: "";
  width: 200px;
  height: 100px;
  background: url(https://www.hyundai.com/static/images/ev_icon_w.jpg) no-repeat;
`;

const MyInner1 = styled.div`
  width: 795px;
  height: 440px;
  border: 1px solid #ccc;
  overflow: scroll;
  overflow: hidden;
`;

const MyInner1WrapDiv = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  overflow-x: scroll;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
`;

const MyInner1Div = styled.div`
  width: 397px;
  height: 100%;
  text-align: left;
  transition: 0.3s ease-in-out;
`;

const MyInner1DivTitle = styled.div`
  margin-top: 32px;
  font-size: 30px;
  padding-left: 40px;
  color: #000;
`;

const MyInner1DivText = styled.div`
  margin-top: 5px;
  font-size: 16px;
  padding-left: 40px;
  font-weight: 500;
  color: #666;
`;

const MyInner1DivMore = styled.div`
  margin-top: 32px;
  font-size: 16px;
  padding-left: 40px;
  color: #002c5f;
  cursor: pointer;
`;

const MyInner1DivLine = styled.div`
  width: 0.5px;
  margin-top: 40px;
  height: calc(100% - 40px);
  background-color: #e5e5e5;
  transition: 0.3s ease-in-out;
`;

const MyInner2 = styled.div`
  position: relative;
  width: 290px;
  height: 442px;
  text-align: left;
  background-color: #f6f3f2;
  &:before {
    position: absolute;
    right: 40px;
    bottom: 36px;
    display: block;
    content: "";
    width: 120px;
    height: 120px;
    background: url(https://www.hyundai.com/static/images/re_hyundaishop_app.png)
      no-repeat;
  }
`;

const MyInner2Title = styled.div`
  padding: 35px 35px 0;
  font-size: 30px;
  color: #000;
`;

const MyInner2text = styled.div`
  padding: 5px 35px;
  font-size: 16px;
  color: #666;
  word-break: keep-all;
  line-height: 30px;
  font-weight: 450;
  vertical-align: middle;
`;

const MyInner2Link = styled.div`
  padding: 30px 20px 0 35px;
  font-size: 16px;
  color: #012d5e;
  cursor: pointer;
`;

const ShopInner1A = styled.div`
  width: 31%;
  height: fit-content;
  text-align: left;
  cursor: pointer;
  position: relative;
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.5);
    font-size: 18px;
    color: #fff;
    line-height: 30px;
    text-align: left;
    content: "봄타는 자동차를 위한 봄맞이 차량관리 TIP";
  }
`;

const ShopInner1B = styled.div`
  width: 31%;
  height: fit-content;
  text-align: left;
  cursor: pointer;
  position: relative;
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.5);
    font-size: 18px;
    color: #fff;
    line-height: 30px;
    text-align: left;
    content: "봄 맞이 전기자전거 라이딩을 위한 필수 체크리스트";
  }
`;

const ShopInner1C = styled.div`
  width: 31%;
  height: fit-content;
  text-align: left;
  cursor: pointer;
  position: relative;
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.5);
    font-size: 18px;
    color: #fff;
    line-height: 30px;
    text-align: left;
    content: "색다른 재미!? 이색 데이트 즐겨보기~";
  }
`;

const ShopInner2 = styled.div`
  width: 17%;
  height: fit-content;
  text-align: left;
  display: block;
  cursor: pointer;
`;

const ShopInner2LeftTitle = styled.div`
  padding: 35px 30px 0;
  font-size: 24px;
  color: #000;
`;

const ShopInner2LeftText = styled.div`
  padding: 10px 30px;
  font-size: 16px;
  color: #666;
  word-break: keep-all;
  line-height: 30px;
  font-weight: 450;
  vertical-align: middle;
`;

const ShopInner2LeftLink = styled.div`
  padding: 20px 25px 0 30px;
  font-size: 16px;
  color: #012d5e;
  cursor: pointer;
`;

const ShopInner2Img = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid #e5e5e5;
`;

const ShopInner2Num = styled.div`
  align-items: center;
  width: 34px;
  height: 34px;
  background: #007fa8;
  font-size: 19px;
  font-weight: 600;
  line-height: 30px;
  color: #fff;
  text-align: center;
  z-index: 1;
  position: absolute;
`;

const ShopInner2Title = styled.div`
  margin: 15px 0 0;
  font-size: 16px;
  letter-spacing: -0.24px;
  color: #000;
  line-height: 26px;
  font-weight: 500;
  height: 52px;
  width: 100%;
  word-break: keep-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  vertical-align: middle;
`;

const ShopInner2Sale = styled.div`
  display: flex;
  font-size: 16px;
  letter-spacing: -0.24px;
  color: #000;
  line-height: 26px;
  color: #e63312;
  font-weight: 600;
`;

const ShopInner2Price = styled.div`
  display: flex;
  margin: 7px 0 0;
  font-size: 16px;
  letter-spacing: -0.24px;
  color: #000;
  line-height: 26px;
  font-weight: 500;
`;

const BrandInner = styled.div`
  width: 22%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

const BrandInnerText = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  font-size: 18px;
  color: #fff;
  line-height: 30px;
  text-align: center;
  opacity: 0;
  transition: 0.2s;
  z-index: 10;
`;

const EventsInner = styled.div`
  width: 95vw;
  width: calc((100vw - (100vw - 100%)) * 0.95);
  height: fit-content;
  text-align: left;
  overflow: hidden;
`;

const EventsWrapDiv = styled.div`
  width: 190vw;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  justify-content: space-between;
`;

const EventsDiv = styled.div`
  height: 100%;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  width: 30vw;
  height: fit-content;
  text-align: left;
  overflow: hidden;
`;

const EventsImg = styled.div`
  width: 100%;
  height: fit-content;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

const EventsInnerText = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  font-size: 22px;
  color: #fff;
  line-height: 30px;
  text-align: center;
  transition: 0.2s;
  z-index: 10;
  opacity: 0;
`;

const EventsInnerTitle = styled.div`
  width: 95%;
  margin-top: 28px;
  font-size: 24px;
  font-weight: 600;
  color: #000;
`;

const EventsInnerSubtitle = styled.div`
  width: 95%;
  margin-top: 10px;
  margin-bottom: 22px;
  font-size: 16px;
  font-weight: 400;
`;

const EventsInnerDate = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
`;

const NewsInner = styled.div`
  width: 24.75%;
  aspect-ratio: 1;
  border: 1px solid black;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

const NewsInnerText = styled.div`
  background: rgba(0, 44, 95, 0.9);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  font-size: 16px;
  color: #fff;
  line-height: 30px;
  text-align: center;
  opacity: 0;
  transition: 0.2s;
  z-index: 10;
  font-weight: 400;
  letter-spacing: -0.5px;
`;

const MyBtn = styled.div`
  bottom: 0;
  width: 100%;
  margin-top: 30px;
  display: inline-flex;
  justify-content: left;
  width: calc(100vw - 60px);
  max-width: 1120px;
`;

const EventsBtn = styled.div`
  bottom: 0;
  width: 100%;
  margin-top: 45px;
  display: inline-flex;
  justify-content: center;
`;

const Hashtag = styled.div`
  background-color: #f6f3f2;
  width: fit-content;
  height: 30px;
  border-radius: 15px;
  color: #000;
  padding: 0 13px;
  margin: 0 6px 6px 0;
  line-height: 27px;
  font-size: 14px;
  display: inline-block;
  font-weight: 500;
  letter-spacing: -0.4px;
  cursor: pointer;
`;

function Main() {
  const ModelAges = useRef<any>([]);
  const MyRight = useRef<any>(null);
  const MyLeft = useRef<any>(null);
  const MyDiv = useRef<any>([]);
  const MyArrowLeft = useRef<any>(null);
  const MyArrowRight = useRef<any>(null);
  const BrandDiv = useRef<any>([]);
  const BrandImg = useRef<any>([]);
  const EventRight = useRef<any>(null);
  const EventLeft = useRef<any>(null);
  const EventDiv = useRef<any>([]);
  const EventText = useRef<any>([]);
  const Tags = useRef<any>([]);
  const NewsDiv = useRef<any>([]);
  const NewsImg = useRef<any>([]);

  const [tagN, setN] = useState(0);
  useEffect(() => {
    Tags.current[`${tagN}`].style.backgroundColor = "#007fa8";
    Tags.current[`${tagN}`].style.color = "#fff";
  }, [tagN]);

  return (
    <Wrapper>
      <ProgressBar />
      <MainCar></MainCar>
      <Section>
        <Title>Model</Title>
        <Subtitle>
          최근 한 달 동안 고객님들이 가장 많이 구매하신 모델입니다.
        </Subtitle>
        <Container>
          <ModelInner1>
            <img
              src="https://www.hyundai.com/static/images/lineUp/SEDAN/GN02_EXT.jpg"
              alt=""
              style={{ width: "100%" }}
            ></img>
          </ModelInner1>
          <ModelInner2>
            <ModelAge>
              <Ages
                ref={(element) => {
                  ModelAges.current[0] = element;
                }}
                onClick={() => {
                  ModelAges.current[0].style.color = "#007fa8";
                  ModelAges.current[1].style.color = "#666";
                  ModelAges.current[2].style.color = "#666";
                  ModelAges.current[3].style.color = "#666";
                }}
                style={{ paddingLeft: "0", color: "#007fa8" }}
              >
                <span style={{ cursor: "pointer" }}>전체</span>
              </Ages>
              <Ages
                ref={(element) => {
                  ModelAges.current[1] = element;
                }}
                onClick={() => {
                  ModelAges.current[1].style.color = "#007fa8";
                  ModelAges.current[0].style.color = "#666";
                  ModelAges.current[2].style.color = "#666";
                  ModelAges.current[3].style.color = "#666";
                }}
              >
                <span style={{ cursor: "pointer" }}>2~30대</span>
              </Ages>
              <Ages
                ref={(element) => {
                  ModelAges.current[2] = element;
                }}
                onClick={() => {
                  ModelAges.current[2].style.color = "#007fa8";
                  ModelAges.current[0].style.color = "#666";
                  ModelAges.current[1].style.color = "#666";
                  ModelAges.current[3].style.color = "#666";
                }}
              >
                <span style={{ cursor: "pointer" }}>40대</span>
              </Ages>
              <Ages
                ref={(element) => {
                  ModelAges.current[3] = element;
                }}
                onClick={() => {
                  ModelAges.current[3].style.color = "#007fa8";
                  ModelAges.current[0].style.color = "#666";
                  ModelAges.current[1].style.color = "#666";
                  ModelAges.current[2].style.color = "#666";
                }}
                style={{
                  borderRight: "none",
                }}
              >
                <span style={{ cursor: "pointer" }}>50대</span>
              </Ages>
            </ModelAge>
            <Model1>1위. 디 올 뉴 그랜저 Hybrid</Model1>
            <ModelDiv>
              <ModelDiv2>
                <ModelSmallImg>
                  <img
                    src="https://www.hyundai.com/static/images/lineUp/SEDAN/CN07_EXT.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  ></img>
                </ModelSmallImg>
                <Model2n3>2위. 아반떼</Model2n3>
              </ModelDiv2>
              <ModelDiv2>
                <ModelSmallImg>
                  <img
                    src="https://www.hyundai.com/static/images/lineUp/SUV/NX05_EXT.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  ></img>
                </ModelSmallImg>
                <Model2n3>3위. 투싼</Model2n3>
              </ModelDiv2>
            </ModelDiv>
          </ModelInner2>
        </Container>
      </Section>
      <Section>
        <Title>전기차</Title>
        <Subtitle>
          지구 환경을 품은 현대자동차의 미래형 모빌리티를 경험해보세요.
        </Subtitle>
        <Container style={{ width: "100%", maxWidth: "none" }}>
          <ElecInner1>
            <img
              src="https://www.hyundai.com/static/images/ev_ioniq6.jpg"
              alt=""
              width="100%"
              height="100%"
            ></img>
          </ElecInner1>
          <ElecInner2>
            <ElecDiv1>
              <ElecNEW>NEW</ElecNEW>
              <ElecTitle>아이오닉 6</ElecTitle>
              <ElecText1>내가 만드는 세상</ElecText1>
              <ElecMore>자세히 보기</ElecMore>
            </ElecDiv1>
            <ElecDiv2>
              <ElecNetwork>충전소&서비스 네트워크</ElecNetwork>
              <ElecText2>
                고객님의 계신 곳 근처의 충전소 및 서비스 네트워크를
                안내해드립니다.
              </ElecText2>
              <ElecLink>
                전기차
                <RightBtn
                  style={{ borderColor: " #002c5f", marginRight: "25px" }}
                ></RightBtn>
              </ElecLink>
              <ElecLink>
                수소전기차
                <RightBtn style={{ borderColor: " #002c5f" }}></RightBtn>
              </ElecLink>
            </ElecDiv2>
            <ElecImg></ElecImg>
          </ElecInner2>
        </Container>
      </Section>
      <Section>
        <Title>myHyundai</Title>
        <Subtitle>
          이제, 단순히 APP를 넘어서 당신의 카라이프를 책임질
          <br />
          '라이프 플랫폼 myHyundai'를 만나보세요.
        </Subtitle>
        <Container>
          <MyInner1>
            <MyInner1WrapDiv>
              <MyInner1Div
                ref={(element) => {
                  MyDiv.current[0] = element;
                }}
                style={{
                  background:
                    "url(https://www.hyundai.com/static/images/main_myhyundai_home.jpg) right bottom no-repeat",
                  backgroundSize: "100%",
                }}
              >
                <MyInner1DivTitle>홈</MyInner1DivTitle>
                <MyInner1DivText>
                  보유 차량 정보에 따른 맞춤 정보형 UI 통해 제공
                </MyInner1DivText>
                <MyInner1DivMore>
                  자세히 보기{" "}
                  <RightBtn style={{ borderColor: " #002c5f" }}></RightBtn>
                </MyInner1DivMore>
              </MyInner1Div>
              <MyInner1DivLine
                ref={(element) => {
                  MyDiv.current[1] = element;
                }}
              ></MyInner1DivLine>
              <MyInner1Div
                ref={(element) => {
                  MyDiv.current[2] = element;
                }}
                style={{
                  background:
                    "url(https://www.hyundai.com/static/images/main_myhyundai_garage.jpg) right bottom no-repeat",
                  backgroundSize: "100%",
                }}
              >
                <MyInner1DivTitle>차고</MyInner1DivTitle>
                <MyInner1DivText>
                  차량정보 및 유지비 관리를 포함한 쉬운 차량 관리
                </MyInner1DivText>
                <MyInner1DivMore>
                  자세히 보기{" "}
                  <RightBtn style={{ borderColor: " #002c5f" }}></RightBtn>
                </MyInner1DivMore>
              </MyInner1Div>
              <MyInner1DivLine
                ref={(element) => {
                  MyDiv.current[3] = element;
                }}
                style={{ opacity: "0" }}
              ></MyInner1DivLine>
              <MyInner1Div
                ref={(element) => {
                  MyDiv.current[4] = element;
                }}
                style={{
                  background:
                    "url(https://www.hyundai.com/static/images/main_myhyundai_shop.jpg) right bottom no-repeat",
                  backgroundSize: "100%",
                }}
              >
                <MyInner1DivTitle>Shop</MyInner1DivTitle>
                <MyInner1DivText>
                  마이현대 대표 커머스 현대Shop과의 연계
                </MyInner1DivText>
                <MyInner1DivMore>
                  자세히 보기{" "}
                  <RightBtn style={{ borderColor: " #002c5f" }}></RightBtn>
                </MyInner1DivMore>
              </MyInner1Div>
              <MyInner1DivLine
                ref={(element) => {
                  MyDiv.current[5] = element;
                }}
              ></MyInner1DivLine>
              <MyInner1Div
                ref={(element) => {
                  MyDiv.current[6] = element;
                }}
                style={{
                  background:
                    "url(https://www.hyundai.com/static/images/main_myhyundai_service.jpg) right bottom no-repeat",
                  backgroundSize: "100%",
                }}
              >
                <MyInner1DivTitle>서비스</MyInner1DivTitle>
                <MyInner1DivText>
                  정비를 포함한 다양한 차량 관련 서비스
                </MyInner1DivText>
                <MyInner1DivMore>
                  자세히 보기{" "}
                  <RightBtn style={{ borderColor: " #002c5f" }}></RightBtn>
                </MyInner1DivMore>
              </MyInner1Div>
            </MyInner1WrapDiv>
            <S.CarouselArrow
              ref={MyArrowLeft}
              style={{ transform: "translateY(-240px)", opacity: "0" }}
              onClick={() => {
                MyDiv.current[0].style.transform = "translateX(0%)";
                MyDiv.current[1].style.transform = "translateX(0%)";
                MyDiv.current[2].style.transform = "translateX(0%)";
                MyDiv.current[3].style.transform = "translateX(0%)";
                MyDiv.current[4].style.transform = "translateX(0%)";
                MyDiv.current[5].style.transform = "translateX(0%)";
                MyDiv.current[6].style.transform = "translateX(0%)";
                MyLeft.current.style.backgroundColor = "#007fa8";
                MyRight.current.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
                MyArrowLeft.current.style.opacity = "0";
                MyArrowRight.current.style.opacity = "1";
              }}
            >
              <S.CarouselArrowLeft></S.CarouselArrowLeft>
            </S.CarouselArrow>
            <S.CarouselArrow
              ref={MyArrowRight}
              style={{ transform: "translateY(-240px) translateX(751px)" }}
              onClick={() => {
                MyDiv.current[0].style.transform = "translateX(-200%)";
                MyDiv.current[1].style.transform = "translateX(-794px)";
                MyDiv.current[2].style.transform = "translateX(-200%)";
                MyDiv.current[3].style.transform = "translateX(-794px)";
                MyDiv.current[4].style.transform = "translateX(-200%)";
                MyDiv.current[5].style.transform = "translateX(-794px)";
                MyDiv.current[6].style.transform = "translateX(-200%)";
                MyRight.current.style.backgroundColor = "#007fa8";
                MyLeft.current.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
                MyArrowLeft.current.style.opacity = "1";
                MyArrowRight.current.style.opacity = "0";
              }}
            >
              <S.CarouselArrowRight></S.CarouselArrowRight>
            </S.CarouselArrow>
          </MyInner1>
          <MyInner2>
            <MyInner2Title>마이현대 APP</MyInner2Title>
            <MyInner2text>
              당신의 카라이프를 책임질 현대자동차 대표 앱 myHyundai를
              만나보세요.
            </MyInner2text>
            <MyInner2Link>
              APP 다운로드
              <span
                className="material-symbols-outlined"
                style={{
                  marginLeft: "7px",
                  fontSize: "17.5px",
                  fontWeight: "700",
                  verticalAlign: "-2.5px",
                }}
              >
                open_in_new
              </span>
            </MyInner2Link>
          </MyInner2>
        </Container>
        <MyBtn>
          <span
            style={{
              paddingLeft: "375px",
              display: "flex",
            }}
          >
            <S.CarouselBtn
              ref={MyLeft}
              onClick={() => {
                MyDiv.current[0].style.transform = "translateX(0%)";
                MyDiv.current[1].style.transform = "translateX(0%)";
                MyDiv.current[2].style.transform = "translateX(0%)";
                MyDiv.current[3].style.transform = "translateX(0%)";
                MyDiv.current[4].style.transform = "translateX(0%)";
                MyDiv.current[5].style.transform = "translateX(0%)";
                MyDiv.current[6].style.transform = "translateX(0%)";
                MyLeft.current.style.backgroundColor = "#007fa8";
                MyRight.current.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
                MyArrowLeft.current.style.opacity = "0";
                MyArrowRight.current.style.opacity = "1";
              }}
              style={{ backgroundColor: "#007fa8" }}
            ></S.CarouselBtn>
            <S.CarouselBtn
              ref={MyRight}
              onClick={() => {
                MyDiv.current[0].style.transform = "translateX(-200%)";
                MyDiv.current[1].style.transform = "translateX(-794px)";
                MyDiv.current[2].style.transform = "translateX(-200%)";
                MyDiv.current[3].style.transform = "translateX(-794px)";
                MyDiv.current[4].style.transform = "translateX(-200%)";
                MyDiv.current[5].style.transform = "translateX(-794px)";
                MyDiv.current[6].style.transform = "translateX(-200%)";
                MyRight.current.style.backgroundColor = "#007fa8";
                MyLeft.current.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
                MyArrowLeft.current.style.opacity = "1";
                MyArrowRight.current.style.opacity = "0";
              }}
            ></S.CarouselBtn>
          </span>
        </MyBtn>
      </Section>
      <Section>
        <Title>현대 shop</Title>
        <Subtitle>
          현대자동차 공식 온라인몰에서 다양한 상품을 확인해보세요.
        </Subtitle>
        <Container>
          <ShopInner1A>
            <img
              src="https://www.hyundai.com/contents/attach-1/2023/03/shop_story_01.jpg"
              alt=""
              style={{ width: "100%", display: "block" }}
            ></img>
          </ShopInner1A>
          <ShopInner1B>
            <img
              src="https://www.hyundai.com/contents/attach-1/2023/03/shop_story_02.jpg"
              alt=""
              style={{ width: "100%", display: "block" }}
            ></img>
          </ShopInner1B>
          <ShopInner1C>
            <img
              src="https://www.hyundai.com/contents/attach-1/2023/03/shop_story_03.jpg"
              alt=""
              style={{ width: "100%", display: "block" }}
            ></img>
          </ShopInner1C>
        </Container>
        <Container>
          <ShopInner2
            style={{
              backgroundColor: "#f6f3f2",
              width: "20%",
              height: "288px",
              cursor: "auto",
            }}
          >
            <ShopInner2LeftTitle>현대 Shop Best</ShopInner2LeftTitle>
            <ShopInner2LeftText>
              지금 현대Shop에서 인기 있는 상품이에요
            </ShopInner2LeftText>
            <ShopInner2LeftLink>
              더보기
              <span
                className="material-symbols-outlined"
                style={{
                  marginLeft: "7px",
                  fontSize: "17.5px",
                  fontWeight: "700",
                  verticalAlign: "-2.5px",
                }}
              >
                open_in_new
              </span>
            </ShopInner2LeftLink>
          </ShopInner2>
          <ShopInner2>
            <ShopInner2Img>
              <ShopInner2Num>1</ShopInner2Num>
              <img
                src="https://www.hyundai.com/contents/attach-1/2023/03/shop_best_01.jpg"
                alt=""
                style={{ width: "100%", display: "block" }}
              ></img>
            </ShopInner2Img>
            <ShopInner2Title>
              [신차필수템] [디테일링] 괴물흡입력 17,000Pa BLDC 핸디형 무선청소기
            </ShopInner2Title>
            <ShopInner2Price>
              <ShopInner2Sale>
                34%{" "}
                <span
                  style={{
                    fontSize: "10px",
                    margin: "0 3px",
                    lineHeight: "30px",
                  }}
                >
                  {" "}
                  ↓{" "}
                </span>
              </ShopInner2Sale>
              <span
                style={{
                  fontWeight: "700",
                  fontSize: "20px",
                  marginRight: "3px",
                  lineHeight: "22px",
                }}
              >
                66,900
              </span>{" "}
              원
            </ShopInner2Price>
          </ShopInner2>
          <ShopInner2>
            <ShopInner2Img>
              <ShopInner2Num>2</ShopInner2Num>
              <img
                src="https://www.hyundai.com/contents/attach-1/2023/03/shop_best_02.jpg"
                alt=""
                style={{ width: "100%", display: "block" }}
              ></img>
            </ShopInner2Img>
            <ShopInner2Title>
              [안방그릴] 연기 잡는 전기그릴 시즌4 AB701MF (전용가방＋필터 포함)
            </ShopInner2Title>
            <ShopInner2Price>
              <ShopInner2Sale>
                14%{" "}
                <span
                  style={{
                    fontSize: "10px",
                    margin: "0 3px",
                    lineHeight: "30px",
                  }}
                >
                  {" "}
                  ↓{" "}
                </span>
              </ShopInner2Sale>
              <span
                style={{
                  fontWeight: "700",
                  fontSize: "20px",
                  marginRight: "3px",
                  lineHeight: "22px",
                }}
              >
                188,000
              </span>{" "}
              원
            </ShopInner2Price>
          </ShopInner2>
          <ShopInner2>
            <ShopInner2Img>
              <ShopInner2Num>3</ShopInner2Num>
              <img
                src="https://www.hyundai.com/contents/attach-1/2023/03/shop_best_03.jpg"
                alt=""
                style={{ width: "100%", display: "block" }}
              ></img>
            </ShopInner2Img>
            <ShopInner2Title>[샤오토] SUV 트렁크 매트 풀커버</ShopInner2Title>
            <ShopInner2Price>
              <span
                style={{
                  fontWeight: "700",
                  fontSize: "20px",
                  margin: "0 3px",
                  lineHeight: "22px",
                }}
              >
                81,000
              </span>{" "}
              원
            </ShopInner2Price>
          </ShopInner2>
          <ShopInner2>
            <ShopInner2Img>
              <ShopInner2Num>4</ShopInner2Num>
              <img
                src="https://www.hyundai.com/contents/attach-1/2023/03/shop_best_04.jpg"
                alt=""
                style={{ width: "100%", display: "block" }}
              ></img>
            </ShopInner2Img>
            <ShopInner2Title>
              [미락] 바이오 3세대 진공 쌀통 20kg SM-22A20R
            </ShopInner2Title>
            <ShopInner2Price>
              <ShopInner2Sale>
                16%{" "}
                <span
                  style={{
                    fontSize: "10px",
                    margin: "0 3px",
                    lineHeight: "30px",
                  }}
                >
                  {" "}
                  ↓{" "}
                </span>
              </ShopInner2Sale>
              <span
                style={{
                  fontWeight: "700",
                  fontSize: "20px",
                  marginRight: "3px",
                  lineHeight: "22px",
                }}
              >
                109,900
              </span>{" "}
              원
            </ShopInner2Price>
          </ShopInner2>
        </Container>
      </Section>
      <Section>
        <Title>Brand</Title>
        <Subtitle>
          지속가능한 미래로의 연결을 추구하는 현대자동차의 브랜드 캠페인을
          만나보세요.
        </Subtitle>
        <Container>
          <BrandInner
            onMouseOver={() => {
              BrandDiv.current[0].style.opacity = "1";
              BrandImg.current[0].style.transform = "scale(1.2)";
            }}
            onMouseLeave={() => {
              BrandDiv.current[0].style.opacity = "0";
              BrandImg.current[0].style.transform = "scale(1)";
            }}
          >
            <BrandInnerText
              ref={(element) => {
                BrandDiv.current[0] = element;
              }}
            >
              로보틱스
              <br />
              <span
                style={{
                  fontWeight: "450",
                  fontSize: "16px",
                  marginTop: "3px",
                }}
              >
                당신을 향한 모빌리티
              </span>
            </BrandInnerText>
            <img
              ref={(element) => {
                BrandImg.current[0] = element;
              }}
              src="https://www.hyundai.com/contents/attach-1/2023/02/brand_01_mobility_for_you_w.jpg"
              alt=""
              style={{
                width: "100%",
                display: "block",
                transition: "0.4s",
              }}
            ></img>
          </BrandInner>
          <BrandInner
            onMouseOver={() => {
              BrandDiv.current[1].style.opacity = "1";
              BrandImg.current[1].style.transform = "scale(1.2)";
            }}
            onMouseLeave={() => {
              BrandDiv.current[1].style.opacity = "0";
              BrandImg.current[1].style.transform = "scale(1)";
            }}
          >
            <BrandInnerText
              ref={(element) => {
                BrandDiv.current[1] = element;
              }}
            >
              파트너십
              <br />
              <span
                style={{
                  fontWeight: "450",
                  fontSize: "16px",
                  marginTop: "3px",
                }}
              >
                현대차 x UNDP 2022
              </span>
            </BrandInnerText>
            <img
              ref={(element) => {
                BrandImg.current[1] = element;
              }}
              src="https://www.hyundai.com/contents/attach-1/2023/02/brand_02_for_tomorrow_W.jpg"
              alt=""
              style={{ width: "100%", display: "block", transition: "0.4s" }}
            ></img>
          </BrandInner>
          <BrandInner
            onMouseOver={() => {
              BrandDiv.current[2].style.opacity = "1";
              BrandImg.current[2].style.transform = "scale(1.2)";
            }}
            onMouseLeave={() => {
              BrandDiv.current[2].style.opacity = "0";
              BrandImg.current[2].style.transform = "scale(1)";
            }}
          >
            <BrandInnerText
              ref={(element) => {
                BrandDiv.current[2] = element;
              }}
            >
              미래 모빌리티 서비스
              <br />
              <span
                style={{
                  fontWeight: "450",
                  fontSize: "16px",
                  marginTop: "3px",
                }}
              >
                아이오닉 5 기반의 레벨 4 자율주행 자동차
              </span>
            </BrandInnerText>
            <img
              ref={(element) => {
                BrandImg.current[2] = element;
              }}
              src="https://www.hyundai.com/contents/attach-1/2023/02/brand_03_ioniq5robotaxis_w.jpg"
              alt=""
              style={{ width: "100%", display: "block", transition: "0.4s" }}
            ></img>
          </BrandInner>
          <BrandInner
            onMouseOver={() => {
              BrandDiv.current[3].style.opacity = "1";
              BrandImg.current[3].style.transform = "scale(1.2)";
            }}
            onMouseLeave={() => {
              BrandDiv.current[3].style.opacity = "0";
              BrandImg.current[3].style.transform = "scale(1)";
            }}
          >
            <BrandInnerText
              ref={(element) => {
                BrandDiv.current[3] = element;
              }}
            >
              탄소중립 비전
              <br />
              <span
                style={{
                  fontWeight: "450",
                  fontSize: "16px",
                  marginTop: "3px",
                }}
              >
                아이들의 상상력을 현실로: 현대 키즈 모터쇼
              </span>
            </BrandInnerText>
            <img
              ref={(element) => {
                BrandImg.current[3] = element;
              }}
              src="https://www.hyundai.com/contents/attach-1/2023/02/brand_04_hyundaikidsmotorshow_w.jpg"
              alt=""
              style={{ width: "100%", display: "block", transition: "0.4s" }}
            ></img>
          </BrandInner>
        </Container>
      </Section>
      <Section>
        <Title>Events</Title>
        <Subtitle>
          고객님을 위한 스페셜한 이벤트를 통해 즐거운 행운과 경품을 만나보세요.
        </Subtitle>
        <Container
          style={{
            width: "100%",
            maxWidth: "none",
            justifyContent: "space-evenly",
          }}
        >
          <EventsInner>
            <EventsWrapDiv>
              <EventsDiv
                ref={(element) => {
                  EventDiv.current[0] = element;
                }}
                onMouseOver={() => {
                  EventText.current[0].style.opacity = "1";
                }}
                onMouseLeave={() => {
                  EventText.current[0].style.opacity = "0";
                }}
              >
                <EventsImg>
                  <EventsInnerText
                    ref={(element) => {
                      EventText.current[0] = element;
                    }}
                  >
                    자세히 보기 +
                  </EventsInnerText>
                  <img
                    src="https://www.hyundai.com/content/dam/hyundai/kr/ko/data/event/2023/03/10/event-myhyundai-soccer-match-ticket-eco-vehicles-banner-739x489.png"
                    alt=""
                    style={{ width: "100%", display: "block" }}
                  ></img>
                </EventsImg>
                <EventsInnerTitle>
                  마이현대가 국가대표 축구경기 1등석 초대권 쏜다!
                </EventsInnerTitle>
                <EventsInnerSubtitle>
                  마이현대에서 전기수소차 구매보조금 조회하고 1등석에서 A매치
                  직관하자!
                </EventsInnerSubtitle>
                <EventsInnerDate>2023-03-14 ~ 2023-03-20</EventsInnerDate>
              </EventsDiv>
              <EventsDiv
                ref={(element) => {
                  EventDiv.current[1] = element;
                }}
                onMouseOver={() => {
                  EventText.current[1].style.opacity = "1";
                }}
                onMouseLeave={() => {
                  EventText.current[1].style.opacity = "0";
                }}
              >
                <EventsImg>
                  <EventsInnerText
                    ref={(element) => {
                      EventText.current[1] = element;
                    }}
                  >
                    자세히 보기 +
                  </EventsInnerText>
                  <img
                    src="https://www.hyundai.com/content/dam/hyundai/kr/ko/data/event/2023/03/08/event-2023-the-new-avante-is-coming-seoul-mobility-show-banner-739x489.jpg"
                    alt=""
                    style={{ width: "100%", display: "block" }}
                  ></img>
                </EventsImg>
                <EventsInnerTitle>
                  The new AVANTE 정보 알림 서비스
                </EventsInnerTitle>
                <EventsInnerSubtitle>
                  The new AVANTE 소식도 받고, 서울 모빌리티 쇼 티켓도
                  받아가세요!
                </EventsInnerSubtitle>
                <EventsInnerDate>2023-03-13 ~ 2023-03-20</EventsInnerDate>
              </EventsDiv>
              <EventsDiv
                ref={(element) => {
                  EventDiv.current[2] = element;
                }}
                onMouseOver={() => {
                  EventText.current[2].style.opacity = "1";
                }}
                onMouseLeave={() => {
                  EventText.current[2].style.opacity = "0";
                }}
              >
                <EventsImg>
                  <EventsInnerText
                    ref={(element) => {
                      EventText.current[2] = element;
                    }}
                  >
                    자세히 보기 +
                  </EventsInnerText>
                  <img
                    src="https://www.hyundai.com/content/dam/hyundai/kr/ko/data/event/2023/03/06/event-lg-bestshop-use-bluemembers-point-reward-benefit-banner-739x489.png"
                    alt=""
                    style={{ width: "100%", display: "block" }}
                  ></img>
                </EventsImg>
                <EventsInnerTitle>
                  LG전자 베스트샵 포인트 리워드 EVENT
                </EventsInnerTitle>
                <EventsInnerSubtitle>
                  블루멤버스 포인트 사용하고 리워드 받자!
                </EventsInnerSubtitle>
                <EventsInnerDate>2023-03-08 ~ 2023-03-31</EventsInnerDate>
              </EventsDiv>
              <EventsDiv
                ref={(element) => {
                  EventDiv.current[3] = element;
                }}
                onMouseOver={() => {
                  EventText.current[3].style.opacity = "1";
                }}
                onMouseLeave={() => {
                  EventText.current[3].style.opacity = "0";
                }}
              >
                <EventsImg>
                  <EventsInnerText
                    ref={(element) => {
                      EventText.current[3] = element;
                    }}
                  >
                    자세히 보기 +
                  </EventsInnerText>
                  <img
                    src="https://www.hyundai.com/content/dam/hyundai/kr/ko/data/event/2023/03/02/event-bluemembers-1years-anniversary-hyundaishop-banner-739x489.jpg"
                    alt=""
                    style={{ width: "100%", display: "block" }}
                  ></img>
                </EventsImg>
                <EventsInnerTitle>
                  현대샵 1주년 기념 삼행시 이벤트
                </EventsInnerTitle>
                <EventsInnerSubtitle>
                  센스 있는 삼행시 쓰고 푸짐한 상품 받자!
                </EventsInnerSubtitle>
                <EventsInnerDate>2023-03-07 ~ 2023-03-31</EventsInnerDate>
              </EventsDiv>
              <EventsDiv
                ref={(element) => {
                  EventDiv.current[4] = element;
                }}
                onMouseOver={() => {
                  EventText.current[4].style.opacity = "1";
                }}
                onMouseLeave={() => {
                  EventText.current[4].style.opacity = "0";
                }}
              >
                <EventsImg>
                  <EventsInnerText
                    ref={(element) => {
                      EventText.current[4] = element;
                    }}
                  >
                    자세히 보기 +
                  </EventsInnerText>
                  <img
                    src="https://www.hyundai.com/content/dam/hyundai/kr/ko/data/event/2023/02/28/event-hc-purchase-benefits-202303-banner-739x489.jpg"
                    alt=""
                    style={{ width: "100%", display: "block" }}
                  ></img>
                </EventsImg>
                <EventsInnerTitle>3월 신차 구매 혜택</EventsInnerTitle>
                <EventsInnerSubtitle>
                  Hyundai Mobility카드만의 구매 프로그램
                </EventsInnerSubtitle>
                <EventsInnerDate>2023-03-02 ~ 2023-03-31</EventsInnerDate>
              </EventsDiv>
              <EventsDiv
                ref={(element) => {
                  EventDiv.current[5] = element;
                }}
                onMouseOver={() => {
                  EventText.current[5].style.opacity = "1";
                }}
                onMouseLeave={() => {
                  EventText.current[5].style.opacity = "0";
                }}
              >
                <EventsImg>
                  <EventsInnerText
                    ref={(element) => {
                      EventText.current[5] = element;
                    }}
                  >
                    자세히 보기 +
                  </EventsInnerText>
                  <img
                    src="https://www.hyundai.com/content/dam/hyundai/kr/ko/data/event/2023/02/28/event-app-yesdrive-benefit-only-hmc-2023-mar-banner-739x489.png"
                    alt=""
                    style={{ width: "100%", display: "block" }}
                  ></img>
                </EventsImg>
                <EventsInnerTitle>
                  현대자동차가 준비한 운전결심만의 전용혜택!
                </EventsInnerTitle>
                <EventsInnerSubtitle>
                  운전결심! 하고 최대 197만원+α 상당의 혜택을 받으세요!
                </EventsInnerSubtitle>
                <EventsInnerDate>2023-03-02 ~ 2023-03-31</EventsInnerDate>
              </EventsDiv>
            </EventsWrapDiv>
            <S.CarouselArrow
              style={{
                display: "relative",
                transform: "translateY(-370px)",
                left: "2.5vw",
              }}
              onClick={() => {
                if (EventDiv.current[0].style.transform === "translateX(0%)") {
                  EventDiv.current[0].style.transform = "translateX(-96vw)";
                  EventDiv.current[1].style.transform = "translateX(-96vw)";
                  EventDiv.current[2].style.transform = "translateX(-96vw)";
                  EventDiv.current[3].style.transform = "translateX(-96vw)";
                  EventDiv.current[4].style.transform = "translateX(-96vw)";
                  EventDiv.current[5].style.transform = "translateX(-96vw)";
                  EventRight.current.style.backgroundColor = "#007fa8";
                  EventLeft.current.style.backgroundColor =
                    "rgba(0, 0, 0, 0.1)";
                } else {
                  EventDiv.current[0].style.transform = "translateX(0%)";
                  EventDiv.current[1].style.transform = "translateX(0%)";
                  EventDiv.current[2].style.transform = "translateX(0%)";
                  EventDiv.current[3].style.transform = "translateX(0%)";
                  EventDiv.current[4].style.transform = "translateX(0%)";
                  EventDiv.current[5].style.transform = "translateX(0%)";
                  EventLeft.current.style.backgroundColor = "#007fa8";
                  EventRight.current.style.backgroundColor =
                    "rgba(0, 0, 0, 0.1)";
                }
              }}
            >
              <S.CarouselArrowLeft></S.CarouselArrowLeft>
            </S.CarouselArrow>
            <S.CarouselArrow
              style={{
                display: "relative",
                transform: "translateY(-370px)",
                right: "2.5vw",
              }}
              onClick={() => {
                if (
                  EventDiv.current[0].style.transform === "translateX(-96vw)"
                ) {
                  EventDiv.current[0].style.transform = "translateX(0%)";
                  EventDiv.current[1].style.transform = "translateX(0%)";
                  EventDiv.current[2].style.transform = "translateX(0%)";
                  EventDiv.current[3].style.transform = "translateX(0%)";
                  EventDiv.current[4].style.transform = "translateX(0%)";
                  EventDiv.current[5].style.transform = "translateX(0%)";
                  EventLeft.current.style.backgroundColor = "#007fa8";
                  EventRight.current.style.backgroundColor =
                    "rgba(0, 0, 0, 0.1)";
                } else {
                  EventDiv.current[0].style.transform = "translateX(-96vw)";
                  EventDiv.current[1].style.transform = "translateX(-96vw)";
                  EventDiv.current[2].style.transform = "translateX(-96vw)";
                  EventDiv.current[3].style.transform = "translateX(-96vw)";
                  EventDiv.current[4].style.transform = "translateX(-96vw)";
                  EventDiv.current[5].style.transform = "translateX(-96vw)";
                  EventRight.current.style.backgroundColor = "#007fa8";
                  EventLeft.current.style.backgroundColor =
                    "rgba(0, 0, 0, 0.1)";
                }
              }}
            >
              <S.CarouselArrowRight></S.CarouselArrowRight>
            </S.CarouselArrow>
          </EventsInner>
        </Container>
        <EventsBtn>
          <S.CarouselBtn
            ref={EventLeft}
            onClick={() => {
              EventDiv.current[0].style.transform = "translateX(0%)";
              EventDiv.current[1].style.transform = "translateX(0%)";
              EventDiv.current[2].style.transform = "translateX(0%)";
              EventDiv.current[3].style.transform = "translateX(0%)";
              EventDiv.current[4].style.transform = "translateX(0%)";
              EventDiv.current[5].style.transform = "translateX(0%)";
              EventLeft.current.style.backgroundColor = "#007fa8";
              EventRight.current.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
            }}
            style={{ backgroundColor: "#007fa8" }}
          ></S.CarouselBtn>
          <S.CarouselBtn
            ref={EventRight}
            onClick={() => {
              EventDiv.current[0].style.transform = "translateX(-96vw)";
              EventDiv.current[1].style.transform = "translateX(-96vw)";
              EventDiv.current[2].style.transform = "translateX(-96vw)";
              EventDiv.current[3].style.transform = "translateX(-96vw)";
              EventDiv.current[4].style.transform = "translateX(-96vw)";
              EventDiv.current[5].style.transform = "translateX(-96vw)";
              EventRight.current.style.backgroundColor = "#007fa8";
              EventLeft.current.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
            }}
          ></S.CarouselBtn>
        </EventsBtn>
      </Section>
      <Section style={{ margin: "0 0 160px" }}>
        <Title>현대자동차 소식</Title>
        <Subtitle>
          <Hashtag
            ref={(element) => {
              Tags.current[0] = element;
            }}
            onClick={() => {
              if (tagN !== 0) {
                Tags.current[`${tagN}`].style.backgroundColor = "#f6f3f2";
                Tags.current[`${tagN}`].style.color = "#000";
              }
              setN(0);
            }}
          >
            #All
          </Hashtag>
          <Hashtag
            ref={(element) => {
              Tags.current[1] = element;
            }}
            onClick={() => {
              if (tagN !== 1) {
                Tags.current[`${tagN}`].style.backgroundColor = "#f6f3f2";
                Tags.current[`${tagN}`].style.color = "#000";
              }
              setN(1);
            }}
          >
            #현대자동차
          </Hashtag>
          <Hashtag
            ref={(element) => {
              Tags.current[2] = element;
            }}
            onClick={() => {
              if (tagN !== 2) {
                Tags.current[`${tagN}`].style.backgroundColor = "#f6f3f2";
                Tags.current[`${tagN}`].style.color = "#000";
              }
              setN(2);
            }}
          >
            #Hyundai_N
          </Hashtag>
          <Hashtag
            onClick={() => {
              if (tagN !== 3) {
                Tags.current[`${tagN}`].style.backgroundColor = "#f6f3f2";
                Tags.current[`${tagN}`].style.color = "#000";
              }
              setN(3);
            }}
            ref={(element) => {
              Tags.current[3] = element;
            }}
          >
            #CASPER
          </Hashtag>
          <Hashtag
            onClick={() => {
              if (tagN !== 4) {
                Tags.current[`${tagN}`].style.backgroundColor = "#f6f3f2";
                Tags.current[`${tagN}`].style.color = "#000";
              }
              setN(4);
            }}
            ref={(element) => {
              Tags.current[4] = element;
            }}
          >
            #TheFutureofMobility
          </Hashtag>
          <Hashtag
            onClick={() => {
              if (tagN !== 5) {
                Tags.current[`${tagN}`].style.backgroundColor = "#f6f3f2";
                Tags.current[`${tagN}`].style.color = "#000";
              }
              setN(5);
            }}
            ref={(element) => {
              Tags.current[5] = element;
            }}
          >
            #about_hyundai
          </Hashtag>
          <Hashtag
            onClick={() => {
              if (tagN !== 6) {
                Tags.current[`${tagN}`].style.backgroundColor = "#f6f3f2";
                Tags.current[`${tagN}`].style.color = "#000";
              }
              setN(6);
            }}
            ref={(element) => {
              Tags.current[6] = element;
            }}
          >
            #친환경
          </Hashtag>
          <Hashtag
            onClick={() => {
              if (tagN !== 7) {
                Tags.current[`${tagN}`].style.backgroundColor = "#f6f3f2";
                Tags.current[`${tagN}`].style.color = "#000";
              }
              setN(7);
            }}
            ref={(element) => {
              Tags.current[7] = element;
            }}
          >
            #BTS
          </Hashtag>
          <Hashtag
            onClick={() => {
              if (tagN !== 8) {
                Tags.current[`${tagN}`].style.backgroundColor = "#f6f3f2";
                Tags.current[`${tagN}`].style.color = "#000";
              }
              setN(8);
            }}
            ref={(element) => {
              Tags.current[8] = element;
            }}
          >
            #IONIQ
          </Hashtag>
        </Subtitle>
        <Container style={{ flexWrap: "wrap" }}>
          <NewsInner
            onMouseOver={() => {
              NewsDiv.current[0].style.opacity = "1";
              NewsImg.current[0].style.transform = "scale(1.2)";
            }}
            onMouseLeave={() => {
              NewsDiv.current[0].style.opacity = "0";
              NewsImg.current[0].style.transform = "scale(1)";
            }}
          >
            <NewsInnerText
              ref={(element) => {
                NewsDiv.current[0] = element;
              }}
            >
              KONA | 디지털 월드 프리미어 | 현대자동차
            </NewsInnerText>
            <img
              ref={(element) => {
                NewsImg.current[0] = element;
              }}
              src={tag0}
              alt=""
              style={{
                width: "100%",
                display: "block",
                transition: "0.5s",
              }}
            ></img>
          </NewsInner>
          <NewsInner
            onMouseOver={() => {
              NewsDiv.current[1].style.opacity = "1";
              NewsImg.current[1].style.transform = "scale(1.2)";
            }}
            onMouseLeave={() => {
              NewsDiv.current[1].style.opacity = "0";
              NewsImg.current[1].style.transform = "scale(1)";
            }}
          >
            <NewsInnerText
              ref={(element) => {
                NewsDiv.current[1] = element;
              }}
            >
              IONIQ 6 | HSMR_아이오닉 6의 소리 | 현대자동차
            </NewsInnerText>
            <img
              ref={(element) => {
                NewsImg.current[1] = element;
              }}
              src={tag1}
              alt=""
              style={{
                width: "100%",
                display: "block",
                transition: "0.5s",
              }}
            ></img>
          </NewsInner>
          <NewsInner
            onMouseOver={() => {
              NewsDiv.current[2].style.opacity = "1";
              NewsImg.current[2].style.transform = "scale(1.2)";
            }}
            onMouseLeave={() => {
              NewsDiv.current[2].style.opacity = "0";
              NewsImg.current[2].style.transform = "scale(1)";
            }}
          >
            <NewsInnerText
              ref={(element) => {
                NewsDiv.current[2] = element;
              }}
            >
              CASPER | 캐스퍼 그리기 대회 - 대상 수상작 | 현대자동차
            </NewsInnerText>
            <img
              ref={(element) => {
                NewsImg.current[2] = element;
              }}
              src={tag2}
              alt=""
              style={{
                width: "100%",
                display: "block",
                transition: "0.5s",
              }}
            ></img>
          </NewsInner>
          <NewsInner
            onMouseOver={() => {
              NewsDiv.current[3].style.opacity = "1";
              NewsImg.current[3].style.transform = "scale(1.2)";
            }}
            onMouseLeave={() => {
              NewsDiv.current[3].style.opacity = "0";
              NewsImg.current[3].style.transform = "scale(1)";
            }}
          >
            <NewsInnerText
              ref={(element) => {
                NewsDiv.current[3] = element;
              }}
            >
              CASPER | 현대자동차 TAP: CASPER | 현대자동차
            </NewsInnerText>
            <img
              ref={(element) => {
                NewsImg.current[3] = element;
              }}
              src={tag3}
              alt=""
              style={{
                width: "100%",
                display: "block",
                transition: "0.5s",
              }}
            ></img>
          </NewsInner>
        </Container>
      </Section>
      <Footer></Footer>
    </Wrapper>
  );
}

export default Main;
