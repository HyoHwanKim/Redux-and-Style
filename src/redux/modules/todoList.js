import { v4 as uuidv4 } from 'uuid'
const ADD_TODO = 'ADD_TODO'

const initialState = [
    {
        id: uuidv4(),
        title: '리덕스 배우기',
        content: '리덕스를 배워보자',
        done: false
    },
    {
        id: uuidv4(),
        title: '리엑트 배우기',
        content: '리엑트를 배워보자',
        done: false
    }
]

export const addTodo = (title, content) => {
    return {
        type: ADD_TODO,
        payload: {
            title,
            content
        }
    }
}

//리듀서
const todoList = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                id: uuidv4(),
                title: action.payload.title,
                content: action.payload.content,
                done: false
            }
            return [...state, newTodo]
        default:
            return state
    }
}

export default todoList
