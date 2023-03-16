import styled, { css, keyframes } from "styled-components";
const arrowMove = keyframes`
0%{
  margin-top:0px;
}
50%{
  margin-top:5px;
}
100%{
  margin-top:0px;
}`;
const animation1 = keyframes`
0%{
  bottom:-80px;
  opacity:0;
}
100%{
  bottom:0px;
  opacity:100;
}`;

const animation2 = keyframes`
0%{
  top:-80px;
  opacity:0;
}
100%{
  top:0px;
  opacity:100;
}`;

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  z-index: 5;
  animation: ${(props) =>
    props.id === "scrolled"
      ? css`
          ${animation2} 1s linear
        `
      : css`
          ${animation1} 1s linear
        `};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 80px;
  position: relative;
  background-color: white;
`;
export const Logo = styled.img`
  width: 50px;
  padding-left: 20px;
  background-position: center;
  background-size: cover;
  margin-right: 10px;
`;
export const carName = styled.p`
  font-family: "HyundaiSansTextKR";
  font-size: 20px;
  font-weight: 600;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  font-size: 16px;
  font-family: "HyundaiSansTextKR";
  height: 80px;
  margin-left: 0px;
`;
export const Children = styled.li`
  list-style: none;
  margin-right: 35px;
  cursor: pointer;
  font-family: "HyundaiSansTextKR";
  display: flex;
`;
export const Underbar = styled.div`
  background-color: #002c5f;
  position: absolute;
  height: 4px;
  width: 10px;
  bottom: 0;
`;
export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  position: absolute;
  right: 60px;
`;
export const Button = styled.div`
  font-family: "HyundaiSansTextKR";
  font-weight: 100;
  margin-right: 30px;
  cursor: pointer;
  color: #002c5f;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    font-weight: 600;
    div {
      border-top: 2px solid #002c5f;
      border-right: 2px solid #002c5f;
    }
  }
`;
export const MouseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
`;
export const Mouse = styled.div`
  width: 18px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -15px;
`;
export const Wheel = styled.div`
  width: 0px;
  height: 7px;
  margin-top: 5px;
  margin-left: 1px;
  border-left: 1px solid black;
`;
export const Arrow = styled.div`
  width: 8px;
  height: 8px;
  border-top: 1px solid #002c5f;
  border-right: 1px solid #002c5f;
  transform: rotate(45deg);
`;
export const MouseArrow = styled.div`
  width: 8px;
  height: 8px;
  border-top: 1px solid black;
  border-right: 1px solid black;
  transform: rotate(135deg);
  position: absolute;
  top: 20px;
  animation: ${arrowMove} 1s infinite linear;
`;
