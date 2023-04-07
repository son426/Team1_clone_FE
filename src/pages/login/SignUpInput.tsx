import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { EMAIL, FINDID, SIGNUP, sendEmail } from "../../apis/gql";
import { CheckEmail, SendFirstEmail } from "../../lib/util/gql";
import { useLocation } from "react-router-dom";

export const Wrapper = styled.div`
  margin: 0;
  font-weight: 400;
  font-family: "Noto Sans KR", sans-serif;
  letter-spacing: -0.4px;
  padding: 0;
  width: 100%;
`;

export const Bar = styled.div`
  width: 100%;
  height: 6px;
  background-color: #012d5e;
`;

export const LogoDiv = styled.div`
  width: 100%;
  height: 72px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const LogoDivInner = styled.div`
  text-align: left;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 680px;
  height: 100%;
  padding: 0 13px;
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 83px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const TitleDivInner = styled.div`
  text-align: center;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 680px;
  height: 100%;
  padding: 0 13px;
  flex-direction: column;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.8);
`;

export const Section = styled.div`
  box-sizing: border-box;
  width: 680px;
  height: fit-content;
  margin: 0 auto;
  display: flex;
  padding: 24px;
  font-weight: 400;
  font-size: 13px;
  color: #666;
  flex-direction: column;
  position: relative;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const SectionRow = styled.div``;

export const DivTitle = styled.div`
  margin-bottom: 8px;
  width: 590px;
  height: 24px;
  font-size: 16px;
  display: flex;
  align-items: center;
  font-weight: 300;
`;

export const DivContent = styled.div`
  display: none;
  border-left: 1px solid #bdbdbd;
  padding-left: 20px;
  padding-right: 8px;
  margin-left: 12px;
  width: 550px;
  height: fit-content;
  margin-bottom: 8px;
  padding-top: 5px;
  &.checked {
    display: block;
    animation: slideDown 0.5s ease-in-out forwards;
  }
  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const CircleN = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;

  display: inline-block;
  margin-right: 7px;
  text-align: center;
  font-size: 12px;

  line-height: 24px;
  &.checked {
    color: red;
    background-color: #3387bd;
    color: white;
    font-weight: 300;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 50%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  font-size: 12px;
  letter-spacing: 0.1px;
  font-weight: 300;
  padding-top: 5px;
`;

export const BtnDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const Btn = styled.div`
  box-sizing: border-box;
  width: 271px;
  height: 50px;
  border: 1px solid #6f6f6f;
  background-color: hsla(0, 0%, 85.9%, 0.1);
  color: #6f6f6f;
  font-weight: 300;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  position: relative;
  line-height: 100%;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: hsla(0, 0%, 85.9%, 0.35);
  }
  &:focus {
    background-color: hsla(0, 0%, 85.9%, 0.35);
  }
`;

export const BlueBtn = styled.div`
  box-sizing: border-box;
  width: 271px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: white;
  background-color: #3387bd;
  font-weight: 300;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  position: relative;
  line-height: 100%;
  margin-bottom: 10px;
  cursor: default;
  opacity: 0.5;
  &.checked {
    cursor: pointer;
    opacity: 1;
    &:hover {
      background-color: rgb(0, 40, 132);
    }
    &:focus {
      background-color: rgb(0, 40, 132);
    }
  }
`;

export const BlueBtn2 = styled.div`
  box-sizing: border-box;
  width: 30%;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: white;
  background-color: #3387bd;
  font-weight: 300;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  position: relative;
  line-height: 100%;
  margin-bottom: 7px;
  cursor: default;
  opacity: 0.5;
  &.checked {
    cursor: pointer;
    opacity: 1;
    &:hover {
      background-color: rgb(0, 40, 132);
    }
    &:focus {
      background-color: rgb(0, 40, 132);
    }
  }
`;

export const MenuSection = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 400px;
  height: 35px;
  letter-spacing: 0.5px;
  margin-top: 18px;
  color: #006ca4;
  font-size: 13px;
  justify-content: center;
`;

export const MenuDiv = styled.div`
  width: 120px;
  font-size: 13px;
  height: 15px;
  padding: 0;
  font-weight: 400;
  line-height: 10px;
  cursor: pointer;
  text-decoration-line: none;
  border-bottom: 0.5px solid #006ca4;
  color: #006ca4;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: #006ca4;
    font-size: 13px;
    text-decoration-line: none;
  }
`;

export const MenuA = styled.a`
  width: 120px;
  font-size: 13px;
  height: 15px;
  padding: 0;
  font-weight: 500;
  line-height: 10px;
  cursor: pointer;
  text-decoration-line: none;
  color: #006ca4;

  &:link,
  &:visited,
  &:hover,
  &:active {
    color: #006ca4;
    font-size: 13px;
    text-decoration-line: none;
  }
`;

export const Dot = styled.div`
  width: 4px;
  height: 4px;
  margin: 6px 6px 0 0;
  content: no-open-quote;
  display: inline-block;
  background: #999;
  border-radius: 3px;
  vertical-align: top;
`;

export const Input = styled.input`
  z-index: 50;
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border: 1px solid #ced4da;
  color: rgba(0, 0, 0, 0.6);
  padding: 10px 12px;
  font-size: 13px;
  margin-bottom: 7px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 7px;
  transition: 0.2s ease;
  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
    font-weight: 600;
    letter-spacing: -0.7px;
  }
  &:focus {
    outline: 1px solid #00a7cf;
  }
`;

export const Input2 = styled.input`
  z-index: 50;
  box-sizing: border-box;
  width: 70%;
  height: 50px;
  border: 1px solid #ced4da;
  color: rgba(0, 0, 0, 0.6);
  padding: 10px 12px;
  font-size: 13px;
  margin-bottom: 7px;
  transition: 0.2s ease;
  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
    font-weight: 600;
    letter-spacing: -0.7px;
  }
  &:focus {
    outline: 1px solid #00a7cf;
  }
`;

const ModalWrapper = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  z-index: 999;
  .header {
    font-size: 16px;
    text-align: center;
    width: 100%;
    padding: 15px 0px;
    border-bottom: 3px solid rgba(0, 0, 0, 0.2);
  }
  .row2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    font-weight: 200;
    font-size: 0.9rem;
  }
  .row3 {
    display: flex;
    font-size: 0.8rem;
    padding: 0px 10px 20px 10px;
    font-weight: 200;
    gap: 10px;
    .click {
      color: #00a7cf;
      font-weight: 400;
      cursor: pointer;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  font-weight: 600;
  font-size: 1rem;
  padding: 20px 20px;
  background-color: #00a7cf;
  color: white;
  border: none;
  cursor: pointer;
`;

function SignUpPhone() {
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [simplePw, setSimplePw] = useState("0000");

  const location = useLocation();

  useEffect(() => {
    setPhone(location.state.phoneNum);
  }, [phone]);

  const btn = useRef<any>([]);
  const cir = useRef<any>([]);
  const box = useRef<any>([]);

  // 모달 관련
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // 이메일 인증 - 보내기
  const [sendE, {}] = useMutation(SendFirstEmail, { onError: () => {} });
  const sendFunction = async (email: any) => {
    const send_result = await sendE({
      variables: {
        email,
      },
    });
    if (send_result.data) {
      console.log(`${email}로 전송완료`);
    } else {
      alert("에러 발생. 콘솔창 확인.");
      const errors = send_result.errors;
      console.log(errors);
    }
  };

  // 이메일 인증 - 인증 체크
  // 여기가 안됨.
  const { refetch, error } = useQuery(CheckEmail, {
    variables: { email },
  });
  const checkFunction = async () => {
    const check_result = await refetch();
    return check_result;
  };

  // 회원가입 api - useMutation
  const [signUp, {}] = useMutation(SIGNUP, { onError: () => {} });
  const signUpFunction = async (
    email: string,
    password: string,
    simplePw: string,
    name: string,
    phone: string
  ) => {
    const signUp_result = await signUp({
      variables: {
        email,
        password,
        simplePw,
        name,
        phone,
      },
    });
    if (signUp_result.data) {
      console.log(signUp_result.data);
      return signUp_result.data;
    } else {
      const errors = signUp_result.errors;
      console.log(errors);
      return errors;
    }
  };
  return (
    <Wrapper>
      {showModal && (
        <ModalWrapper onClick={toggleModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <div className="row2">
              <span>가입된 아이디가 존재합니다.</span>
              <span>{email} 으로 로그인해주세요</span>
            </div>
            <div className="row3">
              <span>비밀번호를 잊으셨나요?</span>
              <span
                className="click"
                onClick={() => {
                  window.location.href = "/login/password-init";
                }}
              >
                비밀번호 초기화
              </span>
            </div>
            <Button
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              로그인 하러가기
            </Button>
          </ModalContent>
        </ModalWrapper>
      )}

      <Bar></Bar>
      <LogoDiv>
        <LogoDivInner>
          <img
            src={logo}
            alt=""
            style={{ width: "145px", paddingTop: "4px", cursor: "pointer" }}
            onClick={() => {
              window.location.href = "/";
            }}
          ></img>
        </LogoDivInner>
      </LogoDiv>
      <TitleDiv>
        <TitleDivInner>
          <div
            style={{
              fontSize: "19px",
              fontWeight: "500",
              marginBottom: "9px",
            }}
          >
            가입 정보 입력
          </div>
        </TitleDivInner>
      </TitleDiv>
      <Section>
        <DivTitle>
          <CircleN
            className="checked"
            ref={(e) => {
              cir.current[0] = e;
            }}
          >
            1
          </CircleN>
          이메일 주소 중복 확인 및 인증 이메일 발송
        </DivTitle>
        <DivContent
          className="checked"
          ref={(e) => {
            box.current[0] = e;
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Dot></Dot>이메일 주소
            </div>
          </div>
          <BtnDiv>
            <Input2
              style={{}}
              type="email"
              placeholder="이메일 주소"
              onChange={(e) => {
                setEmail(e.target.value);
                btn.current[0].classList.add("checked");
                if (e.target.value === "")
                  btn.current[0].classList.remove("checked");
              }}
            ></Input2>
            <BlueBtn2
              ref={(e) => {
                btn.current[0] = e;
              }}
              onClick={async () => {
                // 이메일 발송 api
                sendFunction(email);
                console.log(`${email}로 메일 발송`);
                alert("전송완료. 이메일을 확인하세요.");

                // css;
                cir.current[1].classList.toggle("checked");
                box.current[0].classList.remove("checked");
                box.current[1].classList.add("checked");
              }}
            >
              중복 확인
            </BlueBtn2>
          </BtnDiv>
        </DivContent>
        <DivTitle>
          <CircleN
            ref={(e) => {
              cir.current[1] = e;
            }}
          >
            2
          </CircleN>
          인증 확인
        </DivTitle>
        <DivContent
          ref={(e) => {
            box.current[1] = e;
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Dot></Dot>입력한 이메일로 이동하여 이메일 인증을 완료해주세요.
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Dot></Dot>이메일 인증 완료 후 아래 '인증' 버튼을 눌러 주세요.
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Dot></Dot>이메일 인증 방법 안내 (자세히 보기)
            </div>
          </div>
          <BtnDiv>
            <Btn
              onClick={() => {
                cir.current[1].classList.remove("checked");
                box.current[1].classList.remove("checked");
                box.current[0].classList.add("checked");
                btn.current[0].classList.add("checked");
              }}
            >
              이전
            </Btn>
            <BlueBtn
              className="checked"
              onClick={async (e) => {
                // 이메일 인증 체크 api
                const check_result = await checkFunction();
                if (error) {
                  alert("에러 발생. 콘솔창 확인");
                  console.log("error : ", error);
                }
                if (check_result.data.completeEmailCheck === "true") {
                  alert("인증 성공");

                  // css
                  cir.current[2].classList.add("checked");
                  box.current[1].classList.remove("checked");
                  box.current[2].classList.add("checked");
                } else if (check_result.data.completeEmailCheck === "false") {
                  alert("인증 실패");
                }
              }}
            >
              인증
            </BlueBtn>
          </BtnDiv>
        </DivContent>
        <DivTitle>
          <CircleN
            ref={(e) => {
              cir.current[2] = e;
            }}
          >
            3
          </CircleN>
          회원 정보 입력
        </DivTitle>
        <DivContent
          ref={(e) => {
            box.current[2] = e;
          }}
        >
          <Dot></Dot>이메일 주소
          <Input
            style={{ backgroundColor: "rgba(0,0,0,0.1)", border: "none" }}
            value={email}
            readOnly
          ></Input>
          <Dot></Dot>비밀번호
          <Input
            type="password"
            placeholder="비밀번호 입력"
            onChange={(e) => {
              setPw1(e.target.value);
            }}
          ></Input>
          <Input
            type="password"
            placeholder="비밀번호 확인"
            onChange={(e) => {
              setPw2(e.target.value);
            }}
          ></Input>
          <Dot></Dot>이름
          <Input
            type="text"
            placeholder="이름"
            onChange={(e) => {
              setName(e.target.value);
              btn.current[1].classList.add("checked");
              if (e.target.value === "")
                btn.current[1].classList.remove("checked");
            }}
          ></Input>
          <BlueBtn
            style={{ margin: "15px auto", width: "70%" }}
            ref={(e) => {
              btn.current[1] = e;
            }}
            onClick={async (e) => {
              // 회원가입 api
              const signUp_result = await signUpFunction(
                email,
                pw1,
                simplePw,
                name,
                phone
              );
              if (signUp_result) {
                alert("회원가입 완료. 로그인 페이지로 이동합니다.");
                window.location.href = "/login";
              } else {
                console.log(signUp_result);
                alert("에러. 콘솔창 확인바람.");
              }
            }}
          >
            회원가입
          </BlueBtn>
        </DivContent>
      </Section>
      <Footer>
        <MenuSection>
          <MenuDiv>
            <MenuA href="/login">로그인 페이지로 이동</MenuA>
          </MenuDiv>
        </MenuSection>
        COPYRIGHT © HYUNDAI MOTOR COMPANY. ALL RIGHTS RESERVED.
      </Footer>
    </Wrapper>
  );
}

export default SignUpPhone;
