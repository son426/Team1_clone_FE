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
  const container = document.getElementById("container");
  const handleScroll = () => {
    setScrollValue(container?.scrollTop as any);
  };
  useEffect(() => {
    console.log(scrollValue, "스크롤값");
    if (scrollValue < 10) {
      func();
    }
  }, [scrollValue]);

  return (
    <S.Container
      style={scroll ? { top: "80px" } : { top: "100vh" }}
      id='container'
      onScroll={handleScroll}
    >
      <VehicleIntroMenu list={["Highlights", "Streamliner", "Design"]} />
      {stuff.map((content) => {
        return <S.DummyDiv color={content} />;
      })}
    </S.Container>
  );
}
export default MainIntroArea;
