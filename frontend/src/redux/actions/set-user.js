import { ACTION_TYPE } from './action-type.js'

export const setUser = (user) => ({
	type: ACTION_TYPE.SET_USER,
	payload: user
})
