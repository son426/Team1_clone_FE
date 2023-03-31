import styled, { keyframes } from "styled-components";
import { useEffect, useState, useRef } from "react";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 230px);
  background-color: white;
  display: flex;
`;
const ImgWrapper = styled.div`
  height: calc(100vh - 230px);
  width: 70vw;
  background-size: cover;
`;
const Menu = styled.div`
  height: calc(100vh - 230px);
  width: 30vw;
  position: fixed;
  right: -50px;
  display: flex;
  flex-direction: column;
`;
const MenuElement = styled.div`
  position: relative;
  height: 54px;
  width: 24vw;
  border-bottom: 1px solid black;
  font-size: 21px;
  font-family: "HyundaiSansTextKR";
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Details = styled.div`
  font-size: 16px;
  font-family: "HyundaiSansTextKR";
  color: gray;
  line-height: 2em;
  width: 24vw;
`;
const Arrow = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  border-top: 1px solid black;
  border-right: 1px solid black;
  transition: transform 0.2s linear;
  right: 10px;
`;
interface IElement {
  imgurl: string;
  title: string;
  details: string;
}
interface IContent {
  content: IElement[];
}
function VerticalCarousel({ content }: IContent) {
  const [clickedIndex, setClickedIndex] = useState(0);
  const image = useRef<HTMLDivElement>(null);
  useEffect(() => {
    image?.current?.animate(
      [{ marginLeft: "-1000px" }, { marginLeft: "0px" }],
      {
        duration: 500,
      }
    );
  }, [clickedIndex]);
  return (
    <Container>
      <ImgWrapper
        ref={image}
        style={{ backgroundImage: `url(${content[clickedIndex].imgurl})` }}
      ></ImgWrapper>
      <Menu>
        {content.map((element, index) => {
          return (
            <>
              <MenuElement
                onClick={() => {
                  setClickedIndex(index);
                }}
              >
                {element.title}
                <Arrow
                  style={
                    clickedIndex === index
                      ? {
                          transform: "rotate(-45deg)",
                          width: "8px",
                          height: "8px",
                          borderWidth: "2px",
                        }
                      : { transform: "rotate(135deg)" }
                  }
                />
              </MenuElement>
              {clickedIndex === index ? (
                <Details
                  style={{
                    height: `calc(100vh - 230px - (54px * ${content.length}))`,
                  }}
                >
                  {element.details.split("\n").map((content) => {
                    return (
                      <>
                        {content}
                        <br />
                      </>
                    );
                  })}
                </Details>
              ) : (
                <Details style={{ height: "0px" }}></Details>
              )}
            </>
          );
        })}
      </Menu>
    </Container>
  );
}
export default VerticalCarousel;
