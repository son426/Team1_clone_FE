import styled from "styled-components";

export const BrandInner = styled.div`
  width: 22%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

export const BrandInnerText = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  font-size: 18px;
  color: #fff;
  line-height: 30px;
  text-align: center;
  opacity: 0;
  transition: 0.2s;
  z-index: 10;
`;
