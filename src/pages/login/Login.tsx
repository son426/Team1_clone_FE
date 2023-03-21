import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const Wrapper = styled.div`
  margin: 0;
  font-weight: 400;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: -0.7px;
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
  width: 440px;
  height: 100%;
  padding: 0 13px;
`;

const Section = styled.div`
  box-sizing: border-box;
  width: 440px;
  height: 347px;
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
  color: #666;
  font-size: 12px;
  letter-spacing: 0.3px;
  font-weight: 300;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 46px;
  border: 1px solid #ced4da;
  color: rgba(0, 0, 0, 0.6);
  padding: 10px 12px;
  font-size: 13px;
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: auto;
  transition: 0.2s ease;
  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
    font-weight: 600;
    letter-spacing: -0.7px;
  }
  &:focus {
    outline: 1px solid #00a7cf;
  }
`;

const Btn = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 73px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: white;
  background-color: #3387bd;
  font-weight: 500;
  font-size: 19px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  position: relative;
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
`;

const MenuDiv = styled.div`
  width: fit-content;
  padding: 0 14px;
  font-size: 13px;
  height: 12px;
  font-weight: 500;
  line-height: 10px;
  cursor: pointer;
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

const SocialBtn = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 400px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 20px;
  margin-top: 45px;
  transition: 0.3s ease;
  font-weight: 300;
  font-size: 15px;
  color: #666;
  display: flex;
  line-height: 100%;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
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

function Login() {
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
      <Section>
        <span
          style={{
            lineHeight: "15px",
            paddingBottom: "7px",
            paddingLeft: "8px",
          }}
        >
          <Dot></Dot>이메일 로그인
        </span>
        <Input type="email" placeholder="이메일 주소"></Input>
        <Input
          type="password"
          placeholder="비밀번호"
          style={{ letterSpacing: "7px", paddingLeft: "15px" }}
        ></Input>
        <Btn>로그인</Btn>
        <MenuSection>
          <MenuDiv style={{ paddingLeft: "0", borderRight: "1px solid black" }}>
            <MenuA href="/login/account-search">아이디 찾기</MenuA>
          </MenuDiv>
          <MenuDiv>
            <MenuA href="/login/password-init">비밀번호 초기화</MenuA>
          </MenuDiv>
          <MenuDiv style={{ paddingLeft: "120px" }}>
            <MenuA href="/login/agreement">회원가입 ▶</MenuA>
          </MenuDiv>
        </MenuSection>
        <SocialBtn>
          <span
            className="material-symbols-outlined"
            style={{
              margin: "0 8px",
              color: "#3387bd",
              fontSize: "25px",
              fontVariationSettings: "wght 600",
            }}
          >
            error
          </span>
          소셜 로그인을 이용한 적이 있으신가요?
          <span
            className="material-symbols-outlined"
            style={{
              textAlign: "right",
              fontSize: "30px",
              fontWeight: "200",
              fontVariationSettings: "wght 100",
              marginLeft: "95px",
            }}
          >
            navigate_next
          </span>
        </SocialBtn>
      </Section>
      <Footer>
        <MenuSection style={{ justifyContent: "center" }}>
          <MenuDiv style={{ paddingLeft: "0", borderRight: "1px solid black" }}>
            이용약관
          </MenuDiv>
          <MenuDiv style={{ paddingRight: "0" }}>개인정보 처리방침</MenuDiv>
        </MenuSection>
        COPYRIGHT © HYUNDAI MOTOR COMPANY. ALL RIGHTS RESERVED.
      </Footer>
    </Wrapper>
  );
}

export default Login;
