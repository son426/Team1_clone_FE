import styled, { css, keyframes } from "styled-components";
const letterMove = keyframes`
  0%{
    margin-top:25px;
    opacity:0%;
  }
  100%{
    margin-top:0px;
    opacity:100%;
  }`;
export const Container = styled.div`
  position: absolute;
  width: 100vw;
  bottom: 0px;
  left: 0px;
  height: calc(100vh - 80px);
  background-color: white;
`;
export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 80px);
  background-color: white;
`;
export const TitleWrapper = styled.div`
  position: absolute;
  left: 200px;
  width: calc((100vw - 200px) / 3 - 10px);
  height: calc(50vh - 10px);
  display: flex;
  flex-direction: column;
  justify-content: left;
`;
export const Title = styled.h2`
  font-family: "HyundaiSansTextKR";
  font-size: 44px;
  font-weight: 600;
  margin-bottom: 0px;
  animation: ${(props) =>
    props.id === "activated"
      ? css`
          ${letterMove} 1s ease-in-out
        `
      : "none"};
`;
export const Headline = styled.div`
  font-family: "HyundaiSansTextKR";
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 50px;
  animation: ${(props) =>
    props.id === "activated"
      ? css`
          ${letterMove} 1s ease-in-out
        `
      : "none"};
`;
export const Details = styled.div`
  font-family: "HyundaiSansTextKR";
  font-size: 16px;
  padding-right: 50px;
  animation: ${(props) =>
    props.id === "activated"
      ? css`
          ${letterMove} 1s ease-in-out
        `
      : "none"};
`;
