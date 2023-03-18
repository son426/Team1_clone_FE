import styled from "styled-components";

export const NewsInner = styled.div`
  width: 24.75%;
  aspect-ratio: 1;
  border: 1px solid black;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

export const NewsInnerText = styled.div`
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
