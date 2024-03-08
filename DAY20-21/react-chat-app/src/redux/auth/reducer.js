import { USER_LOGIN } from "../../constants/actionTypes";

// 초기 상태 정의
const INIT_STATE = {
  token: "", // 토큰 초기값 설정
  loginuser: {}, // 로그인 사용자 초기값 설정
};

// auth 리듀서 함수 정의
const Auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN: // USER_LOGIN 액션 처리
      return {
        ...state, // 기존 상태 복사
        token: action.payload.token, // 액션 페이로드에 있는 토큰 값으로 업데이트
        loginuser: action.payload.loginuser, // 액션 페이로드에 있는 로그인 사용자 정보로 업데이트
      };
    default:
      return { ...state }; // 기본 상태 반환
  }
};

export default Auth; // Auth 리듀서 함수 내보내기
