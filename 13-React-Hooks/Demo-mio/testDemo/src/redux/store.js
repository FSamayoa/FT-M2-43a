import {createStore, applyMiddleware, compose} from "redux"
import thunkMiddelware from "redux-thunk"
import reducer from "./reducer"

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunkMiddelware)))

export default store
