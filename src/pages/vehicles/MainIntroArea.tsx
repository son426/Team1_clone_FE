import * as S from "./MainIntroArea.styled";
import VehicleIntroMenu from "./VehicleIntroMenu";
import { useEffect, useState, useRef, ComponentElement } from "react";

interface IStuff {
  Component: any;
  color?: string;
  name?: string;
}
interface IContent {
  stuff: IStuff[];
  scroll?: boolean;
  func?: any;
}

function MainIntroArea({ stuff, scroll, func }: IContent) {
  const [mainIndex, setMainIndex] = useState(0);
  const [wheelValue, setWheelValue] = useState(0);
  const [menuValue, setMenuValue] = useState(0);
  const [isDown, setIsDown] = useState("");
  const container = document.getElementById("container");
  const handleWheel = (e: any) => {
    // 휠 한번만 돌려도 100이 여러번 나옴 - 나는 액션을 한번만 취하면 됨
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    setWheelValue(e.deltaY);
  };
  // 이동 관리해주는 함수
  function selector() {
    stuff.map((content, index) => {
      const selectedChild = document.getElementById(`${index}thChild`);
      if (selectedChild) {
        // 선택이 된애들
        if (mainIndex === index) {
          // 스크롤을 내렸을 때, 밑에서 올라오는 경우
          if (isDown === "down") {
            selectedChild.classList.remove("up", "down", "unselected", "stay");
            selectedChild.classList.add("up");
            selectedChild.animate(
              [{ height: "0vh" }, { height: "calc(100vh - 80px)" }],
              {
                duration: 1000,
                easing: "ease-in-out",
              }
            );
            selectedChild.style.height = "calc(100vh - 80px)";
            selectedChild.style.zIndex = "2";
          }
          // 스크롤을 올렸을 때, 위에 남아있고, 원래 있던애가 치워지는경우
          else if (isDown === "up") {
            selectedChild.classList.remove("up", "down", "unselected", "stay");
            selectedChild.classList.add("stay");
            selectedChild.style.height = "calc(100vh - 80px)";
            selectedChild.style.zIndex = "1";
          }
        }
        // 선택이 안된애들
        else {
          // 스크롤을 올릴 경우
          if (isDown == "up") {
            // 치워지는 아이
            if (
              selectedChild.className.includes("up") ||
              selectedChild.className.includes("stay")
            ) {
              selectedChild.classList.remove(
                "up",
                "down",
                "unselected",
                "stay"
              );
              selectedChild.classList.add("down");
              selectedChild.style.zIndex = "2";
              selectedChild.animate([{ height: "100vh" }, { height: "0vh" }], {
                duration: 1000,
              });
              selectedChild.style.height = "0px";
            }
            // 일반 아이
            else {
              selectedChild.classList.remove(
                "up",
                "down",
                "unselected",
                "stay"
              );
              selectedChild.style.zIndex = "0";
              selectedChild.classList.add("unselected");
              selectedChild.style.height = "0px";
            }
          }
          // 스크롤을 내릴 경우
          else {
            // 원래 그 자리에 있던 아이
            if (
              selectedChild.className.includes("up") ||
              selectedChild.className.includes("stay")
            ) {
              selectedChild.style.zIndex = "1";
              selectedChild.classList.remove(
                "up",
                "down",
                "unselected",
                "stay"
              );
              selectedChild.classList.add("unselected");
              selectedChild.style.height = "calc(100vh - 80px)";
            } else {
              selectedChild.style.zIndex = "0";
              selectedChild.classList.remove(
                "up",
                "down",
                "unselected",
                "stay"
              );
              selectedChild.classList.add("unselected");
              selectedChild.style.height = "calc(100vh - 80px)";
            }
          }
        }
      }
    });
  }
  container?.addEventListener("wheel", handleWheel);
  // 마우스휠에 의한 이동
  useEffect(() => {
    if (wheelValue > 0) {
      if (mainIndex < stuff.length - 1) {
        setMainIndex((current) => current + 1);
        setIsDown("down");
      }
    } else if (wheelValue < 0) {
      if (mainIndex > 0) {
        setMainIndex((current) => current - 1);
        setIsDown("up");
      } else {
        func(false);
      }
    }
    setTimeout(() => {
      setWheelValue(0);
    }, 1000);
  }, [wheelValue]);
  // 메뉴 클릭에 의한 이동
  useEffect(() => {
    if (menuValue > mainIndex) {
      if (mainIndex < stuff.length - 1) {
        setMainIndex(menuValue);
        setIsDown("down");
      }
    } else if (menuValue < mainIndex) {
      if (mainIndex > 0) {
        setMainIndex(menuValue);
        setIsDown("up");
      } else {
        func(false);
      }
    }
  }, [menuValue]);
  useEffect(() => {
    selector();
  }, [mainIndex, isDown]);

  return (
    <S.Container
      style={scroll ? { top: "-3px", height: "100%" } : { height: "0px" }}
      id='container'
    >
      <S.Wrapper>
        <VehicleIntroMenu
          list={stuff.map((element) => {
            return {
              name: String(
                element.name ? element.name : element.Component.name
              ),
              color: String(element.color ? element.color : "#002C5F"),
            };
          })}
          currentIndex={mainIndex}
          func={setMenuValue}
        />

        {stuff.map((Component, index) => {
          return (
            <Component.Component
              id={`${index}thChild`}
              className={index === 0 ? "stay" : "unselected"}
              style={{
                zIndex: `${index === 0 ? 1 : 0}`,
                height: `${index === 0 ? "100vh" : "0vh"}`,
              }}
              selected={index === mainIndex ? true : false}
            />
          );
        })}
      </S.Wrapper>
    </S.Container>
  );
}

export default MainIntroArea;
