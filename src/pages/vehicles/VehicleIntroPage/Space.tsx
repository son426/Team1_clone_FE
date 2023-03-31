import DetailExplanation from "../../../components/molecules/DetailExplanation";
import ShinyCircle from "../../../components/molecules/ShinyCircle";
import VehicleCarousel from "../../../components/molecules/VehicleCarousel";
import * as S from "./Space.styled";
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
      "https://www.hyundai.com/static/images/model/nexo/21my/nexo_space_interior_premium_stone_gray.png",
    name: "Space",
    dot: [
      {
        left: "430px",
        top: "300px",
        title: "물 배출 스위치",
        details:
          "넥쏘의 유일한 배출물은 물입니다. 겨울철 배출되는 생성수로 인한 바닥 오염 및 결빙을 방지할 수 있도록 스택 생성수를 강제로 배출하는 기능을 제공합니다.",
        imglink:
          "https://www.hyundai.com/static/images/model/nexo/21my/nexo_design_led_horizon_positioning_lamp.jpg",
      },
      {
        left: "660px",
        top: "150px",
        title: "클러스터 (10.25인치 컬러 LCD)",
        details:
          "10.25인치의 클러스터는 탁월한 개방감과 주행모드별 차별화된 그래픽으로 즐거운 드라이빙 환경을 제공합니다.",
        imglink:
          "https://www.hyundai.com/static/images/model/nexo/21my/nexo_design_rain_sensor.jpg",
      },
      {
        left: "770px",
        top: "220px",
        title: "회생제동 컨트롤 패들 쉬프트",
        details:
          "패들 쉬프트 레버로 회생제동량을 변경하여 주행의 재미와 실도로 연비 개선 효과를 동시에 누릴 수 있습니다. 패들 쉬프트 우측을 한번 당길 때마다 회생제동량이 1단계식 상승하면서 차량 감속도가 커지고, 좌측을 한번 당길 때마다 회생제동량이 1단계식 내려가면서 차량 감속도가 작아집니다. * 회생 제동 기능 : 차량 감속 및 제동 시 전기 모터를 사용, 운동 에너지를 전기 에너지로 변환시켜 구동용 배터리를 충전하는 기능입니다.",
        imglink:
          "https://www.hyundai.com/static/images/model/nexo/21my/nexo_design_wide_sun_roof.jpg",
      },
      {
        left: "1000px",
        top: "130px",
        title: "12.3인치 내비게이션 (블루링크, 폰 프로젝션, 블루투스 핸즈프리)",
        details:
          "12.3인치의 와이드 스크린 내비게이션은 분할 화면을 사용하여 화면 전환 없이 정보를 간편하게 확인할 수 있습니다. 또한 통화, SMS 발신, 실시간 날씨 및 스포츠 정보, 음성 인식 차량 제어 등 다양한 인포테인먼트 기술이 탑재되어 드라이빙의 즐거움을 높여줍니다. * 인포테인먼트 시스템 화면 이미지는 정기 업데이트에 따라 변동될 수 있습니다.",
        imglink:
          "https://www.hyundai.com/static/images/model/nexo/21my/nexo_design_1st_row_safety_power_window_auto_up_down.jpg",
      },
      {
        left: "950px",
        top: "400px",
        title: "브릿지 타입 센터콘솔/전자식 변속 버튼",
        details:
          "일반적인 형태의 기어노브가 아닌 버튼을 누르는 방식을 적용해 직관적이면서도 미래지향적인 이미지를 구현합니다.",
        imglink:
          "https://www.hyundai.com/static/images/model/nexo/21my/nexo_design_auto_flush_door_handle.jpg",
      },
      {
        left: "1400px",
        top: "630px",
        title: "친환경 내장재 (바이오 소재)",
        details:
          "식물성 인조가죽, 플라스틱, 패브릭 등 인테리어에 사용된 내장재 대부분은 UL 인증 바이오 소재(UL Certified BIO Materials)를 사용하여 고급스러움과 친환경성을 더했습니다.",
        imglink:
          "https://www.hyundai.com/static/images/model/nexo/21my/nexo_design_auto_flush_door_handle.jpg",
      },
      {
        left: "1600px",
        top: "410px",
        title: "KRELL 프리미엄 사운드 시스템 (8스피커, 외장앰프)",
        details:
          "음향의 세밀함과 공간감, 다이내믹함을 추구하며 세계 유수의 사운드 어워드를 수상한 세계적인 하이앤드 오디오 시스템 브랜드인 KRELL 사운드 시스템을 적용하였습니다.",
        imglink:
          "https://www.hyundai.com/static/images/model/nexo/21my/nexo_design_auto_flush_door_handle.jpg",
      },
    ],
  },
  {
    imglink:
      "https://www.hyundai.com/static/images/model/nexo/21my/nexo_space_interior_and_navigation.png",
    name: "Overview",
  },
];
function Space({ id, className, zIndex, height, selected }: IContent) {
  return (
    <S.Container
      id={id}
      className={className}
      style={{ zIndex: `${zIndex}`, height: `${height}` }}
    >
      <S.Wrapper>
        <VehicleCarousel imgs={imgs} />
        <DetailExplanation
          selected={selected ? "activated" : "none"}
          title='Space'
          details={`슬림하게 디자인된 대시보드의 통합형 디스플레이는 차세대 특화 UX 콘텐츠를 제공하는 한편,\n브릿지 타입의 센터콘솔을 적용하여 운전자의 편의성은 물론 하이테크 이미지를 더해줍니다.`}
        />
      </S.Wrapper>
    </S.Container>
  );
}
export default Space;
