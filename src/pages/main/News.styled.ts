import styled from "styled-components";

export const NewsInner = styled.div`
  width: 24.85%;
  aspect-ratio: 1;
  background: rgba(0, 0, 0);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
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
  /* line-height: 30px; */
  text-align: center;
  opacity: 0;
  transition: 0.2s;
  z-index: 8;
  font-weight: 350;
  letter-spacing: -0.5px;
`;

export const Sns = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  color: white;
  height: 30px;
  font-size: 14px;
  line-height: 27px;
  min-width: 59px;
  font-weight: 400;
  text-align: center;
  border-radius: 30px;
  /* border: 1px solid white; */
`;

export const Play = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  width: 60px;
  height: 60px;
`;

export const Youtube = styled.img`
  position: absolute;
  bottom: 30px;
  right: 30px;
  z-index: 15;
  width: 22px;
  height: 22px;
  opacity: 0;
`;
