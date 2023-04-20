import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/modules/todoList'

function AddTodo() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    // const todoList = useSelector((state) => state.todoList)
    // console.log(todoList)


    const addTitle = (event) => {
        setTitle(event.target.value)
    }

    const addContent = (event) => {
        setContent(event.target.value)
    }

    const AddButton = () => {
        dispatch(addTodo(title, content))
        setTitle('')
        setContent('')
    }


    return (
        <div>
            <div>
                제목 : <input type="text" value={title} onChange={addTitle} />
                내용 : <input type="text" value={content} onChange={addContent} />
                <button onClick={AddButton}>추가</button>
            </div>
        </div>
    )
}

export default AddTodo