import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//정적 웹페이지(SPA)인 public /index.html  안에 root div 태그요소를 호출합니다.
const root = ReactDOM.createRoot(document.getElementById("root"));
// root div 태그 안에 app.js 컴포넌트의 번들링된 결과물을 바인딩해서 리액트앱의 메인화면을 출력합니다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
