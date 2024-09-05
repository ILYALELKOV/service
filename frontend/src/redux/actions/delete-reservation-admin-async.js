import { request } from '../../utils/request.js'
import { loadRoomsAsync } from './load-rooms-async.js'

export const deleteReservationAdminAsync = (roomId) => (dispatch) => {
	return request(`/room/${roomId}/delete-reservation-admin`, 'POST')
		.then(() => dispatch(loadRoomsAsync()))
}
