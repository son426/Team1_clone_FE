import * as S from "./VehicleIntroMenu.styled";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { clickedButtonAtom } from "../../lib/util/atoms";
interface IList {
  name: string;
  color?: string;
}
interface IContent {
  list: IList[];
  func?: any;
  currentIndex?: number;
}
function VehicleIntroMenu({ list, func, currentIndex }: IContent) {
  const [clickedIndex, setClickedIndex] = useState(0);
  const [onMouse, setOnMouse] = useState(0);
  const [erase, setErase] = useRecoilState(clickedButtonAtom);
  const handleClick = (index: number) => {
    setClickedIndex(index);
    func(index);
  };
  useEffect(() => {
    setErase({ message: "", index: 0 });
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
            <S.Circle
              style={{
                height: "25px",
                backgroundColor: `${content.color ? content.color : "#002C5F"}`,
              }}
            />
            <S.Letter
              style={{
                fontWeight: 600,
                color: `${content.color ? content.color : "#002C5F"}`,
              }}
            >
              {content.name}
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
              {content.name}
            </S.Letter>
          </S.ElementWrapper>
        )
      )}
    </S.Container>
  );
}
export default VehicleIntroMenu;
