import { useRecoilState } from "recoil";
import NavyButton from "../../../components/atoms/NavyButton";
import DetailExplanation from "../../../components/molecules/DetailExplanation";
import HorizontalSection from "../../../components/molecules/HorizontalSection";
import VerticalCarousel from "../../../components/molecules/VerticalCarousel";
import { clickedButtonAtom } from "../../../lib/util/atoms";
import * as S from "./Safety.styled";
interface IContent {
  id?: string;
  className?: string;
  zIndex?: number;
  height?: string;
  selected?: boolean;
}
const content = [
  {
    imgurl:
      "https://www.hyundai.com/static/images/model/nexo/21my/nexo_safety_blind_spot_view_monitor.jpg",
    title: "후측방 모니터",
    details: `안전한 차로 변경을 위해 후측방 상황을 영상으로 보여줍니다. 방향지시등\n 스위치를 움직이면 해당 방향의 후측방 영상을 표시해줍니다.`,
  },
  {
    imgurl:
      "https://www.hyundai.com/static/images/model/nexo/21my/nexo_safety_led_reverse_guide_lamp.jpg",
    title: "LED 후진 가이드 램프",
    details: `주차 후 후진 출차 시, 후방 노면에 점선 패턴 형상의 가이드라인 조명을 구\n현함으로써 야간이나 실내공간에서 후진 램프 시인성을 높여주어 주위 차\n량 및 보행자가 넥쏘의 후진을 쉽게 인지할 수 있도록 도와줍니다. (세계 최\n초 적용)`,
  },
];
function Safety({ id, className, zIndex, height, selected }: IContent) {
  const [btnIdentity, setBtnIdentity] = useRecoilState(clickedButtonAtom);
  return (
    <S.Container
      id={id}
      className={className}
      style={{ zIndex: `${zIndex}`, height: `${height}` }}
    >
      <S.Wrapper>
        <NavyButton
          onClickFunction={() => {
            setBtnIdentity({
              message: "Hyundai SmartSense",
              index: 6,
            });
          }}
          message='Hyundai SmartSense'
          left='40px'
          top='50px'
        />
        <HorizontalSection opened={btnIdentity.index === 6 ? true : false} />
        <VerticalCarousel content={content} />
        <DetailExplanation
          title='Safety'
          details={`내일의 모빌리티 기술을 오늘의 사람들에게 구현합니다.
          가장 진보된 수소전기차답게 지능형 자율주행 기술의 신뢰성을 한층 높였습니다.`}
          selected={selected ? "activated" : "none"}
        />
      </S.Wrapper>
    </S.Container>
  );
}
export default Safety;
