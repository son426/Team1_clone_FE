import styled, { css, keyframes } from "styled-components";

export const childUp = keyframes`
0%{
  height:0vh;
}
100%{
  height:100vh;
}
`;

export const childDown = keyframes`
0%{
  height:100vh;
}
100%{
  height:0vh;
}`;

export const Container = styled.div`
  top: 100vh;
  position: absolute;
  overflow-y: hidden;
  transition: top 1s, height 1s;
`;
export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: white;
`;
export const DummyDiv = styled.div`
  position: absolute;
  background-color: ${(props) => props.color};
  width: 100vw;
  bottom: 0px;
  left: 0px;
`;
