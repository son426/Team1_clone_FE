import styled from "styled-components";

export const ModelInner1 = styled.div`
  width: 51%;
  position: relative;
  cursor: pointer;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    content: "1위";
    width: 60px;
    height: 60px;
    background: #007fa8;
    font-size: 20px;
    letter-spacing: -0.24px;
    color: #fff;
    line-height: 60px;
  }
`;

export const ModelInner2 = styled.div`
  width: 43%;
  position: relative;
`;

export const ModelAge = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: left;
`;

export const Ages = styled.li`
  display: inline-block;
  border-right: 1px solid #999;
  color: #666;
  line-height: 100%;
  padding: 0 15px;
  font-size: 16px;
  font-weight: 300;
  margin-top: 10px;
`;

export const Model1 = styled.div`
  text-align: left;
  font-size: 40px;
  color: #000;
  margin-top: 25px;
  letter-spacing: -1.2px;
  cursor: pointer;
`;

export const ModelDiv = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  display: flex;
  align-content: space-between;
  justify-content: space-between;
`;

export const ModelDiv2 = styled.div`
  width: 47%;
`;

export const ModelSmallImg = styled.div`
  width: 100%;
  cursor: pointer;
`;

export const Model2n3 = styled.div`
  width: 100%;
  text-align: left;
  font-size: 18px;
  padding-bottom: 20px;
  color: #000;
  cursor: pointer;
`;
