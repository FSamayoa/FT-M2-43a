import { GET_USERS, COUNTER, DECREMENT, USER_DETAIL, CLEAN_DETAIL } from "./actionTypes"
import axios from 'axios'

export const increment = () => {
    return { type: COUNTER }
}

export const decrement = () => {
    return { type: DECREMENT }
}

export const getUsers = () => {
    return (dispatch) => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(({ data }) => {
                return dispatch({ type: GET_USERS, payload: data })

            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const userDetail = (id) => {
    return (dispatch) => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(({ data }) => {
                return dispatch({ type: USER_DETAIL, payload: data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
}


export const cleanDetail = () => {
    return { type: CLEAN_DETAIL }
} 