import styled from "styled-components";

export const EventsInner = styled.div`
  width: 95vw;
  width: calc((100vw - (100vw - 100%)) * 0.95);
  height: fit-content;
  text-align: left;
  overflow: hidden;
`;

export const EventsWrapDiv = styled.div`
  width: 190vw;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  justify-content: space-between;
`;

export const EventsDiv = styled.div`
  height: 100%;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  width: 30vw;
  height: fit-content;
  text-align: left;
  overflow: hidden;
`;

export const EventsImg = styled.div`
  width: 100%;
  height: fit-content;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

export const EventsInnerText = styled.div`
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
  font-size: 22px;
  color: #fff;
  line-height: 30px;
  text-align: center;
  transition: 0.2s;
  z-index: 10;
  opacity: 0;
`;

export const EventsInnerTitle = styled.div`
  width: 95%;
  margin-top: 28px;
  font-size: 24px;
  font-weight: 600;
  color: #000;
`;

export const EventsInnerSubtitle = styled.div`
  width: 95%;
  margin-top: 10px;
  margin-bottom: 22px;
  font-size: 16px;
  font-weight: 400;
`;

export const EventsInnerDate = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
`;

export const EventsBtn = styled.div`
  bottom: 0;
  width: 100%;
  margin-top: 45px;
  display: inline-flex;
  justify-content: center;
`;
