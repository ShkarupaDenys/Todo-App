import React from "react"
import TodoList from './TodoList'
import Input from "../Input"
import Button from "../Button";
import Plus from "../../icons/Plus";
import { useState } from 'react';

const Todo = () => {

    const [value, setValue] = useState('')
    const [todoListData, setTodolistData] = useState([])
    const [count, setCount] = useState(todoListData.length)
    const [isChecked, setIsChecked] = useState(false)

    const getInputValue = (e) => {
        setValue(e.target.value)
    }

    const createTodo = () => {

        const emptyValue = value.trim() === '';

        const choosenValue = todoListData.find(({title}) => title === value)

        if (choosenValue) {
            alert(`${choosenValue.title} value already exists`)
        }

        if (!emptyValue && !choosenValue) {
            setTodolistData([...todoListData, {
                title: value,
                id: value,
            }])

            setCount(todoListData.length + 1)
            setValue('')
        }
    }

    const deleteItem = (id) => {
        setTodolistData(todoListData.filter((value) => value.id !== id))
        setCount(todoListData.length - 1)
    }

    const checkboxToogle = () => {
        setIsChecked(!isChecked)
        console.log(isChecked)
    }

    const buttonIcon = <Plus />
    const renderList = todoListData.length > 0 &&
        <TodoList 
            checkboxToogle={checkboxToogle}
            list={todoListData}
            deleteItem={deleteItem}/>

    return (
        <section className="todo">
            <hr />
            <h1 className="todo__heading">React Todo App</h1>
            <p className="todo__sub-heading">Complete: 0 / {count}</p>
            <hr />
            <div className="todo__box">
                <Input placeholder='Enter value' value={value} onChange={getInputValue}/>
                <Button className="todo__button" onClick={createTodo} icon={buttonIcon}/>
            </div>
            {renderList}
        </section>
    )
}

export default Todo;