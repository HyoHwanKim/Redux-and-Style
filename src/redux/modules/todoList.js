import { v4 as uuidv4 } from 'uuid'
const ADD_TODO = 'ADD_TODO'

const initialState = [
    {
        id: uuidv4(),
        title: '리덕스 배우기',
        content: '리덕스를 배워보자',
        isDone: false,
        detail : '상세페이지'
    },
    {
        id: uuidv4(),
        title: '리엑트 배우기',
        content: '리엑트를 배워보자',
        isDone: false,
        detail : '상세페이지'

    }
]

export const addTodo = (title, content) => {
    return {
        type: ADD_TODO,
        payload: {
            title,
            content,
            detail : '상세페이지'
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
                isDone: false,
                detail : '상세페이지'
            }
            return [...state, newTodo]
        case "DELETE":
            return state.filter((item) => item.id !== action.payload);
        case "DONE_CHANGE":
                const newList = [...state];
                newList.find((item) => item.id === action.payload).isDone =
                  newList.find((item) => item.id === action.payload).isDone === true
                    ? false
                    : true;
                return newList;   
        default:
            return state
    }
}

export default todoList
