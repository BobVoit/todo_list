import { act } from '@testing-library/react';
import { todosAPI } from '../api/api';

const SET_TODO = 'SET_TODO';
const SET_ALL_TODOS = 'SET_ALL_TODOS';
const DELETE_TODO = 'DELETE_TODO';


let initialState = {
    todos: [],
}


const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        }
        case SET_ALL_TODOS: {
            return {
                ...state,
                todos: action.todos
            }
        }
        case DELETE_TODO: {
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo.id !== action.todoId)]
            }
        }
        default: return state;
    }
}


export const setTodo = todo => ({
    type: SET_TODO,
    todo
})

export const setAllTodos = todos => ({
    type: SET_ALL_TODOS,
    todos
})

export const deleteTodoFromStae = todoId => ({
    type: DELETE_TODO,
    todoId
})

export const addTodo = (id, message, about) => async dispatch => {
    let response = await todosAPI.addTodo(id, message, about);
    let { result, data } = response.data;
    if (result === 'ok') {
        dispatch(setTodo(data));
    }
}

export const getAllTodos = id => async dispatch => {
    let response = await todosAPI.getAllTodos(id);
    let { result, data } = response.data;
    if (result === 'ok') {
        dispatch(setAllTodos(data));
    }
}


export const deleteTodo = todoId => async dispatch => {
    let response = await todosAPI.deleteTodo(todoId);
    if (response.data.result === 'ok') {
        dispatch(deleteTodoFromStae(todoId));
    }
}




export default todosReducer;