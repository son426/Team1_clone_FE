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
function Service({ id, className, zIndex, height, selected }: IContent) {
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
              message: "NEXO 사용 가이드",
              index: 7,
            })
          }
          message='NEXO 사용 가이드'
          left='40px'
          top='50px'
        />
        <HorizontalSection opened={btnIdentity.index === 7 ? true : false} />
        <S.Image
          style={{
            backgroundImage:
              "url(https://www.hyundai.com/static/images/model/nexo/21my/nexo_service_front_side_and_coast.png)",
          }}
        ></S.Image>
        <DetailExplanation
          selected={selected ? "activated" : "none"}
          title='Service'
          details={`‘미래 자동차 기술의 현재화’ 라는 개발 철학 아래, 가장 진보된 기술로 완성된 미래 모빌리티를 가장 먼저 경험하십시오.`}
        />
      </S.Wrapper>
    </S.Container>
  );
}
export default Service;
