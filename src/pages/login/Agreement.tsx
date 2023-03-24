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
  height: 353px;
  margin: 0 auto;
  display: flex;
  padding: 25px 13px;
  font-weight: 400;
  font-size: 13px;
  color: #666;
  flex-direction: column;
  position: relative;
`;

const CheckDiv1 = styled.div`
  transition: 0.3s ease;
  box-sizing: border-box;
  width: 640px;
  color: #333;
  display: flex;
  align-items: center;
  padding: 11px;
  font-size: 15px;
  word-break: keep-all;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 50px;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const CheckDiv2 = styled.div`
  box-sizing: border-box;
  width: 640px;
  display: flex;
  align-items: center;
  word-break: keep-all;
  font-weight: 400;
  margin-bottom: 20px;
  position: relative;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const CheckDiv = styled.div`
  box-sizing: border-box;
  width: 640px;
  color: #333;
  display: flex;
  align-items: center;
  padding: 11px;
  font-size: 15px;
  word-break: keep-all;
  font-weight: 400;
  position: relative;
  margin-bottom: 20px;
  height: 45px;
  transition: 0.3s ease;
`;

const CheckDivLeft = styled.span`
  transition: 0.3s ease;
  width: 560px;
  color: #333;
  font-size: 15px;
  word-break: keep-all;
  font-weight: 400;
  position: absolute;
  top: 0;
  left: 0;
  line-height: 100%;
  text-align: center;
  padding-left: 11px;
  display: inline-flex;
  height: 100%;
  cursor: pointer;
  justify-content: left;
  align-items: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Must = styled.span`
  color: #006ca4;
  font-size: 12px;
  margin-left: 7px;
`;

const More = styled.div`
  text-align: center;
  padding: auto;
  display: inline-flex;
  width: 67px;
  height: 100%;
  color: #006ca4;
  font-weight: 300;
  font-size: 12px;
  position: absolute;
  top: 0;
  right: 0;
  line-height: 100%;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
  font-size: 11px;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
  transition: 0.3s ease;
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
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
  justify-content: center;
  margin-top: 18px;
  margin-bottom: 45px;
`;

const Btn = styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: white;
  background-color: #3387bd;
  font-weight: 500;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  position: relative;
  line-height: 100%;
  cursor: default;
  opacity: 0.5;
  &.checked {
    cursor: pointer;
    opacity: 1;
    &:hover {
      background-color: rgb(0, 40, 132);
    }
    &:focus {
      background-color: rgb(0, 40, 132);
    }
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

function Agreement() {
  const [chN, setN] = useState(0);
  const ch = useRef<any>([]);
  const next = useRef<any>(null);

  useEffect(() => {
    if (chN === 2) {
      ch.current[0].style.color = "black";
      ch.current[1].style.color = "black";
      ch.current[2].style.color = "black";
      next.current.classList.add("checked");
    } else {
      ch.current[0].style.color = "rgba(0,0,0,0.1)";
      next.current.classList.remove("checked");
    }
  }, [chN]);

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
            현대자동차 통합계정
          </div>
          <div>통합계정 이용약관 및 개인정보 수집·이용에 동의해주세요.</div>
        </TitleDivInner>
      </TitleDiv>
      <Section>
        <CheckDiv1
          onClick={() => {
            if (chN === 2) {
              ch.current[0].style.color = "rgba(0,0,0,0.2)";
              ch.current[1].style.color = "rgba(0,0,0,0.2)";
              ch.current[2].style.color = "rgba(0,0,0,0.2)";
              setN(0);
            } else {
              ch.current[0].style.color = "black";
              ch.current[1].style.color = "black";
              ch.current[2].style.color = "black";
              setN(2);
            }
          }}
        >
          <span
            ref={(element) => {
              ch.current[0] = element;
            }}
            className="material-symbols-outlined"
            style={{ margin: "0 15px 0 7px", color: "rgba(0,0,0,0.2)" }}
          >
            check_circle
          </span>
          아래 내용을 모두 확인하였으며 전체 동의합니다.
        </CheckDiv1>
        <CheckDiv2></CheckDiv2>
        <CheckDiv>
          <CheckDivLeft
            onClick={() => {
              if (ch.current[1].style.color === "black") {
                ch.current[1].style.color = "rgba(0,0,0,0.2)";
                setN(chN - 1);
              } else {
                ch.current[1].style.color = "black";
                setN(chN + 1);
              }
            }}
          >
            <span
              ref={(element) => {
                ch.current[1] = element;
              }}
              className="material-symbols-outlined"
              style={{ margin: "0 15px 0 7px", color: "rgba(0,0,0,0.2)" }}
            >
              done
            </span>
            현대자동차 통합계정 이용약관 동의 <Must>(필수)</Must>
          </CheckDivLeft>
          <More>더 보기</More>
        </CheckDiv>
        <CheckDiv>
          <CheckDivLeft
            onClick={() => {
              if (ch.current[2].style.color === "black") {
                ch.current[2].style.color = "rgba(0,0,0,0.2)";
                setN(chN - 1);
              } else {
                ch.current[2].style.color = "black";
                setN(chN + 1);
              }
            }}
          >
            <span
              ref={(element) => {
                ch.current[2] = element;
              }}
              className="material-symbols-outlined"
              style={{ margin: "0 15px 0 7px", color: "rgba(0,0,0,0.2)" }}
            >
              done
            </span>
            개인정보 수집ㆍ이용 동의<Must>(필수)</Must>
          </CheckDivLeft>
          <More>더 보기</More>
        </CheckDiv>
      </Section>
      <Footer>
        <BtnDiv>
          <a
            href="/login/cert"
            onClick={(e) => {
              if (chN !== 2) {
                e.preventDefault();
              }
            }}
            style={{ textDecoration: "none" }}
          >
            <Btn ref={next}>다음</Btn>
          </a>
        </BtnDiv>
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

export default Agreement;
