import { useState } from "react";
import styled, { keyframes } from "styled-components";
import xbutton from "../../assets/xbutton_white.svg";
const Jump = keyframes`
0%{
    margin-bottom:20px;

}
50%{
    margin-bottom:50px;
}
100%{

}
`;
const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  right: 50px;
  bottom: 80px;
  width: 60px;
`;
const EmbracedCircleWrapper = styled.div`
  height: 0px;
  width: 60px;
  transition: height 0.2s linear;
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: flex-end;
  overflow: hidden;
`;
const Pluscircle = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  border-radius: 30px;
  background-color: #002c5f;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.2s linear;
  cursor: pointer;
  position: relative;
  animation: ${Jump} 0.2s 2 ease-in-out;
`;
const Circle = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  border-radius: 30px;
  background-color: #002c5f;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.2s linear;
  cursor: pointer;
  position: relative;
`;
const Balloon = styled.div`
  position: absolute;
  display: flex;
  width: 140px;
  right: 60px;
  z-index: 25;
  align-items: center;
  top: 12px;
  cursor: text;
`;
const Textbox = styled.div`
  width: 120px;
  height: 15px;
  font-family: "HyundaiSansTextKR";
  color: black;
  background-color: white;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
`;
const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 12px solid white;
  border-bottom: 6px solid transparent;
  border-top: 6px solid transparent;
  border-right: 12p solid transparent;
`;
interface IContent {
  onClickFunction?: any;
  isScrolled?: boolean;
}
const EmbracedCircleList = [
  {
    message: "전시차 조회",
    image:
      "https://www.hyundai.com/static/images/model/common/icon-displaycar.png",
  },
  {
    message: "카탈로그 다운로드",
    image:
      "https://www.hyundai.com/static/images/model/common/icon-catalog.png",
  },
  {
    message: "가격표 다운로드",
    image:
      "https://www.hyundai.com/static/images/model/common/icon-priceList.png",
  },
  {
    message: "이달의 구매혜택",
    image: "https://www.hyundai.com/static/images/model/common/icon-gift.png",
  },
];
function SideButton({ onClickFunction, isScrolled }: IContent) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Container>
      <EmbracedCircleWrapper
        style={
          isClicked
            ? { height: "320px", width: "200px" }
            : { height: "0px", width: "60px" }
        }
      >
        {EmbracedCircleList.map((content, index) => {
          return (
            <Circle style={{ backgroundImage: `url(${content.image})` }}>
              <Balloon>
                <Textbox>{content.message}</Textbox>
                <Triangle></Triangle>
              </Balloon>
            </Circle>
          );
        })}
      </EmbracedCircleWrapper>

      <Pluscircle
        style={
          isClicked
            ? {
                backgroundImage: `url(${xbutton})`,
                backgroundColor: "gray",
              }
            : {
                transform: "rotate(45deg)",
                backgroundImage: `url(${xbutton})`,
              }
        }
        onClick={() => {
          setIsClicked((current) => !current);
        }}
      ></Pluscircle>
      <Circle
        style={{
          borderRadius: "0px",
          backgroundColor: "transparent",
          backgroundImage:
            "url(https://www.hyundai.com/static/images/common/button/h_fab_default_beta.svg)",
        }}
      ></Circle>
    </Container>
  );
}
export default SideButton;
