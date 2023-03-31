import styled from "styled-components";

export const CarouselBtn = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 5px;
  cursor: pointer;
  //#007fa8 - active
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
`;

export const CarouselArrow = styled.div`
  z-index: 10;
  width: 44px;
  height: 44px;
  border-radius: 0;
  font-size: 18px;
  line-height: 1.8;
  background-color: rgba(31, 45, 61, 0.4);
  position: absolute;
  cursor: pointer;
`;

export const CarouselArrowRight = styled.div`
  padding: 0;
  margin: 15px 0 0 14px;
  height: 10px;
  width: 10px;
  transition: 0.3s;
  transform: rotate(-45deg);
  color: #fff;
  z-index: 10;
  text-align: center;
  font-size: 12px;
  outline: none;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
`;

export const CarouselArrowLeft = styled.div`
  padding: 0;
  margin: 15px 0 0 19px;
  height: 10px;
  width: 10px;
  transition: 0.3s;
  transform: rotate(-45deg);
  color: #fff;
  z-index: 10;
  text-align: center;
  font-size: 12px;
  outline: none;
  border-left: 2px solid white;
  border-top: 2px solid white;
`;
