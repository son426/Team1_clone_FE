import styled from "styled-components";

export const MyInner1 = styled.div`
  width: 795px;
  height: 440px;
  border: 1px solid #ccc;
  overflow: scroll;
  overflow: hidden;
`;

export const MyInner1WrapDiv = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  overflow-x: scroll;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
`;

export const MyInner1Div = styled.div`
  width: 397px;
  height: 100%;
  text-align: left;
  transition: 0.3s ease-in-out;
`;

export const MyInner1DivTitle = styled.div`
  margin-top: 32px;
  font-size: 30px;
  padding-left: 40px;
  color: #000;
`;

export const MyInner1DivText = styled.div`
  margin-top: 5px;
  font-size: 16px;
  padding-left: 40px;
  font-weight: 500;
  color: #666;
`;

export const MyInner1DivMore = styled.div`
  margin-top: 32px;
  font-size: 16px;
  padding-left: 40px;
  color: #002c5f;
  cursor: pointer;
`;

export const MyInner1DivLine = styled.div`
  width: 0.5px;
  margin-top: 40px;
  height: calc(100% - 40px);
  background-color: #e5e5e5;
  transition: 0.3s ease-in-out;
`;

export const MyInner2 = styled.div`
  position: relative;
  width: 290px;
  height: 442px;
  text-align: left;
  background-color: #f6f3f2;
  &:before {
    position: absolute;
    right: 40px;
    bottom: 36px;
    display: block;
    content: "";
    width: 120px;
    height: 120px;
    background: url(https://www.hyundai.com/static/images/re_hyundaishop_app.png)
      no-repeat;
  }
`;

export const MyInner2Title = styled.div`
  padding: 35px 35px 0;
  font-size: 30px;
  color: #000;
`;

export const MyInner2text = styled.div`
  padding: 5px 35px;
  font-size: 16px;
  color: #666;
  word-break: keep-all;
  line-height: 30px;
  font-weight: 450;
  vertical-align: middle;
`;

export const MyInner2Link = styled.div`
  padding: 30px 20px 0 35px;
  font-size: 16px;
  color: #012d5e;
  cursor: pointer;
`;

export const MyBtn = styled.div`
  bottom: 0;
  width: 100%;
  margin-top: 30px;
  display: inline-flex;
  justify-content: left;
  width: calc(100vw - 60px);
  max-width: 1120px;
`;
