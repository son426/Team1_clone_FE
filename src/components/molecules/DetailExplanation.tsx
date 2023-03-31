import styled, { css, keyframes } from "styled-components";
const letterMove = keyframes`
  0%{
    margin-top:200px;
    opacity:0%;
  }
  100%{
    margin-top:0px;
    opacity:100%;
  }`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  height: 150px;
  background-color: white;
`;
export const Title = styled.div`
  font-family: "HyundaiSansTextKR";
  font-size: 53px;
  font-weight: 600;
  padding: 50px;
  animation: ${(props) =>
    props.id === "activated"
      ? css`
          ${letterMove} 2s ease-in-out
        `
      : "none"};
`;
export const Details = styled.div`
  font-family: "HyundaiSansTextKR";
  font-size: 20px;
  padding: 20px;
  animation: ${(props) =>
    props.id === "activated"
      ? css`
          ${letterMove} 3s ease-in-out
        `
      : "none"};
`;

interface IContent {
  title: string;
  details: string;
  selected: string;
}

function DetailExplanation({ title, details, selected }: IContent) {
  return (
    <Container>
      <Title id={selected}>{title}</Title>
      <Details id={selected}>
        {details.split("\n").map((content, index) => {
          return (
            <>
              {content}
              <br />
            </>
          );
        })}
      </Details>
    </Container>
  );
}
export default DetailExplanation;
