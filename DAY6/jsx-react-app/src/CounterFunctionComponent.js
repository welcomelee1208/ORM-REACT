import React, { useState } from 'react'

const CounterFunctionComponent = () => {
    //자동증갑ㅁ되는 우
    const [count, setCount] = useState(100)
    //사용자명 원시타입 문자열 데이터 정의및 초기값 할당
    const [userName, setUserName] = useState('이화녕')
    //상품정보 배열 데이터 및 초기값 할당
    const [goods, setGoods] = useState([
        { id: 1, productName: '제품명1', price: 5000 },
        { id: 1, productName: '제품명1', price: 5000 },
    ])
    //로그인 여부 데이터 저장 불린형 값정의 및 초기값 할당
    const [isLoggined, setIsLoggined] = useState(true)
    //단일 사용자 정보를 데이터의 구조를 정의하고 초기값 할당하기
    const [user, setUser] = useState({ usedId: 'welcome', userName: '이화녕' })
    //증가 버튼 클릭시 호출되는 이벤트처리핸들러 함수정의
    const handleIncrease = () => {
        console.log('증가버튼이 클릭되었습니다.')
        setCount(count + 1)
        //setCount((prevCount) => prevCount + 1)
    }
    //감소버트 클릭시 호출되는 이벤트처리 핸들러 함수정의
    const handleDecrease = () => {
        console.log('감소버튼이 클릭되었습니다.')
        setCount(count - 1)
        //setCount((prevCount) => prevCount - 1)
    }

    return (
        <div>
            <h1> 카운터 상태값 표시:{count}</h1>
            <button onClick={handleIncrease}>1증가</button>
            <button onClick={handleDecrease}>1감소</button>
        </div>
    )
}

export default CounterFunctionComponent
