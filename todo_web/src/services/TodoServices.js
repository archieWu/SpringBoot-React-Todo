import axios from "axios";
import {API_URL,JPA_API_URL} from "../Constants";

class TodoServices {

    findAll(username){
        return axios.get(`${JPA_API_URL}/user/${username}/todos`)
    }

    deleTodo(username,id){
        return  axios.delete(`${JPA_API_URL}/user/${username}/todos/${id}`)
    }

    findTodo(username,id){
        return axios.get(`${JPA_API_URL}/user/${username}/todos/${id}`)
    }
    updateTodo(username, id, todo){
        return  axios.put(`${JPA_API_URL}/user/${username}/todos/${id}`, todo)
    }
    createTodo(username, todo) {
        //console.log('executed service')
        return axios.post(`${JPA_API_URL}/users/${username}/todos/`, todo);
    }
}

export default new TodoServices();