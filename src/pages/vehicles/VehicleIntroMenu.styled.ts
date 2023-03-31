import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  padding-left: 35px;
  width: max-content;
  position: sticky;
  z-index: 5;
  top: 50%;
  transform: translate(0, -50%);
`;
export const ElementWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  cursor: pointer;
`;
export const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  border: 1px solid #666;
  margin-right: 15px;
  transition: height 0.5s, color 0.3s;
`;
export const Letter = styled.div`
  font-family: "HyundaiSansTextKR";
  color: transparent;
  transition: transform 0.5s, color 0.3s;
`;
