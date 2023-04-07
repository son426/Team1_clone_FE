import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { GETLIKES } from "../../apis/gql";
import { likedOrNot, likeBtn } from "../../lib/util/atoms";
import { useEffect } from "react";

function ChLike() {
  const [likeCheck, { loading, error, data }] = useLazyQuery(GETLIKES, {
    variables: {
      modelId: "1",
      useEmail: "hein4330@naver.com",
    },
  });
  const setLike = useSetRecoilState(likedOrNot);
  const btnOn = useRecoilValue(likeBtn);

  useEffect(() => {
    likeCheck();
    /* console.log("ChLike", data);
    console.log(error); */
    setLike((prev) => !prev);
    /* setLike(data.isLiked); */
  }, [btnOn]);

  return <></>;
}

export default ChLike;
