import styled, { keyframes } from "styled-components";

export const Car = styled.div`
  width: 100%;
  display: block;
  height: 950px;
  background-color: rgb(246, 243, 242);
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const CarWrapDiv = styled.div`
  width: 500%;
  height: 950px;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  width: fit-content;
`;

export const CarDiv = styled.div`
  width: 100vw;
  text-align: left;
  transition: 0.4s ease-in-out;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  height: 950px;
  background-image: url("https://www.hyundai.com/contents/mainbanner/car-bg-w.jpg");
  background-size: 125%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom 100px;
`;

const RtoC = keyframes`
  0% {
    transform: translateX(140%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const CarImg = styled.img`
  width: 88.5%;
  height: fit-content;
  display: block;
  margin: 0 auto;
  margin-top: 47px;
  padding-right: 15px;
  cursor: pointer;
  /* animation-name: ${RtoC};
  animation-duration: 1.7s;
  animation-iteration-count: 1;
  animation-timing-function: ease;
  animation-delay: 0.3s; */
  &.appear {
    animation: ${RtoC} 1.3s ease 1;
  }
`;

export const CarTitle = styled.div`
  width: 1260px;
  height: auto;
  margin: 0 auto;
  text-align: left;
  font-size: 65px;
  padding-left: 6vw;
  margin-top: 135px;
  z-index: 1;
  letter-spacing: 0.8px;
  cursor: pointer;
`;

export const CarSubtitle = styled.div`
  padding-top: 18px;
  font-size: 25px;
  color: #000;
  text-align: left;
  width: 1260px;
  height: auto;
  margin: 0 auto;
  text-align: left;
  padding-left: 6vw;
  z-index: 1;
  font-weight: 500;
  cursor: pointer;
`;

export const CarBtn1 = styled.div`
  position: absolute;
  width: 100%;
  height: 30px;
  top: 740px;
  display: flex;
  z-index: 5;
  justify-content: center;
  align-items: center;
`;

export const CarMenu = styled.div`
  position: absolute;
  top: 790px;
  height: 160px;
  width: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  background: rgba(246, 243, 242, 0.5);
  z-index: 5;
`;

export const CarMenuIconDiv = styled.div`
  width: 630px;
  height: 100px;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
`;

export const CarMenuWrapDiv = styled.div`
  width: 1260px;
  height: 100px;
  display: flex;
`;

export const CarMenuDiv = styled.div`
  width: 100px;
  height: 100px;
  transition: 0.3s ease-in-out;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 2.5px;
  cursor: pointer;
`;

export const CarMenuIcon = styled.img`
  width: 50px;
  height: 50px;
  margin: 25px auto 3px;
`;

export const CarMenuText = styled.div`
  width: 100%;
  font-size: 14px;
  text-align: center;
  font-weight: 450;
  color: #333;
  font-family: "Noto Sans KR", sans-serif;
`;

export const CarBtn2 = styled.div`
  width: 100%;
  height: 10px;
  top: 912px;
  display: block;
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselRec = styled.div`
  width: 33px;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
