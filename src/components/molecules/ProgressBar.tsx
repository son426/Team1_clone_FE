import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";

const Bar = styled.div`
  width: 100px;
  height: 5px;
  background-color: #007fa8;
  position: sticky;
  top: 0;
  transition: ease-in-out;
`;

function ProgressBar() {
  const [cur, setCur] = useState(0);
  const bar = useRef<any>(null);
  window.addEventListener("scroll", function () {
    setCur(document.documentElement.scrollTop);
  });
  useEffect(() => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let barWidth = (cur / height) * 100;
    bar.current.style.width = `${barWidth}%`;
  }, [cur]);

  return <Bar ref={bar}></Bar>;
}

export default ProgressBar;
