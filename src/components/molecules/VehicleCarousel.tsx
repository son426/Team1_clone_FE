import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import ShinyCircle from "./ShinyCircle";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 230px);
  background-color: black;
  overflow: hidden;
`;
const ImgWrapper = styled.div`
  position: absolute;
  height: calc(100vh - 230px);
  display: flex;
  width: max-content;
  transition: left 0.5s linear;
`;
const Image = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 230px);
  background-size: cover;
`;
const Menu = styled.div`
  position: absolute;
  width: 100vw;
  height: 60px;
  display: flex;
  bottom: 0;
`;
const MenuButton = styled.div`
  position: relative;
  height: 60px;
  font-family: "HyundaiSansTextKR";
  font-size: 16px;
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: left;
  cursor: pointer;
  padding-left: 20px;
`;
const Arrow = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-top: 1px solid white;
  border-right: 1px solid white;
  transition: transform 0.2s linear;
  right: 20px;
  transform: rotate(45deg);
`;
interface Idotlist {
  left?: string;
  top?: string;
  title?: string;
  details?: string;
  imglink?: string;
}
interface Iimglist {
  imglink: string;
  name: string;
  dot?: Idotlist[];
}
interface IContent {
  imgs: Iimglist[];
}

function VehicleCarousel({ imgs }: IContent) {
  const [clickedIndex, setClickedIndex] = useState(0);
  return (
    <Container>
      <ImgWrapper style={{ left: `calc(${clickedIndex} * (-100vw))` }}>
        {imgs.map((Content) => {
          return (
            <Image style={{ backgroundImage: `url(${Content.imglink})` }}>
              {Content.dot?.map((dot) => {
                return (
                  <ShinyCircle
                    left={dot.left as string}
                    top={dot.top as string}
                    title={dot.title as string}
                    details={dot.details as string}
                    imgurl={dot.imglink as string}
                  />
                );
              })}
            </Image>
          );
        })}
      </ImgWrapper>
      <Menu>
        {imgs.map((Content, index) => {
          return (
            <MenuButton
              onClick={() => setClickedIndex(index)}
              style={{
                width: `calc(100vw/${imgs.length - 1})`,
                backgroundColor: `${
                  clickedIndex === index ? "#00000066" : "#000000B3"
                }`,
              }}
            >
              {Content.name}
              <Arrow
                style={{
                  transform: `${
                    clickedIndex === index ? "rotate(-45deg)" : "rotate(45deg)"
                  }`,
                }}
              />
            </MenuButton>
          );
        })}
      </Menu>
    </Container>
  );
}
export default VehicleCarousel;
