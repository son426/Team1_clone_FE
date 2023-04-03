import styled from "styled-components";
const Wrapper = styled.button`
  background-color: #002c5f;
  font-family: "HyundaiSansTextKR";
  color: white;
  border: none;
  font-size: 16px;
  position: absolute;
  width: max-content;
  height: max-content;
  padding: 10px 30px;
  cursor: pointer;
  z-index: 10;
`;
interface IContent {
  message: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  onClickFunction?: any;
}

function NavyButton({
  message,
  top,
  left,
  right,
  bottom,
  onClickFunction,
}: IContent) {
  return (
    <Wrapper
      style={{
        top: `${top}`,
        left: `${left}`,
        right: `${right}`,
        bottom: `${bottom}`,
      }}
      onClick={onClickFunction}
    >
      {message.split("\n").map((content) => {
        return (
          <>
            {content}
            <br />
          </>
        );
      })}
    </Wrapper>
  );
}
export default NavyButton;
