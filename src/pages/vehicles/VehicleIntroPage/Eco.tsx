import NavyButton from "../../../components/atoms/NavyButton";
import DetailExplanation from "../../../components/molecules/DetailExplanation";
import * as S from "./NormalPage.styled";
import { clickedButtonAtom } from "../../../lib/util/atoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import HorizontalSection from "../../../components/molecules/HorizontalSection";
interface IContent {
  id?: string;
  className?: string;
  zIndex?: number;
  height?: string;
  selected?: boolean;
}
function Eco({ id, className, zIndex, height, selected }: IContent) {
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
              message: "자세히 모기",
              index: 1,
            })
          }
          message='자세히 모기'
          left='40px'
          top='50px'
        />
        <HorizontalSection opened={btnIdentity.index === 1 ? true : false} />
        <S.Image></S.Image>
        <DetailExplanation
          selected={selected ? "activated" : "none"}
          title='Eco'
          details={`수소와 산소의 결합으로 어떠한 오염물질 없이 오직 에너지와 물만을 발생시키고, \n달리면서 PM2.5 이하의 초미세먼지까지 걸러내는 궁극의 친환경차입니다.`}
        />
      </S.Wrapper>
    </S.Container>
  );
}
export default Eco;
