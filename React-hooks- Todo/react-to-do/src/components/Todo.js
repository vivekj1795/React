import React from 'react'
import '../App.css'

function Todo({todo, completeTodo, index,removeTodo}) {
    return (
        <div className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
                >
            {todo.title}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>
       )
}

export default Todo
