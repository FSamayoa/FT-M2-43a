// const initialState = {
//     name: 'Dai',
//     cohorte: 'FT 43a',
//     number: 0
// }

// const reducer = (state = initialState , action) => { // { type: 'CAMBIAR_NOMBRE', payload: {name:'Juan', cohorte:'43a'} }
//     if(action.type === 'AUMENTAR_NUMBER') {
//         return {
//             ...state,
//             number: state.number + 1
//         }
//         // {
//         //     name: 'Dai',
//         //     cohorte: 'FT 43a',
//         //     number: 1
//         // }
//     }
//     if(action.type === 'CAMBIAR_NOMBRE') {
//         return {
//             ...state,
//             name: action.payload.name,
//             cohorte: action.payload.cohorte
//         }
//         // {
//         //     name: 'Juan',
//         //     cohorte: '43a',
//         //     number: 1
//         // }
//     }

//     return {...state};
// }

// export default reducer;



const initialState = {
    name: 'Dai',
    cohorte: 'FT 43a',
    number: 0
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'AUMENTAR_NUMBER':
            return {
                ...state,
                number: state.number + 1
            }
        case 'CAMBIAR_NOMBRE': 
            return {
                ...state,
                name: action.payload
            }
        default:
            return {...state}
    }
}

export default reducer;