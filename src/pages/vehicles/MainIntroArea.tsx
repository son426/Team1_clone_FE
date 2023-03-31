import * as S from "./MainIntroArea.styled";
import VehicleIntroMenu from "./VehicleIntroMenu";
import { useEffect, useState, useRef } from "react";
interface IContent {
  stuff: string[];
  scroll?: boolean;
  func?: any;
}
function MainIntroArea({ stuff, scroll, func }: IContent) {
  const [scrollValue, setScrollValue] = useState(11);
  const [scrolledIndex, setScrolledIndex] = useState(0);
  const container = document.getElementById("container");
  const handleScroll = () => {
    setScrollValue(container?.scrollTop as any);
  };
  const handleMenuClick = (e: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    container ? (container.style.scrollSnapType = "none") : null;
    container?.scrollTo({
      top: e * container?.offsetHeight,
      behavior: "smooth",
    });
    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      container ? (container.style.scrollSnapType = "y mandatory") : null;
    }, 300);
  };

  useEffect(() => {
    if (scrollValue < 10) {
      func();
    }
    setScrolledIndex(Math.round(scrollValue / Number(container?.offsetHeight)));
  }, [scrollValue]);

  return (
    <S.Container
      style={scroll ? { top: "80px" } : { top: "100vh" }}
      id='container'
      onScroll={handleScroll}
    >
      <VehicleIntroMenu
        list={["Highlights", "Streamliner", "Design"]}
        func={handleMenuClick}
        currentIndex={scrolledIndex}
      />
      {stuff.map((content) => {
        return <S.DummyDiv color={content} />;
      })}
    </S.Container>
  );
}
export default MainIntroArea;
