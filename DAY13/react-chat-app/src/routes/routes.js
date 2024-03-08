//리액트 채팅앱의 모든화면 컴포넌트의 라우팅 규칙을 정의한다.
import React from 'react'
import { Navigate } from 'react-router-dom'

//React.lazy()메소드 화면 컴포넌트를 동적으로 렌더링 하기 위해 사용함.
// React.lazy(import(해당화면-컴포넌트 지정))

//기정의된 페이지 컴포넌트를 참조
// 사용자인증이 반드시 필요한 화면 컴포넌트들
const StartPage = React.lazy(() => import('../pages/Starter/Index'))
const Dashboard = React.lazy(() => import('../pages/Dashboard/Index'))

//사용자 인증이 필요없느,ㄴ,로그인 없이 볼수 있어야 하는 화면 페이지 컴포넌트
const Login = React.lazy(() => import('../pages/Auth/Login'))
const Register = React.lazy(() => import('../pages/Auth/Register'))

//인증이 필요한 라우팅 목록 및 라우팅 규칙 정의
const authProtectedRoutes = [
    { path: '/starter', component: <StartPage /> },
    { path: '/dashboard', component: <Dashboard /> },
    { path: '/', exact: true, component: <Navigate to="/dashboard" /> },
]

//인증이 필요없는 라우팅 목록 및 라우팅 정의
const publicRoutes = [
    { path: '/login', component: <Login /> },
    { path: '/register', component: <Register /> },
]

export { authProtectedRoutes, publicRoutes }
