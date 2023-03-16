import { CSSProperties } from "styled-components";
import * as S from "./Firstarea.styled";
interface IStyle {
  style: CSSProperties;
}
function Firstarea({ style }: IStyle) {
  return <S.Container style={style}></S.Container>;
}
export default Firstarea;
