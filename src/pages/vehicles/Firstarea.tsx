import { CSSProperties } from "styled-components";
import NavyButton from "../../components/atoms/NavyButton";
import * as S from "./Firstarea.styled";
import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { USER, LIKEADD, GETLIKES, getLikesNum } from "../../apis/gql";
import React, { useRef, useState, useEffect } from "react";
import ChLike from "./ChLike";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { likedOrNot, likeBtn, isUserAtom } from "./../../lib/util/atoms";

interface IStyle {
  style: CSSProperties;
}
function Firstarea({ style }: IStyle) {
  const heart = useRef<any>(null);
  /* const [isLiked, setLike] = useState(false); */
  const isLiked = useRecoilValue(likedOrNot);
  const setLike = useSetRecoilState(likedOrNot);
  const btnOn = useSetRecoilState(likeBtn);

  const [userLike, setUserLike] = useState(false);

  // 해당 유저가 좋아요하는 상태인지 받아오는 api
  const { refetch, data } = useQuery(getLikesNum);
  const fetchLikes = async () => {
    const fetchLike_result = await refetch();
    console.log("fetchLike_result : ", fetchLike_result);
    setUserLike(fetchLike_result.data.getLikesNum.isLiked);
  };
  useEffect(() => {
    fetchLikes();
  }, [userLike]);

  // 좋아요 누르는 api
  // 유저가 아니면 error 나오고
  // 유저면 data가 옴.
  const [like, {}] = useMutation(LIKEADD, { onError: () => {} });
  const likeAdd = async (modelId: any) => {
    const res = await like({
      variables: {
        modelId,
      },
    });
    if (res.errors) alert("로그인해주세요.");
    if (res.data) {
      console.log(res.data);
      setUserLike((current) => !current);
      return res.data;
    } else {
      console.log(res.errors);
    }
  };

  useEffect(() => {
    if (userLike) {
      heart.current.style.color = "red";
    } else {
      heart.current.style.color = "white";
    }
  }, [userLike]);

  return (
    <S.Container style={style}>
      <S.Wrapper>
        <S.RouteWrapper>
          <S.RouteP>홈</S.RouteP>
          <S.Arrow />
          <S.RouteP>모델</S.RouteP>
          <S.Arrow />
          <S.RouteP>수소/전기차</S.RouteP>
          <S.Arrow />
          <S.RouteP style={{ cursor: "default", color: "#007fA8" }}>
            넥쏘
          </S.RouteP>
        </S.RouteWrapper>
        <S.Title>NEXO</S.Title>
        <S.Headline>Positive Energy, NEXO</S.Headline>
        <S.Price>67,650,000원 부터</S.Price>
        <NavyButton
          message="카탈로그 다운로드"
          top="100px"
          left="calc(100% - 470px)"
        />
        <NavyButton message="가격표 다운로드" top="100px" right="120px" />
        <S.Heart style={{ top: "108px", right: "80px" }}>
          <span
            ref={heart}
            className="material-symbols-outlined"
            style={{
              fontVariationSettings: "'FILL' 1",
              color: "white",
            }}
            onClick={async () => {
              const result = await likeAdd("1");
              console.log("result : ", result);
            }}
          >
            favorite
          </span>
          <ChLike />
        </S.Heart>
      </S.Wrapper>
    </S.Container>
  );
}
export default Firstarea;
