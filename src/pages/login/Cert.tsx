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
  height: 99px;
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
  height: 234px;
  margin: 0 auto;
  display: flex;
  padding: 25px 13px;
  font-weight: 400;
  font-size: 13px;
  color: #666;
  flex-direction: column;
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
  width: 680px;
  height: 55px;
  display: flex;
  align-items: center;
`;

const Btn = styled.div`
  box-sizing: border-box;
  width: 316px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: white;
  background-color: #3387bd;
  font-weight: 300;
  font-size: 15px;
  margin-top: 12px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  position: relative;
  line-height: 100%;
  cursor: pointer;
  &:hover {
    background-color: rgb(0, 40, 132);
  }
  &:focus {
    background-color: rgb(0, 40, 132);
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

function Cert() {
  return (
    <Wrapper>
      <Bar></Bar>
      <LogoDiv>
        <LogoDivInner>
          <img
            src={logo}
            alt=""
            style={{ width: "145px", paddingTop: "4px", cursor: "pointer" }}
            onClick={() => {
              window.location.href = "/";
            }}
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
            본인 인증
          </div>
          <div>본인 인증을 위한 필수 정보를 입력하세요.</div>
        </TitleDivInner>
      </TitleDiv>
      <Section>
        <span
          style={{
            lineHeight: "15px",
            paddingBottom: "7px",
            paddingLeft: "8px",
            cursor: "pointer",
          }}
        >
          <Dot></Dot>회원 본인 확인 시 휴대폰 인증 기관 또는 아이핀(i-PIN)
          인증을 통해 본인확인이 가능합니다.
        </span>
        <BtnDiv>
          <a href="/login/phonecert" style={{ textDecoration: "none" }}>
            <Btn>휴대폰 인증</Btn>
          </a>
          <Btn>아이핀 (I-PIN) 인증</Btn>
        </BtnDiv>
        <span
          style={{
            lineHeight: "15px",
            paddingBottom: "7px",
            paddingLeft: "8px",
            cursor: "pointer",
            marginTop: "62px",
          }}
        >
          <Dot></Dot>법인 명의 휴대폰 인증 안내
        </span>
        <span
          style={{
            lineHeight: "15px",
            paddingBottom: "7px",
            paddingLeft: "8px",
            cursor: "pointer",
          }}
        >
          <Dot></Dot>본인 인증 문자 미수신 안내
        </span>
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

export default Cert;
