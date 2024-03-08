import React, { useState } from 'react'

const TodoRegist = ({ onInsert }) => {
    //단일 할일 정보데이터 구조정의 및 초기값 할당
    const [todo, setTodo] = useState({ text: '', desc: '' })
    // 할일 ㅈ어보 입력시 관련 ui요소에 바인딩된 상태 속성값 변경처리 이벤트 처리함수
    const onTodoChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }
    const onSumit = (e) => {
        //app.js컴포넌트에서 props로 전달된 onInsert()이벤트 처리함수를 호출해 Todolist 에 데이터를 반영한다.
        onInsert(todo.text, todo.desc)
        setTodo({ text: '', desc: '' })
        // 자바스크립트에서 ui요소 이벤트 파생을 최소화하는 함수
        // 현재 발생한 e(submit)이벤트를 더이상 진행되지않게 차단하는 기능
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={onSumit} style={{ margin: '0 auto', width: '50%' }}>
                제목:
                <input name="text" value={todo.text} onChange={onTodoChange} />
                할일
                <input name="desc" value={todo.desc} onChange={onTodoChange} />
                <button type="submit">등록</button>
            </form>
        </div>
    )
}

export default TodoRegist
