import * as S from "./Vehicle.styled";
import VehicleIntroMenu from "./VehicleIntroMenu";

function Vehicle() {
  return (
    <S.Container>
      <VehicleIntroMenu list={["Highlights", "Streamliner", "Design"]} />
    </S.Container>
  );
}

export default Vehicle;
