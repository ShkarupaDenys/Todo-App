import React from "react"
import Remove from "../../../../icons/Cancel"
import Checkbox from '../../../Checkbox/Checkbox'

const TodoItem = ({title, deleteItem, id, checkboxToogle}) => {
    
    return (
        <li className="todo-list__item">
            <Checkbox 
                onChange={checkboxToogle}
                className='todo-list__checkbox'/>
            {title}
            <span className="todo-list__icon" onClick={() => deleteItem(id)}>
                <Remove />
            </span>
        </li>
    )
}

export default TodoItem