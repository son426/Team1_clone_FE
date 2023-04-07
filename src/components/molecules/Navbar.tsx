import styled from "styled-components";
import logo from "../../assets/logo.png";
import mypage from "../../assets/mypage.png";
import search from "../../assets/search.png";
import shop from "../../assets/shop.png";
import menu from "../../assets/menu.png";
import { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { isUserAtom } from "../../lib/util/atoms";
import { useCookies } from "react-cookie";
import LoginToggle from "./LoginToggle";

const Container = styled.div`
  position: fixed;
  top: 0;
  transition: top 0.5s;
  z-index: 100;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 80px;
  width: 100vw;
  position: relative;

  /* background-color: rgba(255, 255, 255, 0.2);*/
  backdrop-filter: blur(4px);
  background: hsla(0, 0%, 100%, 0.9);
  background: transparent;
`;
const Logo = styled.img`
  width: 166px;
  height: 70px;
  line-height: 100%;
  padding-left: 20px;
  background-position: center;
  background-size: cover;
  margin-right: 40px;
  padding-top: 5px;
  cursor: pointer;
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-evenly;
  font-size: 16px;
`;
const Children = styled.li`
  list-style: none;
  margin-right: 35px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Underbar = styled.div`
  background-color: #002c5f;
  position: absolute;
  height: 4px;
  width: 10px;
  bottom: 0;
  transition: left 0.5s, width 0.5s;
`;

const LangSelect = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
`;
const LineDivide = styled.div`
  width: 1px;
  height: 14px;
  background-color: rgb(153, 153, 153);
  margin-left: 20px;
`;

const A = styled.a`
  cursor: pointer;
  text-decoration: none;
  text-decoration-line: none;
  color: black;
  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
    color: black;
    text-decoration-line: none;
  }
`;

const LoginDiv = styled.div`
  position: absolute;
  top: 5px;
  left: -60px;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IStyle {
  style?: any;
  isUser?: boolean;
}
function Navbar({ style, isUser }: IStyle) {
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [offsetWidth, setOffsetWidth] = useState(0);

  const [scroll, setScroll] = useState(false);
  const [, setIsUser] = useRecoilState(isUserAtom);

  const [isToggled, setIsToggled] = useState(false);

  let bg = useRef<any>();
  let under = useRef<any>();

  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const logoutFn = async () => {
    // 로컬스토리지 accessToken 지우기
    localStorage.removeItem("accessToken");

    // 쿠키 refreshToken 지우기
    removeCookie("refreshToken");

    // // recoil isUser false로 수정
    setIsUser(false);

    // 리다이렉트
    window.location.href = "/";
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 1) {
      setScroll(true);
      bg.current.style.backdropFilter = "blur(4px)";
    } else {
      setScroll(false);
      bg.current.style.backdropFilter = "blur(0px)";
    }
  };

  useEffect(() => {
    if (scroll) {
      bg.current.style.background = "hsla(0, 0%, 100%, 0.9)";
      bg.current.style.borderBottom = "1px solid #e5e5e5";
    } else {
      bg.current.style.background = "transparent";
      bg.current.style.borderBottom = "none";
    }
  }, [scroll]);

  return (
    <Container style={style}>
      <Wrapper ref={bg}>
        <A href="/">
          <Logo src={logo} />
        </A>
        <Menu
          onMouseOver={() => {
            under.current.style.opacity = "1";
          }}
          onMouseOut={() => {
            under.current.style.opacity = "0";
          }}
        >
          {offsetLeft ? (
            <Underbar
              ref={under}
              style={{ width: `${offsetWidth}px`, left: `${offsetLeft}px` }}
            />
          ) : null}
          <A href="/vehicles">
            <Children
              onMouseEnter={(e: any) => {
                setOffsetLeft(e.target.offsetLeft);
                setOffsetWidth(e.target.offsetWidth);
              }}
            >
              모델
            </Children>
          </A>
          <Children
            onMouseEnter={(e: any) => {
              setOffsetLeft(e.target.offsetLeft);
              setOffsetWidth(e.target.offsetWidth);
            }}
          >
            구매/이벤트
          </Children>
          <Children
            onMouseEnter={(e: any) => {
              setOffsetLeft(e.target.offsetLeft);
              setOffsetWidth(e.target.offsetWidth);
            }}
          >
            서비스/멤버십
          </Children>
          <Children
            onMouseEnter={(e: any) => {
              setOffsetLeft(e.target.offsetLeft);
              setOffsetWidth(e.target.offsetWidth);
            }}
          >
            디지털/고객지원
          </Children>
          <Children
            onMouseEnter={(e: any) => {
              setOffsetLeft(e.target.offsetLeft);
              setOffsetWidth(e.target.offsetWidth);
            }}
          >
            브랜드
          </Children>
          <Children></Children>
        </Menu>
        <Menu style={{ marginLeft: "30px" }}>
          <Children>
            <p>my</p>
            <p style={{ fontWeight: 600 }}>Hyundai</p>
          </Children>
          <LangSelect>KR</LangSelect>
          <LineDivide />
        </Menu>
        <Menu>
          <Children
            style={{
              width: "28px",
              height: "28px",
              marginRight: "20px",
              backgroundImage: `url(${mypage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginLeft: "-10px",
              position: "relative",
            }}
            onClick={() => {
              // 로그인상태일시 로그아웃
              if (isUser) {
                logoutFn();
              } else {
                // 로그아웃 상태일시 로그인으로.
                window.location.href = "/login";
              }
            }}
            onMouseEnter={() => {
              setIsToggled((current) => !current);
            }}
          >
            {isToggled ? (
              <LoginDiv
                onMouseLeave={() => {
                  setIsToggled((current) => !current);
                }}
              >
                <LoginToggle />
              </LoginDiv>
            ) : (
              <></>
            )}
          </Children>
          <Children
            style={{
              width: "28px",
              height: "28px",
              marginRight: "20px",
              backgroundImage: `url(${search})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Children>
          <Children
            style={{
              width: "28px",
              height: "28px",
              backgroundImage: `url(${menu})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Children>
        </Menu>
      </Wrapper>
    </Container>
  );
}
export default Navbar;
