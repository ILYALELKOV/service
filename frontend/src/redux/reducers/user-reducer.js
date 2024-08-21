import { ROLE } from '../../constans/index.js'
import { ACTION_TYPE } from '../actions/action-type.js'

const initialState = {
	id: null,
	login: null,
	roleId: ROLE.GUEST,
	session: null
}

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER: {
			return {
				...state,
				...action.payload
			}
		}
		default:
			return state
	}
}
