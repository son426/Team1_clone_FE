import * as S from "./VehicleIntroMenu.styled";
import { useState } from "react";
interface IContent {
  list: string[];
}
function VehicleIntroMenu({ list }: IContent) {
  const [clickedIndex, setClickedIndex] = useState(0);
  const [onMouse, setOnMouse] = useState(0);
  return (
    <S.Container
      onMouseEnter={(e: any) => {
        console.log("마우스 들어옴");
        setOnMouse(1);
      }}
      onMouseLeave={(e: any) => {
        setOnMouse(0);
        console.log("마우스 나감");
      }}
    >
      {list.map((content, index) =>
        clickedIndex === index ? (
          <S.ElementWrapper
            onClick={(e: any) => {
              setClickedIndex(index);
            }}
          >
            <S.Circle style={{ height: "25px", backgroundColor: "#002C5F" }} />
            <S.Letter style={{ fontWeight: 600, color: "#002c5f" }}>
              {content}
            </S.Letter>
          </S.ElementWrapper>
        ) : (
          <S.ElementWrapper
            onClick={(e: any) => {
              setClickedIndex(index);
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
