import { USER_LOGIN } from "../../constants/actionTypes";

// userLogin 액션 생성자 함수 정의
export const userLogin = (token, loginUser) => ({
  // 액션 타입 설정
  type: USER_LOGIN,
  // 액션 페이로드 설정 (데이터 전달)
  payload: { token, loginUser }, // token과 loginUser를 payload로 전달
});
