import DetailExplanation from "../../../components/molecules/DetailExplanation";
import VehicleCarousel from "../../../components/molecules/VehicleCarousel";
import * as S from "./Design.styled";
interface IContent {
  id?: string;
  className?: string;
  zIndex?: number;
  height?: string;
  selected?: boolean;
}
const imgs = [
  {
    imglink:
      "https://www.hyundai.com/static/images/model/nexo/21my/nexo_design_front.png",
    name: "Overview",
  },
  {
    imglink:
      "https://www.hyundai.com/static/images/model/nexo/21my/nexo_design_front_side.png",
    name: "Front",
    dot: [
      {
        left: "650px",
        top: "400px",
        title: "LED 호라이즌 포지셔닝 램프 / LED 헤드램프 / 캐스캐이딩 그릴",
        imglink:
          "https://www.hyundai.com/static/images/model/nexo/21my/nexo_design_led_horizon_positioning_lamp.jpg",
      },
      {
        left: "1000px",
        top: "230px",
        title: "레인센서",
        details:
          "스티어링 휠 우측 레버의 와이퍼 조절장치 스위치를 AUTO로 위치하였을 때 주행 중 우천 상황을 자동으로 감지하여 와이퍼가 작동 및 조작 단계를 자동으로 조절하는 기능입니다.",
        imglink:
          "https://www.hyundai.com/static/images/model/nexo/21my/nexo_design_rain_sensor.jpg",
      },
      {
        left: "1100px",
        top: "200px",
        title: "와이드 선루프",
        details:
          "개방감을 높이기 위한 아웃 슬라이딩 방식을 적용하여 차체 강성은 물론, 스포티한 감성도 선사합니다.",
        imglink:
          "https://www.hyundai.com/static/images/model/nexo/21my/nexo_design_wide_sun_roof.jpg",
      },
      {
        left: "1150px",
        top: "250px",
        title: "1열 세이프티 파워 윈도우 (오토 업다운)",
        details:
          "유리창이 원터치 자동 닫힘 기능이 작동하여 닫히는 중에 일정한 힘에 의해 막히면 자동으로 닫힘을 멈추고, 일정한 높이만큼 다시 열립니다. 그러나 그 힘이 일정 정도 이하거나 스위치를 첫 번째 걸리는 위치에서 계속 당겨 수동으로 닫을 때는 끼임 인식 기능이 작동하지 않습니다.",
        imglink:
          "https://www.hyundai.com/static/images/model/nexo/21my/nexo_design_1st_row_safety_power_window_auto_up_down.jpg",
      },
      {
        left: "1200px",
        top: "340px",
        title: "오토 플러시 도어 핸들",
        details:
          "주차, 주행 시에는 도어 내측에 숨겨져 있다가 승하차 시에는 자동으로 팝업되는 첨단 도어 핸들 시스템입니다.",
        imglink:
          "https://www.hyundai.com/static/images/model/nexo/21my/nexo_design_auto_flush_door_handle.jpg",
      },
    ],
  },
  {
    imglink:
      "https://www.hyundai.com/static/images/model/nexo/21my/nexo_design_back_side.png",
    name: "Rear",
  },
  {
    imglink:
      "https://www.hyundai.com/static/images/model/nexo/21my/nexo_design_wheel.png",
    name: "Wheel",
  },
];

function Design({ id, className, zIndex, height, selected }: IContent) {
  return (
    <S.Container
      id={id}
      className={className}
      style={{ zIndex: `${zIndex}`, height: `${height}` }}
    >
      <S.Wrapper>
        <VehicleCarousel imgs={imgs} />
        <DetailExplanation
          title='Design'
          details='좌우를 연결하는 호라이즌 포지셔닝 램프와 공기역학을 고려해 설계된 오토 플러시 도어 핸들이 미래지향적인 이미지를 완성해 줍니다.'
          selected={selected ? "activated" : "none"}
        />
      </S.Wrapper>
    </S.Container>
  );
}
export default Design;
