import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { userReducer } from './reducers/user-reducer.js'
import { thunk } from 'redux-thunk'


const reducer = combineReducers({
	user: userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
