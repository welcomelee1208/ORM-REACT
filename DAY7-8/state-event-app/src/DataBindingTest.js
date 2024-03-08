import React, { useState } from "react";

const DataBindingTest = () => {
  // 텍스트 박스 메시지 데이터 바인딩 데이터 정의 및 초기값 할당
  const [message, setMessage] = useState("ㅎㅇ요");
  //메세지 입력 UI요소의 입력값이 변경될떄마다 입력 이벤트를 처리해주는 이벤트 핸들러 함수
  const handleMessage = (e) => {
    // 이벤트가 발생한 입력요소를 찾고 입력요소의 현재 입력값을 추출해서 콘솔에 출력해봅니다
    console.log("사용자 입력 이벤트가 발생하였습니다.", e.target.value);
    setMessage(e.target.value);
  };
  //데이터 바인딩 기법을 통해 ui를 개발하는 MVVM패턴에서 가장 중요한점은
  // 데이터의 구조와 데이터의 값에따라 UI가 제어되기때문에
  //화면에서 .컴포넌트에서 사용하는 데이터의 구조를ㄹ 먼저 정의하고 관련 UI요소에 적절한 데이터 바인딩이 이루어져야합니다.
  // message데이터 스테이트 값을 초기화 해서 바인딩되어있는 각종 ui의 값을 초기화 처리한다.
  const handleInit = () => {
    setMessage("");
  };
  return (
    <div>
      메세지값:<p>{message}</p>
      <hr></hr>
      {/* onChange이벤트는 입력요소의 값이 바뀔떄마다 발생하는 이벤트 입니ㅏㄷ.
        텍스트박스에 입력값ㅇ 바뛸때마다 바인딩된 데이터 소스(해당 DATA State)를 변경해주어야합니다.-양방형 데이터 바인딩 */}
      <input
        type="text"
        name="message"
        placeholder="메세지를 입력해주세요"
        defaultValue={message}
        onChange={handleMessage}
      />
      <button onClick={handleInit}>초기화</button>
    </div>
  );
};

export default DataBindingTest;
