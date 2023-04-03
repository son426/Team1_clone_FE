import styled from "styled-components";
import xbutton from "../../assets/xbutton.svg";
import { useRecoilState } from "recoil";
import { clickedButtonAtom } from "../../lib/util/atoms";
const Container = styled.div`
  position: fixed;
  width: 0vw;
  height: calc(100vh - 80px);
  background-color: #f6f3f2;
  transition: width 0.5s linear;
  z-index: 3;
`;
const Wrapper = styled.div`
  position: relative;
  width: 0vw;
  height: calc(100vh - 80px);
`;
export const XButton = styled.div`
  background-color: transparent;
  background-image: url(${xbutton});
  background-position: center;
  background-size: cover;
  height: 40px;
  width: 40px;
  position: absolute;
  right: 30px;
  top: 40px;
  cursor: pointer;
`;

interface IContent {
  opened?: boolean;
}
function HorizontalSection({ opened }: IContent) {
  const [Erase, setErase] = useRecoilState(clickedButtonAtom);
  return (
    <Container style={opened ? { width: "100vw" } : { width: "0px" }}>
      <Wrapper style={opened ? { width: "100vw" } : { width: "0px" }}>
        <XButton onClick={() => setErase({ message: "", index: 0 })} />
      </Wrapper>
    </Container>
  );
}
export default HorizontalSection;
