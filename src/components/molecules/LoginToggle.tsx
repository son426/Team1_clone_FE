import { useRecoilState } from "recoil";
import { isUserAtom } from "../../lib/util/atoms";
import styled from "styled-components";
import { useCookies } from "react-cookie";

const LoginButton = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 15px;
  z-index: 999;
  a {
    padding: 10px 20px;
    text-decoration: none;
    color: #002c5f;
    font-weight: 600;
  }
`;

function LoginToggle() {
  const [isUser, setIsUser] = useRecoilState(isUserAtom);
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const logoutFn = async () => {
    // 로컬스토리지 accessToken 지우기
    localStorage.removeItem("accessToken");

    // 쿠키 refreshToken 지우기
    removeCookie("refreshToken");

    // // recoil isUser false로 수정
    setIsUser(false);

    // 리다이렉트
    window.location.href = "/";
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "30px",
        }}
      >
        {isUser ? (
          <LoginButton
            onClick={(event) => {
              event.stopPropagation();
              logoutFn();
            }}
          >
            <a href="/">로그아웃 &gt;</a>
          </LoginButton>
        ) : (
          <LoginButton>
            <a href="/login">개인 로그인 &gt;</a>
            <a href="/login">법인 로그인 &gt;</a>
          </LoginButton>
        )}
      </div>
    </>
  );
}

export default LoginToggle;
