import { GET_USERS,COUNT,GET_DETAIL_USER } from "./action-types"
const initialState = {
    user:{},
    users:[],
    contador:0
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case GET_USERS:
            return{
                ...state,
                users: action.payload
            }

        case COUNT:
            return{
                ...state,
                contador: state.contador + 1
            }
        
        default:
            return{
                ...state
            }
    }


}


export default reducer