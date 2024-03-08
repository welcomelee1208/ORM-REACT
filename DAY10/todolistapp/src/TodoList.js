import React from 'react'
import TodoItems from './TodoItems'
const TodoList = (todos, onRemove, onSelect) => {
    return (
        <div>
            <table style={{ margin: '0 auto', width: '50%' }}>
                <thead>
                    <tr>
                        <th>선택</th>
                        <th>id</th>
                        <th>할일명</th>
                        <th>할일 내용</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, i) => (
                        <TodoItems key={todo.id} todo={todo} onRemove={onRemove} onSelect={onSelect}></TodoItems>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList
