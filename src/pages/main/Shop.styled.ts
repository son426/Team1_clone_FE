import styled from "styled-components";

export const ShopInner1A = styled.div`
  width: 31%;
  height: fit-content;
  text-align: left;
  cursor: pointer;
  position: relative;
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.5);
    font-size: 18px;
    color: #fff;
    line-height: 30px;
    text-align: left;
    content: "봄타는 자동차를 위한 봄맞이 차량관리 TIP";
  }
`;

export const ShopInner1B = styled.div`
  width: 31%;
  height: fit-content;
  text-align: left;
  cursor: pointer;
  position: relative;
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.5);
    font-size: 18px;
    color: #fff;
    line-height: 30px;
    text-align: left;
    content: "봄 맞이 전기자전거 라이딩을 위한 필수 체크리스트";
  }
`;

export const ShopInner1C = styled.div`
  width: 31%;
  height: fit-content;
  text-align: left;
  cursor: pointer;
  position: relative;
  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 20px;
    background: rgba(0, 0, 0, 0.5);
    font-size: 18px;
    color: #fff;
    line-height: 30px;
    text-align: left;
    content: "색다른 재미!? 이색 데이트 즐겨보기~";
  }
`;

export const ShopInner2 = styled.div`
  width: 17%;
  height: fit-content;
  text-align: left;
  display: block;
  cursor: pointer;
`;

export const ShopInner2LeftTitle = styled.div`
  padding: 35px 30px 0;
  font-size: 24px;
  color: #000;
`;

export const ShopInner2LeftText = styled.div`
  padding: 10px 30px;
  font-size: 16px;
  color: #666;
  word-break: keep-all;
  line-height: 30px;
  font-weight: 450;
  vertical-align: middle;
`;

export const ShopInner2LeftLink = styled.div`
  padding: 20px 25px 0 30px;
  font-size: 16px;
  color: #012d5e;
  cursor: pointer;
`;

export const ShopInner2Img = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid #e5e5e5;
`;

export const ShopInner2Num = styled.div`
  align-items: center;
  width: 34px;
  height: 34px;
  background: #007fa8;
  font-size: 19px;
  font-weight: 600;
  line-height: 30px;
  color: #fff;
  text-align: center;
  z-index: 1;
  position: absolute;
`;

export const ShopInner2Title = styled.div`
  margin: 15px 0 0;
  font-size: 16px;
  letter-spacing: -0.24px;
  color: #000;
  line-height: 26px;
  font-weight: 500;
  height: 52px;
  width: 100%;
  word-break: keep-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  vertical-align: middle;
`;

export const ShopInner2Sale = styled.div`
  display: flex;
  font-size: 16px;
  letter-spacing: -0.24px;
  color: #000;
  line-height: 26px;
  color: #e63312;
  font-weight: 600;
`;

export const ShopInner2Price = styled.div`
  display: flex;
  margin: 7px 0 0;
  font-size: 16px;
  letter-spacing: -0.24px;
  color: #000;
  line-height: 26px;
  font-weight: 500;
`;
