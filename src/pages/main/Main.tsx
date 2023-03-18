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
import * as Model from "./Model.styled";
import * as Elec from "./Elec.styled";
import * as My from "./My.styled";
import * as Shop from "./Shop.styled";
import * as Brand from "./Brand.styled";
import * as Events from "./Events.styled";
import * as News from "./News.styled";
import * as Car from "./Car.styled";
import Navbar from "../../components/molecules/Navbar";

const Wrapper = styled.div`
  margin: 0;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: -0.7px;
  padding: 0;
  width: 100%;
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
      <Navbar></Navbar>
      <Car.Car>
        <Car.CarBg
          src="https://www.hyundai.com/contents/mainbanner/car-bg-w.jpg"
          alt=""
        ></Car.CarBg>
        <Car.CarWrapDiv>
          <Car.CarDiv>
            <Car.CarTitle>The new AVANTE</Car.CarTitle>
            <Car.CarSubtitle>지금, 더 매력적인</Car.CarSubtitle>
            <Car.CarImg
              src="https://www.hyundai.com/contents/mainbanner/grandeur-23fc-w.png"
              alt=""
            ></Car.CarImg>
          </Car.CarDiv>
          <Car.CarDiv>
            <Car.CarTitle></Car.CarTitle>
            <Car.CarSubtitle></Car.CarSubtitle>
          </Car.CarDiv>
          <Car.CarDiv>
            <Car.CarTitle></Car.CarTitle>
            <Car.CarSubtitle></Car.CarSubtitle>
          </Car.CarDiv>
          <Car.CarDiv>
            <Car.CarTitle></Car.CarTitle>
            <Car.CarSubtitle></Car.CarSubtitle>
          </Car.CarDiv>
          <Car.CarDiv>
            <Car.CarTitle></Car.CarTitle>
            <Car.CarSubtitle></Car.CarSubtitle>
          </Car.CarDiv>
          <Car.CarDiv>
            <Car.CarTitle></Car.CarTitle>
            <Car.CarSubtitle></Car.CarSubtitle>
          </Car.CarDiv>
        </Car.CarWrapDiv>
        <Car.CarBtn1></Car.CarBtn1>
        <Car.CarMenu>
          <Car.CarMenuWrapDiv>
            <Car.CarMenuDiv></Car.CarMenuDiv>
            <Car.CarMenuDiv></Car.CarMenuDiv>
          </Car.CarMenuWrapDiv>
        </Car.CarMenu>
      </Car.Car>
      <Section>
        <Title>Model</Title>
        <Subtitle>
          최근 한 달 동안 고객님들이 가장 많이 구매하신 모델입니다.
        </Subtitle>
        <Container>
          <Model.ModelInner1>
            <img
              src="https://www.hyundai.com/static/images/lineUp/SEDAN/GN02_EXT.jpg"
              alt=""
              style={{ width: "100%" }}
            ></img>
          </Model.ModelInner1>
          <Model.ModelInner2>
            <Model.ModelAge>
              <Model.Ages
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
              </Model.Ages>
              <Model.Ages
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
              </Model.Ages>
              <Model.Ages
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
              </Model.Ages>
              <Model.Ages
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
              </Model.Ages>
            </Model.ModelAge>
            <Model.Model1>1위. 디 올 뉴 그랜저 Hybrid</Model.Model1>
            <Model.ModelDiv>
              <Model.ModelDiv2>
                <Model.ModelSmallImg>
                  <img
                    src="https://www.hyundai.com/static/images/lineUp/SEDAN/CN07_EXT.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  ></img>
                </Model.ModelSmallImg>
                <Model.Model2n3>2위. 아반떼</Model.Model2n3>
              </Model.ModelDiv2>
              <Model.ModelDiv2>
                <Model.ModelSmallImg>
                  <img
                    src="https://www.hyundai.com/static/images/lineUp/SUV/NX05_EXT.jpg"
                    alt=""
                    style={{ width: "100%" }}
                  ></img>
                </Model.ModelSmallImg>
                <Model.Model2n3>3위. 투싼</Model.Model2n3>
              </Model.ModelDiv2>
            </Model.ModelDiv>
          </Model.ModelInner2>
        </Container>
      </Section>
      <Section>
        <Title>전기차</Title>
        <Subtitle>
          지구 환경을 품은 현대자동차의 미래형 모빌리티를 경험해보세요.
        </Subtitle>
        <Container style={{ width: "100%", maxWidth: "none" }}>
          <Elec.ElecInner1>
            <img
              src="https://www.hyundai.com/static/images/ev_ioniq6.jpg"
              alt=""
              width="100%"
              height="100%"
            ></img>
          </Elec.ElecInner1>
          <Elec.ElecInner2>
            <Elec.ElecDiv1>
              <Elec.ElecNEW>NEW</Elec.ElecNEW>
              <Elec.ElecTitle>아이오닉 6</Elec.ElecTitle>
              <Elec.ElecText1>내가 만드는 세상</Elec.ElecText1>
              <Elec.ElecMore>자세히 보기</Elec.ElecMore>
            </Elec.ElecDiv1>
            <Elec.ElecDiv2>
              <Elec.ElecNetwork>충전소&서비스 네트워크</Elec.ElecNetwork>
              <Elec.ElecText2>
                고객님의 계신 곳 근처의 충전소 및 서비스 네트워크를
                안내해드립니다.
              </Elec.ElecText2>
              <Elec.ElecLink>
                전기차
                <RightBtn
                  style={{ borderColor: " #002c5f", marginRight: "25px" }}
                ></RightBtn>
              </Elec.ElecLink>
              <Elec.ElecLink>
                수소전기차
                <RightBtn style={{ borderColor: " #002c5f" }}></RightBtn>
              </Elec.ElecLink>
            </Elec.ElecDiv2>
            <Elec.ElecImg></Elec.ElecImg>
          </Elec.ElecInner2>
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
          <My.MyInner1>
            <My.MyInner1WrapDiv>
              <My.MyInner1Div
                ref={(element) => {
                  MyDiv.current[0] = element;
                }}
                style={{
                  background:
                    "url(https://www.hyundai.com/static/images/main_myhyundai_home.jpg) right bottom no-repeat",
                  backgroundSize: "100%",
                }}
              >
                <My.MyInner1DivTitle>홈</My.MyInner1DivTitle>
                <My.MyInner1DivText>
                  보유 차량 정보에 따른 맞춤 정보형 UI 통해 제공
                </My.MyInner1DivText>
                <My.MyInner1DivMore>
                  자세히 보기{" "}
                  <RightBtn style={{ borderColor: " #002c5f" }}></RightBtn>
                </My.MyInner1DivMore>
              </My.MyInner1Div>
              <My.MyInner1DivLine
                ref={(element) => {
                  MyDiv.current[1] = element;
                }}
              ></My.MyInner1DivLine>
              <My.MyInner1Div
                ref={(element) => {
                  MyDiv.current[2] = element;
                }}
                style={{
                  background:
                    "url(https://www.hyundai.com/static/images/main_myhyundai_garage.jpg) right bottom no-repeat",
                  backgroundSize: "100%",
                }}
              >
                <My.MyInner1DivTitle>차고</My.MyInner1DivTitle>
                <My.MyInner1DivText>
                  차량정보 및 유지비 관리를 포함한 쉬운 차량 관리
                </My.MyInner1DivText>
                <My.MyInner1DivMore>
                  자세히 보기{" "}
                  <RightBtn style={{ borderColor: " #002c5f" }}></RightBtn>
                </My.MyInner1DivMore>
              </My.MyInner1Div>
              <My.MyInner1DivLine
                ref={(element) => {
                  MyDiv.current[3] = element;
                }}
                style={{ opacity: "0" }}
              ></My.MyInner1DivLine>
              <My.MyInner1Div
                ref={(element) => {
                  MyDiv.current[4] = element;
                }}
                style={{
                  background:
                    "url(https://www.hyundai.com/static/images/main_myhyundai_shop.jpg) right bottom no-repeat",
                  backgroundSize: "100%",
                }}
              >
                <My.MyInner1DivTitle>Shop</My.MyInner1DivTitle>
                <My.MyInner1DivText>
                  마이현대 대표 커머스 현대Shop과의 연계
                </My.MyInner1DivText>
                <My.MyInner1DivMore>
                  자세히 보기{" "}
                  <RightBtn style={{ borderColor: " #002c5f" }}></RightBtn>
                </My.MyInner1DivMore>
              </My.MyInner1Div>
              <My.MyInner1DivLine
                ref={(element) => {
                  MyDiv.current[5] = element;
                }}
              ></My.MyInner1DivLine>
              <My.MyInner1Div
                ref={(element) => {
                  MyDiv.current[6] = element;
                }}
                style={{
                  background:
                    "url(https://www.hyundai.com/static/images/main_myhyundai_service.jpg) right bottom no-repeat",
                  backgroundSize: "100%",
                }}
              >
                <My.MyInner1DivTitle>서비스</My.MyInner1DivTitle>
                <My.MyInner1DivText>
                  정비를 포함한 다양한 차량 관련 서비스
                </My.MyInner1DivText>
                <My.MyInner1DivMore>
                  자세히 보기{" "}
                  <RightBtn style={{ borderColor: " #002c5f" }}></RightBtn>
                </My.MyInner1DivMore>
              </My.MyInner1Div>
            </My.MyInner1WrapDiv>
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
          </My.MyInner1>
          <My.MyInner2>
            <My.MyInner2Title>마이현대 APP</My.MyInner2Title>
            <My.MyInner2text>
              당신의 카라이프를 책임질 현대자동차 대표 앱 myHyundai를
              만나보세요.
            </My.MyInner2text>
            <My.MyInner2Link>
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
            </My.MyInner2Link>
          </My.MyInner2>
        </Container>
        <My.MyBtn>
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
        </My.MyBtn>
      </Section>
      <Section>
        <Title>현대 shop</Title>
        <Subtitle>
          현대자동차 공식 온라인몰에서 다양한 상품을 확인해보세요.
        </Subtitle>
        <Container>
          <Shop.ShopInner1A>
            <img
              src="https://www.hyundai.com/contents/attach-1/2023/03/shop_story_01.jpg"
              alt=""
              style={{ width: "100%", display: "block" }}
            ></img>
          </Shop.ShopInner1A>
          <Shop.ShopInner1B>
            <img
              src="https://www.hyundai.com/contents/attach-1/2023/03/shop_story_02.jpg"
              alt=""
              style={{ width: "100%", display: "block" }}
            ></img>
          </Shop.ShopInner1B>
          <Shop.ShopInner1C>
            <img
              src="https://www.hyundai.com/contents/attach-1/2023/03/shop_story_03.jpg"
              alt=""
              style={{ width: "100%", display: "block" }}
            ></img>
          </Shop.ShopInner1C>
        </Container>
        <Container>
          <Shop.ShopInner2
            style={{
              backgroundColor: "#f6f3f2",
              width: "20%",
              height: "288px",
              cursor: "auto",
            }}
          >
            <Shop.ShopInner2LeftTitle>현대 Shop Best</Shop.ShopInner2LeftTitle>
            <Shop.ShopInner2LeftText>
              지금 현대Shop에서 인기 있는 상품이에요
            </Shop.ShopInner2LeftText>
            <Shop.ShopInner2LeftLink>
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
            </Shop.ShopInner2LeftLink>
          </Shop.ShopInner2>
          <Shop.ShopInner2>
            <Shop.ShopInner2Img>
              <Shop.ShopInner2Num>1</Shop.ShopInner2Num>
              <img
                src="https://www.hyundai.com/contents/attach-1/2023/03/shop_best_01.jpg"
                alt=""
                style={{ width: "100%", display: "block" }}
              ></img>
            </Shop.ShopInner2Img>
            <Shop.ShopInner2Title>
              [신차필수템] [디테일링] 괴물흡입력 17,000Pa BLDC 핸디형 무선청소기
            </Shop.ShopInner2Title>
            <Shop.ShopInner2Price>
              <Shop.ShopInner2Sale>
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
              </Shop.ShopInner2Sale>
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
            </Shop.ShopInner2Price>
          </Shop.ShopInner2>
          <Shop.ShopInner2>
            <Shop.ShopInner2Img>
              <Shop.ShopInner2Num>2</Shop.ShopInner2Num>
              <img
                src="https://www.hyundai.com/contents/attach-1/2023/03/shop_best_02.jpg"
                alt=""
                style={{ width: "100%", display: "block" }}
              ></img>
            </Shop.ShopInner2Img>
            <Shop.ShopInner2Title>
              [안방그릴] 연기 잡는 전기그릴 시즌4 AB701MF (전용가방＋필터 포함)
            </Shop.ShopInner2Title>
            <Shop.ShopInner2Price>
              <Shop.ShopInner2Sale>
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
              </Shop.ShopInner2Sale>
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
            </Shop.ShopInner2Price>
          </Shop.ShopInner2>
          <Shop.ShopInner2>
            <Shop.ShopInner2Img>
              <Shop.ShopInner2Num>3</Shop.ShopInner2Num>
              <img
                src="https://www.hyundai.com/contents/attach-1/2023/03/shop_best_03.jpg"
                alt=""
                style={{ width: "100%", display: "block" }}
              ></img>
            </Shop.ShopInner2Img>
            <Shop.ShopInner2Title>
              [샤오토] SUV 트렁크 매트 풀커버
            </Shop.ShopInner2Title>
            <Shop.ShopInner2Price>
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
            </Shop.ShopInner2Price>
          </Shop.ShopInner2>
          <Shop.ShopInner2>
            <Shop.ShopInner2Img>
              <Shop.ShopInner2Num>4</Shop.ShopInner2Num>
              <img
                src="https://www.hyundai.com/contents/attach-1/2023/03/shop_best_04.jpg"
                alt=""
                style={{ width: "100%", display: "block" }}
              ></img>
            </Shop.ShopInner2Img>
            <Shop.ShopInner2Title>
              [미락] 바이오 3세대 진공 쌀통 20kg SM-22A20R
            </Shop.ShopInner2Title>
            <Shop.ShopInner2Price>
              <Shop.ShopInner2Sale>
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
              </Shop.ShopInner2Sale>
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
            </Shop.ShopInner2Price>
          </Shop.ShopInner2>
        </Container>
      </Section>
      <Section>
        <Title>Brand</Title>
        <Subtitle>
          지속가능한 미래로의 연결을 추구하는 현대자동차의 브랜드 캠페인을
          만나보세요.
        </Subtitle>
        <Container>
          <Brand.BrandInner
            onMouseOver={() => {
              BrandDiv.current[0].style.opacity = "1";
              BrandImg.current[0].style.transform = "scale(1.2)";
            }}
            onMouseLeave={() => {
              BrandDiv.current[0].style.opacity = "0";
              BrandImg.current[0].style.transform = "scale(1)";
            }}
          >
            <Brand.BrandInnerText
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
            </Brand.BrandInnerText>
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
          </Brand.BrandInner>
          <Brand.BrandInner
            onMouseOver={() => {
              BrandDiv.current[1].style.opacity = "1";
              BrandImg.current[1].style.transform = "scale(1.2)";
            }}
            onMouseLeave={() => {
              BrandDiv.current[1].style.opacity = "0";
              BrandImg.current[1].style.transform = "scale(1)";
            }}
          >
            <Brand.BrandInnerText
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
            </Brand.BrandInnerText>
            <img
              ref={(element) => {
                BrandImg.current[1] = element;
              }}
              src="https://www.hyundai.com/contents/attach-1/2023/02/brand_02_for_tomorrow_W.jpg"
              alt=""
              style={{ width: "100%", display: "block", transition: "0.4s" }}
            ></img>
          </Brand.BrandInner>
          <Brand.BrandInner
            onMouseOver={() => {
              BrandDiv.current[2].style.opacity = "1";
              BrandImg.current[2].style.transform = "scale(1.2)";
            }}
            onMouseLeave={() => {
              BrandDiv.current[2].style.opacity = "0";
              BrandImg.current[2].style.transform = "scale(1)";
            }}
          >
            <Brand.BrandInnerText
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
            </Brand.BrandInnerText>
            <img
              ref={(element) => {
                BrandImg.current[2] = element;
              }}
              src="https://www.hyundai.com/contents/attach-1/2023/02/brand_03_ioniq5robotaxis_w.jpg"
              alt=""
              style={{ width: "100%", display: "block", transition: "0.4s" }}
            ></img>
          </Brand.BrandInner>
          <Brand.BrandInner
            onMouseOver={() => {
              BrandDiv.current[3].style.opacity = "1";
              BrandImg.current[3].style.transform = "scale(1.2)";
            }}
            onMouseLeave={() => {
              BrandDiv.current[3].style.opacity = "0";
              BrandImg.current[3].style.transform = "scale(1)";
            }}
          >
            <Brand.BrandInnerText
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
            </Brand.BrandInnerText>
            <img
              ref={(element) => {
                BrandImg.current[3] = element;
              }}
              src="https://www.hyundai.com/contents/attach-1/2023/02/brand_04_hyundaikidsmotorshow_w.jpg"
              alt=""
              style={{ width: "100%", display: "block", transition: "0.4s" }}
            ></img>
          </Brand.BrandInner>
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
          <Events.EventsInner>
            <Events.EventsWrapDiv>
              <Events.EventsDiv
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
                <Events.EventsImg>
                  <Events.EventsInnerText
                    ref={(element) => {
                      EventText.current[0] = element;
                    }}
                  >
                    자세히 보기 +
                  </Events.EventsInnerText>
                  <img
                    src="https://www.hyundai.com/content/dam/hyundai/kr/ko/data/event/2023/03/10/event-myhyundai-soccer-match-ticket-eco-vehicles-banner-739x489.png"
                    alt=""
                    style={{ width: "100%", display: "block" }}
                  ></img>
                </Events.EventsImg>
                <Events.EventsInnerTitle>
                  마이현대가 국가대표 축구경기 1등석 초대권 쏜다!
                </Events.EventsInnerTitle>
                <Events.EventsInnerSubtitle>
                  마이현대에서 전기수소차 구매보조금 조회하고 1등석에서 A매치
                  직관하자!
                </Events.EventsInnerSubtitle>
                <Events.EventsInnerDate>
                  2023-03-14 ~ 2023-03-20
                </Events.EventsInnerDate>
              </Events.EventsDiv>
              <Events.EventsDiv
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
                <Events.EventsImg>
                  <Events.EventsInnerText
                    ref={(element) => {
                      EventText.current[1] = element;
                    }}
                  >
                    자세히 보기 +
                  </Events.EventsInnerText>
                  <img
                    src="https://www.hyundai.com/content/dam/hyundai/kr/ko/data/event/2023/03/08/event-2023-the-new-avante-is-coming-seoul-mobility-show-banner-739x489.jpg"
                    alt=""
                    style={{ width: "100%", display: "block" }}
                  ></img>
                </Events.EventsImg>
                <Events.EventsInnerTitle>
                  The new AVANTE 정보 알림 서비스
                </Events.EventsInnerTitle>
                <Events.EventsInnerSubtitle>
                  The new AVANTE 소식도 받고, 서울 모빌리티 쇼 티켓도
                  받아가세요!
                </Events.EventsInnerSubtitle>
                <Events.EventsInnerDate>
                  2023-03-13 ~ 2023-03-20
                </Events.EventsInnerDate>
              </Events.EventsDiv>
              <Events.EventsDiv
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
                <Events.EventsImg>
                  <Events.EventsInnerText
                    ref={(element) => {
                      EventText.current[2] = element;
                    }}
                  >
                    자세히 보기 +
                  </Events.EventsInnerText>
                  <img
                    src="https://www.hyundai.com/content/dam/hyundai/kr/ko/data/event/2023/03/06/event-lg-bestshop-use-bluemembers-point-reward-benefit-banner-739x489.png"
                    alt=""
                    style={{ width: "100%", display: "block" }}
                  ></img>
                </Events.EventsImg>
                <Events.EventsInnerTitle>
                  LG전자 베스트샵 포인트 리워드 EVENT
                </Events.EventsInnerTitle>
                <Events.EventsInnerSubtitle>
                  블루멤버스 포인트 사용하고 리워드 받자!
                </Events.EventsInnerSubtitle>
                <Events.EventsInnerDate>
                  2023-03-08 ~ 2023-03-31
                </Events.EventsInnerDate>
              </Events.EventsDiv>
              <Events.EventsDiv
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
                <Events.EventsImg>
                  <Events.EventsInnerText
                    ref={(element) => {
                      EventText.current[3] = element;
                    }}
                  >
                    자세히 보기 +
                  </Events.EventsInnerText>
                  <img
                    src="https://www.hyundai.com/content/dam/hyundai/kr/ko/data/event/2023/03/02/event-bluemembers-1years-anniversary-hyundaishop-banner-739x489.jpg"
                    alt=""
                    style={{ width: "100%", display: "block" }}
                  ></img>
                </Events.EventsImg>
                <Events.EventsInnerTitle>
                  현대샵 1주년 기념 삼행시 이벤트
                </Events.EventsInnerTitle>
                <Events.EventsInnerSubtitle>
                  센스 있는 삼행시 쓰고 푸짐한 상품 받자!
                </Events.EventsInnerSubtitle>
                <Events.EventsInnerDate>
                  2023-03-07 ~ 2023-03-31
                </Events.EventsInnerDate>
              </Events.EventsDiv>
              <Events.EventsDiv
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
                <Events.EventsImg>
                  <Events.EventsInnerText
                    ref={(element) => {
                      EventText.current[4] = element;
                    }}
                  >
                    자세히 보기 +
                  </Events.EventsInnerText>
                  <img
                    src="https://www.hyundai.com/content/dam/hyundai/kr/ko/data/event/2023/02/28/event-hc-purchase-benefits-202303-banner-739x489.jpg"
                    alt=""
                    style={{ width: "100%", display: "block" }}
                  ></img>
                </Events.EventsImg>
                <Events.EventsInnerTitle>
                  3월 신차 구매 혜택
                </Events.EventsInnerTitle>
                <Events.EventsInnerSubtitle>
                  Hyundai Mobility카드만의 구매 프로그램
                </Events.EventsInnerSubtitle>
                <Events.EventsInnerDate>
                  2023-03-02 ~ 2023-03-31
                </Events.EventsInnerDate>
              </Events.EventsDiv>
              <Events.EventsDiv
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
                <Events.EventsImg>
                  <Events.EventsInnerText
                    ref={(element) => {
                      EventText.current[5] = element;
                    }}
                  >
                    자세히 보기 +
                  </Events.EventsInnerText>
                  <img
                    src="https://www.hyundai.com/content/dam/hyundai/kr/ko/data/event/2023/02/28/event-app-yesdrive-benefit-only-hmc-2023-mar-banner-739x489.png"
                    alt=""
                    style={{ width: "100%", display: "block" }}
                  ></img>
                </Events.EventsImg>
                <Events.EventsInnerTitle>
                  현대자동차가 준비한 운전결심만의 전용혜택!
                </Events.EventsInnerTitle>
                <Events.EventsInnerSubtitle>
                  운전결심! 하고 최대 197만원+α 상당의 혜택을 받으세요!
                </Events.EventsInnerSubtitle>
                <Events.EventsInnerDate>
                  2023-03-02 ~ 2023-03-31
                </Events.EventsInnerDate>
              </Events.EventsDiv>
            </Events.EventsWrapDiv>
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
          </Events.EventsInner>
        </Container>
        <Events.EventsBtn>
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
        </Events.EventsBtn>
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
          <News.NewsInner
            onMouseOver={() => {
              NewsDiv.current[0].style.opacity = "1";
              NewsImg.current[0].style.transform = "scale(1.2)";
            }}
            onMouseLeave={() => {
              NewsDiv.current[0].style.opacity = "0";
              NewsImg.current[0].style.transform = "scale(1)";
            }}
          >
            <News.NewsInnerText
              ref={(element) => {
                NewsDiv.current[0] = element;
              }}
            >
              KONA | 디지털 월드 프리미어 | 현대자동차
            </News.NewsInnerText>
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
          </News.NewsInner>
          <News.NewsInner
            onMouseOver={() => {
              NewsDiv.current[1].style.opacity = "1";
              NewsImg.current[1].style.transform = "scale(1.2)";
            }}
            onMouseLeave={() => {
              NewsDiv.current[1].style.opacity = "0";
              NewsImg.current[1].style.transform = "scale(1)";
            }}
          >
            <News.NewsInnerText
              ref={(element) => {
                NewsDiv.current[1] = element;
              }}
            >
              IONIQ 6 | HSMR_아이오닉 6의 소리 | 현대자동차
            </News.NewsInnerText>
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
          </News.NewsInner>
          <News.NewsInner
            onMouseOver={() => {
              NewsDiv.current[2].style.opacity = "1";
              NewsImg.current[2].style.transform = "scale(1.2)";
            }}
            onMouseLeave={() => {
              NewsDiv.current[2].style.opacity = "0";
              NewsImg.current[2].style.transform = "scale(1)";
            }}
          >
            <News.NewsInnerText
              ref={(element) => {
                NewsDiv.current[2] = element;
              }}
            >
              CASPER | 캐스퍼 그리기 대회 - 대상 수상작 | 현대자동차
            </News.NewsInnerText>
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
          </News.NewsInner>
          <News.NewsInner
            onMouseOver={() => {
              NewsDiv.current[3].style.opacity = "1";
              NewsImg.current[3].style.transform = "scale(1.2)";
            }}
            onMouseLeave={() => {
              NewsDiv.current[3].style.opacity = "0";
              NewsImg.current[3].style.transform = "scale(1)";
            }}
          >
            <News.NewsInnerText
              ref={(element) => {
                NewsDiv.current[3] = element;
              }}
            >
              CASPER | 현대자동차 TAP: CASPER | 현대자동차
            </News.NewsInnerText>
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
          </News.NewsInner>
        </Container>
      </Section>
      <Footer></Footer>
    </Wrapper>
  );
}

export default Main;
