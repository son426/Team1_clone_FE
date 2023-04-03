import { useEffect, useState } from "react";
import Navbar from "../../components/molecules/Navbar";
import Firstarea from "./Firstarea";
import MainIntroArea from "./MainIntroArea";
import * as S from "./Vehicle.styled";
import VehicleNavbar from "./VehicleNavbar";
import VR from "./VR";
import Highlights from "./VehicleIntroPage/Highlights";
import Space from "./VehicleIntroPage/Space";
import Design from "./VehicleIntroPage/Design";
import Eco from "./VehicleIntroPage/Eco";
import Convenience from "./VehicleIntroPage/Convenience";
import Safety from "./VehicleIntroPage/Safety";
import Service from "./VehicleIntroPage/Service";
import Hstation from "./VehicleIntroPage/Hstation";
import ServiceNetwork from "./VehicleIntroPage/ServiceNetwork";
import { useRecoilState } from "recoil";
import { FETCH_MODEL } from "../../lib/util/gql";
import { clickedButtonAtom, fetchModelAtom } from "../../lib/util/atoms";
import SideButton from "../../components/molecules/SideButton";
import { useQuery } from "@apollo/client";

function Vehicle() {
  const [mainIntroIdentity, setMainIntroIdentity] =
    useRecoilState(clickedButtonAtom);
  const [vehicleData, setVehicleData] = useRecoilState(fetchModelAtom);
  const [wheel, setWheel] = useState(0);
  const [isMainMounted, setIsMainMounted] = useState(false);
  const handleWheel = (e: any) => {
    setWheel(e.deltaY);
  };
  const { loading, error, data } = useQuery(FETCH_MODEL, {
    fetchPolicy: "no-cache",
    variables: {
      modelId: "1",
    },
    onCompleted: (data) => {
      setVehicleData(data);
    },
  });

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { capture: true });
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("scroll", handleWheel);
    };
  }, []);
  useEffect(() => {
    console.log(vehicleData);
  }, [vehicleData]);

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
      <SideButton />
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
        stuff={[
          { Component: Highlights },
          {
            Component: Eco,
            name: `${
              mainIntroIdentity.index === 1
                ? `${Eco.name} ${mainIntroIdentity.message}`
                : `${Eco.name}`
            }`,
          },
          { Component: Design, color: "white" },
          { Component: VR },
          { Component: Space, color: "white" },
          { Component: Convenience, color: "white" },
          {
            Component: Safety,
            color: `${mainIntroIdentity.index === 6 ? "#002C5F" : "white"}`,
            name: `${
              mainIntroIdentity.index === 6
                ? `${Safety.name} ${mainIntroIdentity.message}`
                : `${Safety.name}`
            }`,
          },
          {
            Component: Service,
            name: `${
              mainIntroIdentity.index === 7
                ? `${Service.name} ${mainIntroIdentity.message}`
                : `${Service.name}`
            }`,
          },
          {
            Component: Hstation,
            name: `${
              mainIntroIdentity.index === 8
                ? `H station ${mainIntroIdentity.message}`
                : "H station"
            }`,
          },
          {
            Component: ServiceNetwork,
            color: "white",
            name: "Service Network",
          },
        ]}
        scroll={isMainMounted ? true : false}
        func={setIsMainMounted}
      />
    </S.Container>
  );
}

export default Vehicle;
