import React from "react"
import Remove from "../../icons/Cancel"

const TodoItem = ({title, deleteItem, id}) => {
    return (
        <li className="todo-list__item">
            {title}
            <span className="todo-list__icon" onClick={() => deleteItem(id)}>
                <Remove />
            </span>
        </li>
    )
}

export default TodoItem