import styled from "styled-components";
import logo from "../../assets/logo.jpg";
import mypage from "../../assets/mypage.png";
import search from "../../assets/search.png";
import shop from "../../assets/shop.png";
import { useState } from "react";
const Container = styled.div`
  position: fixed;
  top: 0;
  transition: top 0.5s;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  position: relative;
  background-color: white;
`;
const Logo = styled.img`
  width: 166px;
  height: 70px;
  padding-left: 20px;
  background-position: center;
  background-size: cover;
  margin-right: 60px;
`;
const Menu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  font-size: 16px;
  font-family: "HyundaiSansTextKR";
`;
const Children = styled.li`
  list-style: none;
  margin-right: 35px;
  cursor: pointer;
  font-family: "HyundaiSansTextKR";
  display: flex;
`;

const Underbar = styled.div`
  background-color: #002c5f;
  position: absolute;
  height: 4px;
  width: 10px;
  bottom: 0;
  transition: left 0.5s, width 0.5s;
`;

const LangSelect = styled.button``;
const LineDivide = styled.div`
  width: 1px;
  height: 14px;
  background-color: rgb(153, 153, 153);
  margin-left: 20px;
`;

interface IStyle {
  style?: any;
}
function Navbar({ style }: IStyle) {
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [offsetWidth, setOffsetWidth] = useState(0);
  return (
    <Container style={style}>
      <Wrapper>
        <Logo src={logo} />
        <Menu>
          {offsetLeft ? (
            <Underbar
              style={{ width: `${offsetWidth}px`, left: `${offsetLeft}px` }}
            />
          ) : null}
          <Children
            onMouseEnter={(e: any) => {
              setOffsetLeft(e.target.offsetLeft);
              setOffsetWidth(e.target.offsetWidth);
            }}
          >
            모델
          </Children>
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
        <Menu>
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
              width: "30px",
              height: "30px",
              marginRight: "20px",
              backgroundImage: `url(${mypage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginLeft: "-10px",
            }}
          ></Children>
          <Children
            style={{
              width: "30px",
              height: "30px",
              marginRight: "20px",
              backgroundImage: `url(${search})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Children>
          <Children
            style={{
              width: "30px",
              height: "30px",
              backgroundImage: `url(${mypage})`,
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
