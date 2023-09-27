import { GET_ALL_USERS } from "./types";
import axios from "axios";

// export const getAllUsers = () => {
//     return async (dispatch) => {
//         try {
//             const { data } = await axios('https://jsonplaceholder.typicode.com/users');

//             return dispatch({ type: GET_ALL_USERS, payload: data })
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

export const getAllUsers = () => {
    return (dispatch) => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(({ data }) => {
            dispatch({ type: GET_ALL_USERS, payload: data })
        })
        .catch((error) => {
            console.log(error);
        })
    }
}