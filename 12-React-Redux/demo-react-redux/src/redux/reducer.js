import { GET_USERS, INCREMENT } from "./action-types";

const initialState = {
    users: [],
    userDetail: {},
    counter: 0 // 2
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }

        default:
            return {...state}
    }
}

export default reducer;