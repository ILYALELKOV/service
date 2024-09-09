import { ACTION_TYPE } from '../actions/index.js'

const initialState = {
	theme: localStorage.getItem('theme') || 'light'
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.CHANGE_THEME: {
			return {
				...state,
				theme: state.theme === 'light' ? 'dark' : 'light'
			}
		}

		default:
			return state
	}
}
