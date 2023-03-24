import { useEffect, useState } from "react";
import ExplanationBox from "../../../components/molecules/ExplanationBox";
import * as S from "./Highlights.styled";
interface IContent {
  id?: string;
  className?: string;
  zIndex?: number;
  height?: string;
  selected?: boolean;
}
function Highlights({ id, className, zIndex, height, selected }: IContent) {
  const [loaded, setLoaded] = useState(false);
  const Myself = document.getElementById(id as any);

  return (
    <S.Container
      id={id}
      className={className}
      style={{
        zIndex: `${zIndex}`,
        height: `${height}`,
      }}
    >
      <S.Wrapper>
        <S.TitleWrapper>
          <S.Title>Highlights</S.Title>
          <S.Headline>Positive Energy, NEXO</S.Headline>
          <S.Details>
            이동수단으로서의 차를 넘어 인간의 삶 전반을 아우르는 미래 모빌리티의
            완성. 첨단기술의 혁신적인 융합으로 구현된 넥쏘가 새로운 비전을
            제시합니다.
          </S.Details>
        </S.TitleWrapper>
        <ExplanationBox
          image='https://www.hyundai.com/static/images/model/nexo/21my/nexo_highlights_kakao_voice_recognition_second_generation.jpg'
          title='Convenience'
          content='보이는 부분은 미래지향적, 보이지 않는 부분은 친환경적이도록. 설계부터 디자인 그리고 공간까지 완벽한 미래 모빌리티를 구현합니다.'
          menuLocation='lower'
          style={{
            width: "calc((100vw - 200px) / 3 - 10px)",
            height: "calc(25vh - 10px)",
          }}
          location={{
            top: "0px",
            right: "calc((100vw - 200px) / 3 + 15px)",
          }}
        />
        <ExplanationBox
          image='https://www.hyundai.com/static/images/model/nexo/21my/nexo_highlights_interior_premium_stone_gray.jpg'
          title='Space'
          content='슬림하게 디자인된 대시보드의 통합형 디스플레이는 차세대 특화 UX 콘텐츠를 제공하는 한편, 브릿지 타입의 센터콘솔을 적용하여 운전자의 편의성은 물론 하이테크 이미지를 더해줍니다.'
          menuLocation='upper'
          style={{
            width: "calc((100vw - 200px) / 3 - 10px)",
            height: "calc(50vh - 10px)",
          }}
          location={{
            top: "0px",
            right: "10px",
          }}
        />
        <ExplanationBox
          image='https://www.hyundai.com/static/images/model/nexo/21my/nexo_highlights_blind_spot_view_monitor.jpg'
          title='Safety'
          content='내일의 모빌리티 기술을 오늘의 사람들에게 구현합니다. 가장 진보된 수소전기차답게 지능형 자율주행 기술의 신뢰성을 한층 높였습니다.'
          menuLocation='lower'
          style={{
            width: "calc((100vw - 200px) / 3 - 10px)",
            height: "calc(25vh - 10px)",
          }}
          location={{
            top: "calc(25vh)",
            right: "calc((100vw - 200px) / 3 + 15px)",
          }}
        />
        <ExplanationBox
          image='https://www.hyundai.com/static/images/model/nexo/21my/nexo_highlights_back.jpg'
          title='Eco'
          content='수소와 산소의 결합으로 어떠한 오염물질 없이 오직 에너지와 물만을 발생시키고, 달리면서 PM2.5 이하의 초미세먼지까지 걸러내는 궁극의 친환경차입니다.'
          menuLocation='lower'
          style={{
            width: "calc((100vw - 200px) * 2 / 3 - 10px)",
            height: "calc(50vh - 10px)",
          }}
          location={{
            top: "calc(50vh)",
            right: "calc((100vw - 200px) / 3 + 15px)",
          }}
        />
        <ExplanationBox
          image='https://www.hyundai.com/static/images/model/nexo/21my/nexo_highlights_led_horizon_positioning_lamp.jpg'
          title='Design'
          content='좌우를 연결하는 호라이즌 포지셔닝 램프와 공기역학을 고려해 설계된 오토 플러시 도어 핸들이 미래지향적인 이미지를 완성해 줍니다.'
          menuLocation='upper'
          style={{
            width: "calc((100vw - 200px) / 3 - 10px)",
            height: "calc(50vh - 10px)",
          }}
          location={{
            top: "calc(50vh)",
            right: "10px",
          }}
        />
      </S.Wrapper>
    </S.Container>
  );
}
export default Highlights;
