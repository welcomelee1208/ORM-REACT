import React from 'react'

const TodoItems = ({ todo, onRemove, onSelect }) => {
    return (
        <div>
            <td>
                <input type="checkbox" value={todo.checked} onClick={() => onSelect(todo.id)} />
            </td>
            <td>{todo.id}</td>
            <td>{todo.text}</td>
            <td>{todo.desc}</td>
            <td>
                <button onClick={() => onRemove(todo.id)}>삭제</button>
            </td>
        </div>
    )
}

export default TodoItems
