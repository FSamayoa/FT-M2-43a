import { GET_USERS, INCREMENT } from "./action-types";
import axios from "axios";

export const getAllUsers = () => {
    return (dispatch) => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(({ data }) => {
            return dispatch({ type: GET_USERS, payload: data})
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

// export const getAllUsers = () => {
//     return (dispatch) => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then((data) => {
//             return dispatch({ type: GET_USERS, payload: data})
//         })
//          .catch((error) => {
//              console.log(error);
//         })
//     }
// }

export const incrementCounter = () => {
    return { type: INCREMENT }
}