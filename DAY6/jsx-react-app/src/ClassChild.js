import React, { Component } from 'react'
//클래스 형 컴포넌트는 기본적으로  react 패키지의 component 라는 클래스를 상속받아서 구현합니다./
//java script에서 특정 클래스를 상속받을때는 extends라는예약어를 사용해 상속받아새로운 클래스 정의
class ClassChild extends Component {
    render() {
        // 코딩 가능영역
        return (
            <div>
                <h1>부서소개</h1>
                <h2>{this.props.children}</h2>
                부서명:{this.props.deptNamed}
                <br />
                부서역할:{this.props.deptRoles}
                <br />
                직원수:{this.props.employee}명
                <br />
            </div>
        )
    }
}

export default ClassChild
