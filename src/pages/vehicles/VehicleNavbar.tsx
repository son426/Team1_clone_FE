import * as S from "./VehicleNavbar.styled";
import logo from "../../assets/onlylogo.png";
import { useEffect, useState } from "react";
interface IContent {
  list: string[];
  style?: React.CSSProperties;
  id?: string;
  func?: any;
}

function VehicleNavbar({ list, style, id, func }: IContent) {
  const [offsetLeft, setOffsetLeft] = useState(0);
  const [offsetWidth, setOffsetWidth] = useState(0);
  useEffect(() => {
    setOffsetLeft(0);
    setOffsetWidth(0);
  }, [id]);

  return (
    <S.Container style={style} id={id}>
      <S.Wrapper>
        {id === "scrolled" ? (
          <>
            <S.Logo src={logo}></S.Logo>
            <S.carName>넥쏘</S.carName>
          </>
        ) : (
          <S.Logo />
        )}
        <S.Menu>
          {offsetLeft ? (
            <S.Underbar
              style={{ width: `${offsetWidth}px`, left: `${offsetLeft}px` }}
            />
          ) : null}
          {list.map((content) => {
            return (
              <S.Children
                onMouseEnter={(e: any) => {
                  setOffsetLeft(e.target.offsetLeft);
                  setOffsetWidth(e.target.offsetWidth);
                }}
              >
                {content}
              </S.Children>
            );
          })}
        </S.Menu>
        <S.BtnGroup>
          <S.Button>
            내 차 만들기
            <S.Arrow />
          </S.Button>
          <S.Button>
            구매상담신청 <S.Arrow />
          </S.Button>
          <S.Button>
            시승 신청 <S.Arrow />
          </S.Button>
          {id === "scrolled" ? null : (
            <S.MouseWrapper>
              <S.Mouse
                onClick={() => {
                  func();
                }}
              >
                <S.Wheel></S.Wheel>
              </S.Mouse>
              <S.MouseArrow />
            </S.MouseWrapper>
          )}
        </S.BtnGroup>
      </S.Wrapper>
    </S.Container>
  );
}
export default VehicleNavbar;
