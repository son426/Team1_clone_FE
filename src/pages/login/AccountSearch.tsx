import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const Wrapper = styled.div`
  margin: 0;
  font-weight: 400;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: -0.4px;
  padding: 0;
  width: 100%;
`;

const Bar = styled.div`
  width: 100%;
  height: 6px;
  background-color: #012d5e;
`;

const LogoDiv = styled.div`
  width: 100%;
  height: 72px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const LogoDivInner = styled.div`
  text-align: left;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 680px;
  height: 100%;
  padding: 0 13px;
`;

const TitleDiv = styled.div`
  width: 100%;
  height: 83px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const TitleDivInner = styled.div`
  text-align: center;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 680px;
  height: 100%;
  padding: 0 13px;
  flex-direction: column;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.8);
`;

const Section = styled.div`
  box-sizing: border-box;
  width: 680px;
  height: 353px;
  margin: 0 auto;
  display: flex;
  padding: 24px;
  font-weight: 400;
  font-size: 13px;
  color: #666;
  flex-direction: column;
  position: relative;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

const DivTitle = styled.div`
  margin-bottom: 8px;
  width: 590px;
  height: 24px;
  font-size: 16px;
  display: flex;
  align-items: center;
  font-weight: 300;
`;

const DivContent = styled.div`
  border-left: 1px solid #bdbdbd;
  padding-left: 20px;
  padding-right: 8px;
  margin-left: 12px;
  width: 550px;
  height: 120px;
  margin-bottom: 8px;
  padding-top: 10px;
`;

const CircleN = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #3387bd;
  color: white;
  display: inline-block;
  margin-right: 7px;
  text-align: center;
  font-size: 12px;
  font-weight: 300;
  line-height: 24px;
`;

const Footer = styled.div`
  width: 100%;
  height: 50%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  font-size: 12px;
  letter-spacing: 0.1px;
  font-weight: 300;
  padding-top: 5px;
`;

const BtnDiv = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 45px;
`;

const Btn = styled.div`
  box-sizing: border-box;
  width: 271px;
  height: 50px;
  border: 1px solid #6f6f6f;
  background-color: hsla(0, 0%, 85.9%, 0.1);
  color: #6f6f6f;
  font-weight: 300;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  position: relative;
  line-height: 100%;
  cursor: pointer;
  &:hover {
    background-color: hsla(0, 0%, 85.9%, 0.35);
  }
  &:focus {
    background-color: hsla(0, 0%, 85.9%, 0.35);
  }
`;

const MenuSection = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 400px;
  height: 35px;
  letter-spacing: 0.5px;
  margin-top: 18px;
  color: #006ca4;
  font-size: 13px;
  justify-content: center;
`;

const MenuDiv = styled.div`
  width: 120px;
  font-size: 13px;
  height: 15px;
  padding: 0;
  font-weight: 400;
  line-height: 10px;
  cursor: pointer;
  text-decoration-line: none;
  border-bottom: 0.5px solid #006ca4;
  color: #006ca4;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: #006ca4;
    font-size: 13px;
    text-decoration-line: none;
  }
`;

const MenuA = styled.a`
  width: 120px;
  font-size: 13px;
  height: 15px;
  padding: 0;
  font-weight: 500;
  line-height: 10px;
  cursor: pointer;
  text-decoration-line: none;
  color: #006ca4;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: #006ca4;
    font-size: 13px;
    text-decoration-line: none;
  }
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  margin: 6px 6px 0 0;
  content: no-open-quote;
  display: inline-block;
  background: #999;
  border-radius: 3px;
  vertical-align: top;
`;

function AccountSearch() {
  return (
    <Wrapper>
      <Bar></Bar>
      <LogoDiv>
        <LogoDivInner>
          <img
            src={logo}
            alt=""
            style={{ width: "145px", paddingTop: "4px" }}
          ></img>
        </LogoDivInner>
      </LogoDiv>
      <TitleDiv>
        <TitleDivInner>
          <div
            style={{
              fontSize: "19px",
              fontWeight: "500",
              marginBottom: "9px",
            }}
          >
            아이디 찾기
          </div>
        </TitleDivInner>
      </TitleDiv>
      <Section>
        <DivTitle>
          <CircleN>1</CircleN>아이디 찾기
        </DivTitle>
        <DivContent>
          <Dot></Dot>이메일 아이디를 찾으시려면 본인 인증 또는 모바일 인증을
          선택하세요.
          <BtnDiv>
            <a href="/login/cert" style={{ textDecoration: "none" }}>
              <Btn>본인 인증</Btn>
            </a>
            <Btn>모바일 인증</Btn>
          </BtnDiv>
        </DivContent>
        <DivTitle>
          <CircleN style={{ backgroundColor: "transparent", color: "#666" }}>
            2
          </CircleN>
          인증 요청
        </DivTitle>
        <DivContent style={{ height: "30px" }}></DivContent>
        <DivTitle>
          <CircleN style={{ backgroundColor: "transparent", color: "#666" }}>
            3
          </CircleN>
          인증 확인
        </DivTitle>
        {/* <DivContent></DivContent> */}
      </Section>
      <Footer>
        <MenuSection>
          <MenuDiv>
            <MenuA href="/login">로그인 페이지로 이동</MenuA>
          </MenuDiv>
        </MenuSection>
        COPYRIGHT © HYUNDAI MOTOR COMPANY. ALL RIGHTS RESERVED.
      </Footer>
    </Wrapper>
  );
}

export default AccountSearch;
