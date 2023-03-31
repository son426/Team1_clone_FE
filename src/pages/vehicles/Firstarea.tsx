import { CSSProperties } from "styled-components";
import NavyButton from "../../components/atoms/NavyButton";
import * as S from "./Firstarea.styled";
interface IStyle {
  style: CSSProperties;
}
function Firstarea({ style }: IStyle) {
  return (
    <S.Container style={style}>
      <S.Wrapper>
        <S.RouteWrapper>
          <S.RouteP>홈</S.RouteP>
          <S.Arrow />
          <S.RouteP>모델</S.RouteP>
          <S.Arrow />
          <S.RouteP>수소/전기차</S.RouteP>
          <S.Arrow />
          <S.RouteP style={{ cursor: "default", color: "#007fA8" }}>
            넥쏘
          </S.RouteP>
        </S.RouteWrapper>
        <S.Title>NEXO</S.Title>
        <S.Headline>Positive Energy, NEXO</S.Headline>
        <S.Price>67,650,000원 부터</S.Price>
        <NavyButton
          message='카탈로그 다운로드'
          top='100px'
          left='calc(100% - 470px)'
        />
        <NavyButton message='가격표 다운로드' top='100px' right='120px' />
        <S.Heart style={{ top: "112px", right: "80px" }} />
      </S.Wrapper>
    </S.Container>
  );
}
export default Firstarea;
