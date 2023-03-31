import styled from "styled-components";
import logo from "../../assets/logo.png";
import mypage from "../../assets/mypage.png";
import search from "../../assets/search.png";
import shop from "../../assets/shop.png";
import menu from "../../assets/menu.png";
import { useState, useEffect, useRef } from "react";

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

interface IStyle {
  style?: any;
}
function Navbar({ style }: IStyle) {
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [offsetWidth, setOffsetWidth] = useState(0);

  const [scroll, setScroll] = useState(false);
  let bg = useRef<any>();
  let under = useRef<any>();

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
          <Children
            style={{
              width: "44px",
              height: "17px",
              backgroundSize: "cover",
              backgroundImage: `url(${shop})`,
              marginRight: "100px",
            }}
          ></Children>
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
          <a href="/login">
            <Children
              style={{
                width: "28px",
                height: "28px",
                marginRight: "20px",
                backgroundImage: `url(${mypage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginLeft: "-10px",
              }}
            ></Children>
          </a>
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
