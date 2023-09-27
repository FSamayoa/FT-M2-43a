import { GET_DETAIL_USER, GET_USERS, COUNT } from "./action-types";
import axios from "axios"

export const getAllUsers = ()=>{
    return (dispatch)=>{
        axios('https://jsonplaceholder.typicode.com/users')
        .then(({data})=>{
            return dispatch({type: GET_USERS, payload:data})
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export const inCounter = ()=>{
    return{type:COUNT}
}

export const getUser = ()=>{
    return (dispatch)=>{
        axios('https://jsonplaceholder.typicode.com/users/3')
        .then(({data})=>{
            return dispatch({type: GET_DETAIL_USER, payload:data})
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}