import { useEffect, useState } from "react";
import Navbar from "../../components/molecules/Navbar";
import Firstarea from "./Firstarea";
import MainIntroArea from "./MainIntroArea";
import * as S from "./Vehicle.styled";
import VehicleIntroMenu from "./VehicleIntroMenu";
import VehicleNavbar from "./VehicleNavbar";

function Vehicle() {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  const childScrollHandler = () => {
    window.scrollTo(0, 0);
    setScroll(0);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { capture: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    console.log(scroll, "전체화면 스크롤값");
  }, [scroll]);

  return (
    <S.Container>
      <Navbar style={scroll ? { top: "-80px" } : { top: "0px" }} />
      <Firstarea
        style={scroll ? { marginTop: "0px" } : { marginTop: "80px" }}
      />
      {scroll ? (
        <VehicleNavbar
          list={["모델소개", "제원", "가격", "갤러리", "구매후기"]}
          style={{
            top: 0,
          }}
          id='scrolled'
        />
      ) : (
        <VehicleNavbar
          list={["모델소개", "제원", "가격", "갤러리", "구매후기"]}
          style={{ bottom: 0 }}
          id='unscrolled'
        />
      )}
      <MainIntroArea
        stuff={["red", "blue", "green"]}
        scroll={scroll ? true : false}
        func={childScrollHandler}
      />
    </S.Container>
  );
}

export default Vehicle;
