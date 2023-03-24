import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
const hoverMove = keyframes`
  0%{
    margin-top:25px;
    opacity:0%;
  }
  100%{
    margin-top:0px;
    opacity:100%;
  }
`;

const Container = styled.div`
  position: absolute;
  cursor: pointer;
`;
const Wrapper = styled.div`
  position: relative;
  background-size: cover;
`;
const Title = styled.div`
  position: absolute;
  font-family: "HyundaiSansTextKR";
  font-size: 20px;
  left: 20px;
  color: white;
  font-weight: 600;
`;
const HoverWrapper = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
`;
const HoverTitle = styled.div`
  font-family: "HyundaiSansTextKR";
  font-size: 20px;
  color: white;
  padding: 20px 20px 10px 20px;
  animation: ${hoverMove} 0.5s ease-in-out;
`;
const HoverContent = styled.div`
  font-family: "HyundaiSansTextKR";
  font-size: 16px;
  color: white;
  padding: 10px 20px;
  animation: ${hoverMove} 0.5s ease-in-out;
`;
const SpanIcon = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconElement = styled.span`
  height: 2px;
  width: 25px;
  background-color: white;
  margin-bottom: 8px;
`;

interface IContent {
  image: string;
  title: string;
  content: string;
  menuLocation: string;
  location?: any;
  style?: any;
}

function ExplanationBox({
  image,
  title,
  content,
  menuLocation,
  style,
  location,
}: IContent) {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "click",
      () => {
        setFocus(false);
      },
      {
        capture: true,
      }
    );
  });
  return (
    <Container
      style={location}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      onClick={(event) => {
        event?.stopPropagation();
        setFocus(true);
      }}
    >
      <Wrapper style={{ ...style, backgroundImage: `url(${image})` }}>
        {!mouseEnter && !focus ? (
          <Title
            style={
              menuLocation === "lower" ? { bottom: "50px" } : { top: "20px" }
            }
          >
            {title}
            <SpanIcon
              style={
                menuLocation === "lower" ? { bottom: "-35px" } : { top: "40px" }
              }
            >
              <IconElement></IconElement>
              <IconElement></IconElement>
              <IconElement></IconElement>
            </SpanIcon>
          </Title>
        ) : null}

        {mouseEnter || focus ? (
          <HoverWrapper>
            <HoverTitle>{title}</HoverTitle>
            <HoverContent>{content}</HoverContent>
          </HoverWrapper>
        ) : null}
      </Wrapper>
    </Container>
  );
}
export default ExplanationBox;
