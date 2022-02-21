import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({list, deleteItem, checkboxToogle}) => (
    <ul className="todo-list">
        {list.map(({title, id}) => (
            <TodoItem title={title} key={id} id={id} deleteItem={deleteItem} checkboxToogle={checkboxToogle}/>
        ))}
    </ul>
    )

export default TodoList