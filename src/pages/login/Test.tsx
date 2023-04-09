import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { RESTOREACCESSTOKEN } from "../../apis/gql";

function Test() {
  const saveAccessToken = (accessToken: any) => {
    localStorage.setItem("accessToken", accessToken);
  };

  const [restoreToken, { data, loading, error }] =
    useMutation(RESTOREACCESSTOKEN);

  const restoreTokenFunction = async () => {
    const result = await restoreToken();
    const newAccessToken = result.data.restoreAccessToken;
    saveAccessToken(newAccessToken);
  };

  return (
    <>
      <div>
        <h1>AccessToken 다시 발급받기</h1>
        <button onClick={restoreTokenFunction}>테스트</button>
      </div>
    </>
  );
}

export default Test;
