import { GET_ALL_USERS, GET_USER_DETAIL, CLEAN_DETAIL } from "../actions/action-types";

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

        case GET_USER_DETAIL:
            return {
                ...state,
                user: action.payload
            }

        case CLEAN_DETAIL:
            return {
                ...state,
                user: {}
            }

        default: 
            return {...state}
    }
}

export default reducer;