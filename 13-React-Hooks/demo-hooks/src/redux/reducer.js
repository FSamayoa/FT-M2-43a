import { GET_ALL_USERS } from "./types";

const initialState = {
    users: [],
    user: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }

        default:
            return {...state}
    }
}

export default reducer;