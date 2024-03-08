// redux/reducers.js 파일의 목적은 업무별 폴더에 있는 각종 reducer.js파일을 통합해주는 역할 제공
// 각종 리듀서 파일에서 노출 되는 리듀서 함수를 통합해주는 기능제공
//redux패키지의 Combine reudcers를 통해 리듀서파일에서 제공하는 리듀서 함수를 통합 할 수 있다.
import { combineReducers } from "redux";
//각종 업무 별 리듀서 파일에서 제공하는 리듀서 함수를 참조합니다.

import Auth from "./auth/reducer";

// combineReducers를 통해 각종 리듀서 함수를 통합해준다.
export default combineReducers({ Auth });

// export default combineReducers({Auth})
