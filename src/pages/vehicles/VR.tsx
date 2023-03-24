import React, { Suspense, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import { OrbitControls } from "@react-three/drei";

const Wrapper = styled.div`
  margin: 0;
  font-weight: 400;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: 0.1px;
  width: 100%;
  width: calc(100vw - 200px);
  min-width: 1280px;
  max-width: 100%;
  padding-left: 150px;
  height: 100%;
  height: 90vh;
  padding-top: 60px;
`;

const Title = styled.div`
  width: 100%;
  margin-top: 80px;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: 58px;
`;

const ModelDiv = styled.div`
  width: 100%;
  height: 300px;
  z-index: 100;
`;

const ColorDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-size: 20px;
  height: 60px;
  width: 100%;
  font-weight: 700;
  letter-spacing: 0px;
`;

const ColorText = styled.div`
  padding: 10px 20px 10px 0;
  width: 150px;
`;

const Circles = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #3333336b;
  margin: 13px;
  position: relative;
  cursor: pointer;

  &.checked {
    &::before {
      content: "";
      position: absolute;
      top: -7px;
      right: -7px;
      width: 23px;
      height: 23px;
      background: url("https://www.hyundai.com/static/images/ico_btn.png")
        no-repeat;
      background-position: -85px 0;
    }
  }
`;

const Text = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 14px;
  margin-top: 17px;
`;

function VR() {
  const model = useRef<any>(null);
  const [col, setCol] = useState<any>("#f2f6fa");
  const [colName, setName] = useState<any>("크리미 화이트 펄");
  const [colN, setN] = useState<any>(0);
  const ch = useRef<any>([]);

  useEffect(() => {
    switch (colN) {
      case 0:
        ch.current[0].classList.add("checked");
        ch.current[1].classList.remove("checked");
        ch.current[2].classList.remove("checked");
        ch.current[3].classList.remove("checked");
        ch.current[4].classList.remove("checked");
        break;
      case 1:
        ch.current[1].classList.add("checked");
        ch.current[0].classList.remove("checked");
        ch.current[2].classList.remove("checked");
        ch.current[3].classList.remove("checked");
        ch.current[4].classList.remove("checked");
        break;
      case 2:
        ch.current[2].classList.add("checked");
        ch.current[0].classList.remove("checked");
        ch.current[1].classList.remove("checked");
        ch.current[3].classList.remove("checked");
        ch.current[4].classList.remove("checked");
        break;
      case 3:
        ch.current[3].classList.add("checked");
        ch.current[0].classList.remove("checked");
        ch.current[1].classList.remove("checked");
        ch.current[2].classList.remove("checked");
        ch.current[4].classList.remove("checked");
        break;
      case 4:
        ch.current[4].classList.add("checked");
        ch.current[0].classList.remove("checked");
        ch.current[1].classList.remove("checked");
        ch.current[2].classList.remove("checked");
        ch.current[3].classList.remove("checked");
        break;
    }
  });

  return (
    <Wrapper>
      <Title>360ºVR</Title>
      <ModelDiv>
        <Canvas camera={{ position: [0, 0, 7] }}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={10} />
          <spotLight
            intensity={7}
            position={[10, 200, -1]}
            angle={100}
            distance={1000}
          />
          <Suspense fallback={null}>
            <Model ref={model} carColor={col} />
          </Suspense>
        </Canvas>
      </ModelDiv>
      <ColorDiv>
        <ColorText>
          Exterior color
          <br />
          <span style={{ fontWeight: "500", fontSize: "16px" }}>{colName}</span>
        </ColorText>
        <Circles
          ref={(element) => {
            ch.current[0] = element;
          }}
          onClick={() => {
            setCol("#f4f6fa");
            setName("크리미 화이트 펄");
            setN(0);
          }}
          style={{ backgroundColor: "#f4f6fa" }}
        ></Circles>
        <Circles
          ref={(element) => {
            ch.current[1] = element;
          }}
          onClick={() => {
            setCol("#b7b8b8");
            setName("쉬머링 실버 메탈릭");
            setN(1);
          }}
          style={{ backgroundColor: "#b7b8b8" }}
        ></Circles>
        <Circles
          ref={(element) => {
            ch.current[2] = element;
          }}
          onClick={() => {
            setCol("#87786e");
            setName("카퍼 메탈릭");
            setN(2);
          }}
          style={{ backgroundColor: "#87786e" }}
        ></Circles>
        <Circles
          ref={(element) => {
            ch.current[3] = element;
          }}
          onClick={() => {
            setCol("#6a6e71");
            setName("티타늄 그레이 매트");
            setN(3);
          }}
          style={{ backgroundColor: "#6a6e71" }}
        ></Circles>
        <Circles
          ref={(element) => {
            ch.current[4] = element;
          }}
          onClick={() => {
            setCol("#2f333c");
            setName("오션 인디고 펄");
            setN(4);
          }}
          style={{ backgroundColor: "#2f333c" }}
        ></Circles>
      </ColorDiv>
      <Text>
        ※ 상기 이미지는 실제 차량 컬러와 다를 수 있으며 사전 예고없이 변경될 수
        있습니다.
      </Text>
    </Wrapper>
  );
}

export default VR;
