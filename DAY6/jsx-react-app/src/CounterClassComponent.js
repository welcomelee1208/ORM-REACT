import React, { Component } from 'react'

class CounterClassComponent extends Component {
    // 클래스 생성자 함수:클래스가 객체로 생성될때 최초 한번 실행되는 특별한 함수
    // 생성자 함수를 통해 객체를 초기화 해주는 기능 제공합니다.
    // 리액트 에서의 클래스 컴포넌트의 생성자 함수에는 props를 반드시 전달해야하고
    //전달된 props는 생성되는 객체의 디폴트 props값으로 전달됩니다.

    //eslint-disable-next-line no-useless-constructor
    constructor(props) {
        //객체에 props전달해주는 역할
        super(props)
        //함수형 컴포넌트와는 다르게 클래스 형 컴포넌트는 state를 객체를 통해서 모든 데이터 속성을정의합니다.
        //클래스형 컴포넌트는 스테이트의 구조와 초기화를 반드시 this.state={}객체를 통해 정의한다.
        this.state = {
            count: 200,
            userName: '이환영',
            goods: [],
        }
    }
    handleIncrease = () => {
        console.log('증가버튼이 클릭되었습니다.')
        // 클래스형 컴포넌트의 상태값 변경은 반드시 this.setState()함수를 통해 변경해야합니다.
        this.setState({
            count: this.state.count + 1,
        })
    }
    //감소버트 클릭시 호출되는 이벤트처리 핸들러 함수정의
    handleDecrease = () => {
        console.log('감소버튼이 클릭되었습니다.')
        this.setState({
            count: this.state.count - 1,
        })
    }
    render() {
        return (
            <div>
                <h1> 카운터 상태값 표시:{this.state.count}</h1>
                <button onClick={this.handleIncrease}>1증가</button>
                <button onClick={this.handleDecrease}>1감소</button>
            </div>
        )
    }
}

export default CounterClassComponent
