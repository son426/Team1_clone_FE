import * as S from "./VehicleIntroMenu.styled";
import { useEffect, useState } from "react";
interface IContent {
  list: string[];
  func?: any;
  currentIndex?: number;
}
function VehicleIntroMenu({ list, func, currentIndex }: IContent) {
  const [clickedIndex, setClickedIndex] = useState(0);
  const [onMouse, setOnMouse] = useState(0);
  const handleClick = (index: number) => {
    setClickedIndex(index);
    func(index);
  };
  useEffect(() => {
    setClickedIndex(currentIndex as number);
  }, [currentIndex]);
  return (
    <S.Container
      onMouseEnter={(e: any) => {
        setOnMouse(1);
      }}
      onMouseLeave={(e: any) => {
        setOnMouse(0);
      }}
    >
      {list.map((content, index) =>
        clickedIndex === index ? (
          <S.ElementWrapper onClick={() => handleClick(index)}>
            <S.Circle style={{ height: "25px", backgroundColor: "#002C5F" }} />
            <S.Letter style={{ fontWeight: 600, color: "#002c5f" }}>
              {content}
            </S.Letter>
          </S.ElementWrapper>
        ) : (
          <S.ElementWrapper
            onClick={(e: any) => {
              handleClick(index);
            }}
          >
            <S.Circle />
            <S.Letter
              style={
                onMouse
                  ? { color: "#676767", transform: "translateX(0px)" }
                  : { color: "transparent", transform: "translateX(-30px)" }
              }
            >
              {content}
            </S.Letter>
          </S.ElementWrapper>
        )
      )}
    </S.Container>
  );
}
export default VehicleIntroMenu;
