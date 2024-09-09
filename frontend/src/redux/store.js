import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { userReducer } from './reducers/user-reducer.js'
import { thunk } from 'redux-thunk'
import { roomsReducer } from './reducers/rooms-reducer.js'
import { appReducer } from './reducers/app-reducer.js'

const reducer = combineReducers({
	user: userReducer,
	rooms: roomsReducer,
	app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
