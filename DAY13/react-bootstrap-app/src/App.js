import React, { useState } from 'react'
//bootstrap css 참조하기
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//bootstrap css Sass(scsss)파일을 직접 참조하고  css 번들링을 통해 부트스트랩 .css파일 생성해서 사용하기
//리액트 프로젝트에서 sass파일을 참조한 경우 반드시 번들리 소프트웨어를 통해서 css번들링 과정을 거친후에야 css사용 가능합니다.
//yarn add node-sass 를 리액트 프로젝트에 설치하면  리액트 파일 내 scss파일이 nodesass에의해 자동 번들링(웹팩) 되어 순수 css로 변환됨
import '../node_modules/bootstrap/scss/bootstrap.scss'
//라우팅을 위한 react-router-dom 패키지의 BrowserRouter,routes,route 참조하기
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// React.lazy를 사용하지 않고 직접 컴포넌트 참조하여 라우팅 처리하기->비권장(컴포넌트가 많지 안을때 사용)
import GNB from './components/GNB'
import Footer from './components/Footer'

import Login from './pages/Login'
import Register from './pages/Register'
import Main from './pages/Main'
import ArticleList from './pages/ArticleList'
import ArticleDetail from './pages/ArticleDetail'
import ArticleRegist from './pages/ArticleRegist'
function App() {
    return (
        <Router>
            {/* 최상위 컴퍼넌트에 전체 어플리케이션 레이아웃을 구성합니다. */}
            {/* 최상위 GNB 전역메뉴 표시 영역 */}
            <GNB />

            <div className="App">
                {/* 라우트를 이용한 컨첸트 영역 표시하기 */}
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <Routes>
                            <Route path="/" Component={Main} />
                            <Route path="/signin" Component={Login} />
                            <Route path="/signup" Component={Register} />
                            <Route path="/article/list" Component={ArticleList} />
                            <Route path="/article/regist" Component={ArticleRegist} />
                            <Route path="/article/detail/:id" Component={ArticleDetail} />
                        </Routes>
                    </div>
                </div>
            </div>
            {/* 최하단 카피라이트 공통레이아웃 영역 */}
            <Footer />
        </Router>
    )
}

export default App
