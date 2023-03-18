import styled from "styled-components";

export const Car = styled.div`
  width: 100%;
  display: block;
  height: 950px;
  background-color: rgb(246, 243, 242);
  overflow: hidden;
`;

export const CarBg = styled.img`
  width: calc(100vw - (100vw - 100%));
  object-fit: cover;
  height: fit-content;
  margin-top: 6vw;
  position: absolute;
`;

export const CarWrapDiv = styled.div`
  width: 500%;
  height: fit-content;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  width: fit-content;
`;

export const CarDiv = styled.div`
  width: 100vw;
  text-align: left;
  transition: 0.3s ease-in-out;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  height: fit-content;
`;

export const CarImg = styled.img`
  max-width: 100%;
  height: 380px;
  transition: 0.3s ease-in-out;
  height: fit-content;
  display: block;
  border: 1px solid green;
`;

export const CarTitle = styled.div`
  width: 1260px;
  height: auto;
  margin: 0 auto;
  text-align: left;
  font-size: 72px;
  border: 1px solid blue;
  margin-left: 7vw;
  margin-top: 152px;
  z-index: 1;
  width: 1260px;
  height: auto;
  text-align: left;
`;

export const CarSubtitle = styled.div`
  margin-top: 14px;
  font-size: 26px;
  letter-spacing: 0;
  color: #000;
  line-height: 38px;
  letter-spacing: -0.25px;
  text-align: left;
  border: 1px solid purple;
  margin-left: 7vw;
  z-index: 1;
  width: 1260px;
  height: auto;
  text-align: left;
`;

export const CarBtn1 = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;
`;

export const CarMenu = styled.div`
  position: absolute;
  bottom: 0;
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarMenuWrapDiv = styled.div``;

export const CarMenuDiv = styled.div``;

export const CarBtn2 = styled.div`
  width: 100%;
  height: fit-content;
  display: block;
`;
