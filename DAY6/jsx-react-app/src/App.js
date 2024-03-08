import React, { useState } from 'react'

import logo from './logo.svg'
import './App.css'

// 자식컴포넌트 참조하기
// 함수형 자식 컴포넌트 참조하기
import Fchild from './FunctionChild'
// 클래스형 자식컴포넌트 참조하기
import CChild from './ClassChild'
import MyProfile from './Profile'
import CounterFunction from './CounterFunctionComponent'
import CounterClass from './CounterClassComponent'
//함수형 컴포넌트 생성하기
// 리액트UI컴포넌트는 반환값으로 JSX UI 요소정보를 반환하여 최종웹브라우저에 UI를 표현합니다.
//JSX UI 요소를 제어하기위해 함수내에 기능구현 영역에서 필요한 데이터와 이벤트를 처리합니다.
function App() {
    //기능 구현코드
    // 이벤트 기능 구현
    //해당 컴포넌트의 STATE(로컬데이터)값과 JSX영역내 UI 요소가 ㄴ데이터 바인딩을 통해
    // 데이터 바인딩기법(MVVM패턴기반) 으로 UI 요소와 데이터를 편리하게 관리합니다.
    const [sample, setSample] = useState('샘플데이터')
    const [user, setUser] = useState({
        userId: 'hyyi1',
        name: 'welc',
        email: 'tttt@yyyy.co.kr',
        telephone: '011-5555-5565',
        address: '경기도',
    })
    return (
        <div>
            <h1> 안녕하세요 엠소프웨어 방분을 환영합니다.{sample}</h1>
            <Fchild companyName="엠소프트웨어" telephone="02-555-666" address="서울시테헤란로" sampleData={sample}>
                우리 회사소개
            </Fchild>
            <CChild deptNamed="개발1팀" deptRoles="협업툴솔루션 개발" employee={10} sampleData={sample}>
                부서소개
            </CChild>
            {/* 내프로필 자식 컴포넌트 표시하기 */}
            <MyProfile userId="welcome" name="이환영" email="hyyi1@naver.com" telephone="010-4997-5826">
                자기소개
            </MyProfile>
            <MyProfile userId={user.userId} name={user.name} email={user.email} telephone={user.telephone}>
                자기소개
            </MyProfile>
            <CounterFunction></CounterFunction>
            <CounterClass></CounterClass>
        </div>
    )
}

export default App
