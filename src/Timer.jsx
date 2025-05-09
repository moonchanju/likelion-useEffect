import React, { useState, useEffect } from "react";

const Timer = () => {
  // 1️⃣ seconds 상태 생성 (처음 값은 0)
  const [seconds, setSeconds] = useState(0);

  // 2️⃣ useEffect: 컴포넌트가 처음 마운트될 때 실행
  useEffect(() => {
    console.log("컴포넌트 마운트됨");

    // setInterval을 통해 1초마다 seconds 값을 1씩 증가
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1); // 이전 상태값 기준으로 +1
      console.log("타이머 작동중..."); // 콘솔에 로그 출력
    }, 1000); // 1000ms = 1초

    // 3️⃣ clean-up 함수: 컴포넌트가 언마운트될 때 실행됨
    return () => {
      clearInterval(interval); // 타이머 정리 (중단)
      console.log("언마운트 되었습니다!"); // 정리 로그 출력
    };
  }, []); // 빈 배열 → 마운트될 때 한 번만 실행

  // 4️⃣ 현재 초 값을 화면에 출력
  return <div>Timer: {seconds} 초</div>;
}

export default Timer;