import { Navigate, useNavigate } from "react-router-dom";
import NavyButton from "../../../components/atoms/NavyButton";
import DetailExplanation from "../../../components/molecules/DetailExplanation";
import * as S from "./NormalPage.styled";
interface IContent {
  id?: string;
  className?: string;
  zIndex?: number;
  height?: string;
  selected?: boolean;
}
function ServiceNetwork({ id, className, zIndex, height, selected }: IContent) {
  return (
    <S.Container
      id={id}
      className={className}
      style={{
        zIndex: `${zIndex}`,
        height: `${height}`,
      }}
    >
      <S.Wrapper style={{ backgroundColor: "black" }}>
        <NavyButton
          onClickFunction={() =>
            window.open(
              "https://www.hyundai.com/kr/ko/customer-support/service-network/fcev-service-network",
              "_blank"
            )
          }
          message={`Service Network\n자세히 보기`}
          left='calc(100vw - 400px)'
          top='calc(100% - 105px)'
        />
        <S.Image
          style={{
            backgroundImage:
              "url(https://www.hyundai.com/static/images/model/nexo/21my/nexo_service_network_information.png)",
          }}
        ></S.Image>
        <DetailExplanation
          selected={selected ? "activated" : "none"}
          title='Service Network'
          details={`현대자동차의 수소전기차 서비스네트워크 정보에 대해 안내 드립니다.`}
        />
      </S.Wrapper>
    </S.Container>
  );
}
export default ServiceNetwork;
