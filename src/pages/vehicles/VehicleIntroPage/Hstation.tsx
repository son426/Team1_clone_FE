import { useRecoilState } from "recoil";
import NavyButton from "../../../components/atoms/NavyButton";
import DetailExplanation from "../../../components/molecules/DetailExplanation";
import HorizontalSection from "../../../components/molecules/HorizontalSection";
import { clickedButtonAtom } from "../../../lib/util/atoms";
import * as S from "./NormalPage.styled";
interface IContent {
  id?: string;
  className?: string;
  zIndex?: number;
  height?: string;
  selected?: boolean;
}
function Hstation({ id, className, zIndex, height, selected }: IContent) {
  const [btnIdentity, setBtnIdentity] = useRecoilState(clickedButtonAtom);
  return (
    <S.Container
      id={id}
      className={className}
      style={{ zIndex: `${zIndex}`, height: `${height}` }}
    >
      <S.Wrapper>
        <NavyButton
          onClickFunction={() =>
            setBtnIdentity({
              message: "수소충전소 안내",
              index: 8,
            })
          }
          message='수소충전소 안내'
          left='40px'
          top='50px'
        />
        <HorizontalSection opened={btnIdentity.index === 8 ? true : false} />
        <S.Image
          style={{
            backgroundImage:
              "url(https://www.hyundai.com/static/images/model/nexo/21my/nexo_h_station_hydrogen_station.png)",
          }}
        ></S.Image>
        <DetailExplanation
          selected={selected ? "activated" : "none"}
          title='H Station'
          details={`현대자동차의 친환경 수소충전소 H 스테이션의 위치 및 운영시간을 안내해드립니다.`}
        />
      </S.Wrapper>
    </S.Container>
  );
}
export default Hstation;
