import { ACTION_TYPE } from '../actions/index.js'

const initialState = {
	rooms: [],
	error: null
}

export const roomsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_ROOMS_DATA:
			return {
				...state,
				rooms: action.payload,
				error: null
			}
		default:
			return state
	}
}
