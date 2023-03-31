import { useMutation } from "@apollo/client";
import { useState } from "react";
import { LOGIN } from "../../apis/gql";

function T() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const saveAccessToken = (accessToken: any) => {
    localStorage.setItem("accessToken", accessToken);
  };

  // LOGIN
  const [login, {}] = useMutation(LOGIN);
  const loginFunction = async (email: any, password: any) => {
    const login_result = await login({
      variables: {
        email,
        password,
      },
    });
    const accessToken = await login_result.data.login;
    console.log("로그인 성공. accessToken이 발급되었습니다.");
    console.log("accessToken : ", accessToken);
    return accessToken;
  };

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const accessToken = await loginFunction(email, password);
          saveAccessToken(accessToken);
        }}
      >
        <h1>로그인</h1>
        <input
          type="text"
          placeholder="이메일"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">로그인</button>
      </form>
    </>
  );
}

export default T;
