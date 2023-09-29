import { COUNTER, DECREMENT, GET_USERS, USER_DETAIL, CLEAN_DETAIL} from "./actionTypes"
const initialState = {
    users: [],
    user:{},
    counter: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case COUNTER:
            return{
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return{
                ...state,
                counter: state.counter - 1
            }

        case GET_USERS:
            return{
                ...state,
                users: action.payload
            }

        case USER_DETAIL:
            return{
                ...state,
                user: action.payload
            }

        case CLEAN_DETAIL:
            return{
                ...state,
                user: {}
            }

        default:
            return{
                ...state
            }
    }
}

export default reducer;