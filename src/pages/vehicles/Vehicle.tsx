import { useEffect, useState } from "react";
import Navbar from "../../components/molecules/Navbar";
import Firstarea from "./Firstarea";
import MainIntroArea from "./MainIntroArea";
import * as S from "./Vehicle.styled";
import VehicleIntroMenu from "./VehicleIntroMenu";
import VehicleNavbar from "./VehicleNavbar";
import Highlights from "./VehicleIntroPage/Highlights";

function Vehicle() {
  const [wheel, setWheel] = useState(0);
  const [isMainMounted, setIsMainMounted] = useState(false);
  const handleWheel = (e: any) => {
    setWheel(e.deltaY);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { capture: true });
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("scroll", handleWheel);
    };
  }, []);

  useEffect(() => {
    if (wheel > 0) {
      setIsMainMounted(true);
    }
  }, [wheel]);

  return (
    <S.Container>
      <Navbar style={isMainMounted ? { top: "-80px" } : { top: "0px" }} />
      <Firstarea
        style={
          isMainMounted
            ? { marginTop: "0px", height: "0px" }
            : { marginTop: "80px" }
        }
      />
      {isMainMounted ? (
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
          func={() => {
            setIsMainMounted(true);
          }}
        />
      )}
      <MainIntroArea
        stuff={[Highlights, Highlights, Highlights]}
        scroll={isMainMounted ? true : false}
        func={setIsMainMounted}
      />
    </S.Container>
  );
}

export default Vehicle;
