import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/modules/todoList'
import styled from 'styled-components'

const Header = styled.div`
    border: 1px solid rgb(221, 221, 221);
    height: 60px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 20px;
    margin-bottom: 24px;
`


const InputArea = styled.div`
    background-color: rgb(238, 238, 238);
    border-radius: 12px;
    margin: 0px auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 30px;
    gap: 20px;
`

const AddBtn = styled.button`
    border: none;
    height: 40px;
    cursor: pointer;
    border-radius: 10px;
    background-color: teal;
    width: 140px;
    color: rgb(255, 255, 255);
    font-weight: 700;
`
const Input = styled.input`
    height: 40px;
    width: 240px;
    border: none;
    border-radius: 12px;
    padding: 0px 12px;

`


function AddTodo() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const addTitle = (e) => {
        setTitle(e.target.value)
    }

    const addContent = (e) => {
        setContent(e.target.value)
    }

    const addButton = () => {
        dispatch(addTodo(title, content))
        setTitle('')
        setContent('')
    }


    return (
        <div>
            <Header><div>My Todo List</div><div>React</div></Header>
            <InputArea>
                <Input type="text" placeholder="제목" value={title} onChange={addTitle} />
                <Input type="text" placeholder="내용" value={content} onChange={addContent} />
                <AddBtn onClick={addButton}>추가</AddBtn>
            </InputArea>
        </div>
    )
}

export default AddTodo