import React, { Fragment } from 'react'
//리액트 에서는 이미지를 반드시 경로를 참조해서 사용한다.
import logo from './logo.svg'
//스타일 파일을 직접 만들어서 참조가능
import './App.css'

function App() {
    // 화면에 대한 로직(프로그래밍기능)을 구현 하는 영역
    // 자바스크립트로 기능 구현하는 영역

    const userName = '이환영'
    let userRole = '개발자'
    // 해당 컴퍼넌트 내에서만 사용하는 공통스타일정의-임베디드 사타일 적용방식
    //jsx에대한 임베디드 스타일은 객체정의방식으로 스타일 속성과 값을 정의합니다
    const myStyle = {
        backgroundColor: 'blue',
        color: 'white',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16,
    }

    return (
        // 화면 요소를 jsx문법으로 표현하는 영역
        <>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {/* jsx요소에 직접 인라인 스타일링 하려면 {{}}구조로 명시해야합니다 */}
                    <p style={{ backgroundColor: 'blue', color: 'red' }}>
                        {userRole} {userName}님 방문을 화녕합니다.
                    </p>
                    {/* jsx요소는 반드시 홑태그라도 듣는 태그가 필요하다 */}
                    <br></br>
                    {userName === '이환영' ? <h4>{userName}님 반갑습니다.</h4> : <h4>게스트님 반갑습니다.</h4>}
                    {/* jsx요소는 반드시 홑태그라도 듣는 태그가 필요하다 */}
                    <br />
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
            {/* 임베디드 스타일 방식 객체로 정의되어있을떄 */}
            <div style={myStyle}>ㅎㅇ요</div>
        </>
    )
}

export default App
