import DetailExplanation from "../../../components/molecules/DetailExplanation";
import VerticalCarousel from "../../../components/molecules/VerticalCarousel";
import * as S from "./Convenience.styled";
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
      "https://www.hyundai.com/static/images/model/nexo/21my/nexo_convenience_kakao_voice_recognition_second_generation.jpg",
    title: "음성 인식 차량 제어",
    details: `스티어링 휠의 음성인식 버튼을 통해 필요한 정보 안내는 물론, AVN 관련\n기능, 공조제어, 열선 (리어글래스, 아웃사이드 미러, 스티어링 휠) 등 차량\n제어 및 생활 속 다양한 정보 등도 제공해 드립니다.\n* 블루링크 가입 후 이용할 수 있습니다`,
  },
  {
    imgurl:
      "https://www.hyundai.com/static/images/model/nexo/21my/nexo_convenience_navigation_wireless_updata_ota.jpg",
    title: "내비게이션 무선 업데이트 (OTA)",
    details: `최신 지도와 소프트웨어를 무선으로 업데이트 할 수 있습니다.
    * 블루링크 가입 후 이용할 수 있습니다.
    * 인포테인먼트 시스템 화면 이미지는 정기 업데이트에 따라 변동될 수 있습니다.`,
  },
  {
    imgurl:
      "https://www.hyundai.com/static/images/model/nexo/21my/nexo_convenience_front_ventilation_seat_and_heated_seat.jpg",
    title: "앞좌석 통풍시트/열선시트",
    details: `- 통풍시트 : 3단계로 풍량 조절이 가능한 통풍시트를 적용하여 쾌적한 승차감을 제공합니다.
    - 열선시트 : 3단계로 온도 조절이 가능한 열선시트를 적용하여 쾌적한 승차감을 제공합니다.`,
  },
  {
    imgurl:
      "https://www.hyundai.com/static/images/model/nexo/21my/nexo_convenience_cellphone_wireless_charge_system.jpg",
    title: "휴대폰 무선충전",
    details: `별도의 케이블 없이 무선으로 충전이 가능하고 스마트폰 방치 시 알림 기능\n으로 편의성을 높였습니다.`,
  },
  {
    imgurl:
      "https://www.hyundai.com/static/images/model/nexo/21my/nexo_convenience_220v_inverter_200w.jpg",
    title: "220V 인버터(200W)",
    details: `220V의 전기를 출력할 수 있는 차량용 인버터로 전자제품 사용 편의성을\n높였습니다.`,
  },
  {
    imgurl:
      "https://www.hyundai.com/static/images/model/nexo/21my/nexo_convenience_smart_power_tail_gate.jpg",
    title: "스마트 파워 테일게이트",
    details: `스위치 및 스마트키 버튼으로 테일게이트 개방이 가능하며, 설정을 통해 개폐\n 속도 조절 및 열림 높이 조절이 가능합니다.`,
  },
];
function Convenience({ id, className, zIndex, height, selected }: IContent) {
  return (
    <S.Container
      id={id}
      className={className}
      style={{ zIndex: `${zIndex}`, height: `${height}` }}
    >
      <S.Wrapper>
        <VerticalCarousel content={content} />
        <DetailExplanation
          title='Convenience'
          details={`보이는 부분은 미래지향적, 보이지 않는 부분은 친환경적이도록.\n설계부터 디자인 그리고 공간까지 완벽한 미래 모빌리티를 구현합니다.`}
          selected={selected ? "activated" : "none"}
        />
      </S.Wrapper>
    </S.Container>
  );
}
export default Convenience;
