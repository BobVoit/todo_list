import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'http://todolist/api/index.php?'
})



export const usersAPI = {
    signUp(login, password, password2) {
        return instance.post('', {
            method: 'registration',
            login, password, password2
        });
    },
    signIn(login, password) {
        return instance.post('', {
            method: 'login',
            login, password
        });
    },
    logout(token) {
        return instance.post('', {
            method: 'logout',
            token
        });
    },
    getUserByToken(token) {
        return instance.get(`method=getuserbutoken&token=${token}`);
    },
}


export const todosAPI = {
    addTodo(id, message, about) {
        return instance.post('', {
            method: 'addtodo',
            id, message, about
        });
    },
    getAllTodos(id) {
        return instance.get(`method=getalltodos&id=${id}`);
    },
    deleteTodo(todoId) {
        return instance.get(`method=deletetodo&id=${todoId}`);
    }
}

