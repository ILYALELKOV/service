import { request } from '../../utils/request.js'
import { ACTION_TYPE } from './action-type.js'

export const logout = () => {
	request('logout', 'POST')
		.then(() => sessionStorage.removeItem('userData'))

	return {
		type: ACTION_TYPE.LOGOUT
	}
}
