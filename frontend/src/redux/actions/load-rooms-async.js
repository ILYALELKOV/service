import { setRoomsData } from './set-rooms-data.js'
import { request } from '../../utils/request.js'

export const loadRoomsAsync = () => (dispatch) =>
	request('/rooms')
		.then((roomData) => {
			dispatch(setRoomsData(roomData))
		})
