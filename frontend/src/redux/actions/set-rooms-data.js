import { ACTION_TYPE } from './action-type'

export const setRoomsData = (roomsData) => ({
	type: ACTION_TYPE.SET_ROOMS_DATA,
	payload: roomsData
})
