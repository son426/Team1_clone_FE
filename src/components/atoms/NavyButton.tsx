import styled from "styled-components";
const Wrapper = styled.button`
  background-color: #002c5f;
  font-family: "HyundaiSansTextKR";
  color: white;
  border: none;
  font-size: 16px;
  position: absolute;
  width: max-content;
  padding: 10px 20px;
  font-weight: 600;
`;
interface IContent {
  message: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

function NavyButton({ message, top, left, right, bottom }: IContent) {
  return (
    <Wrapper
      style={{
        top: `${top}`,
        left: `${left}`,
        right: `${right}`,
        bottom: `${bottom}`,
      }}
    >
      {message}
    </Wrapper>
  );
}
export default NavyButton;
