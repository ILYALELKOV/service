const Room = require('../models/Room')
const User = require('../models/User')

async function getRooms() {
	return Room.find()
}

function getRoom(id) {
	return Room.findById(id)
}

async function bookRoom(id, userId) {
	await Room.findByIdAndUpdate(id, { isAvailable: false }, { new: true })
	await User.findByIdAndUpdate(userId, { $push: { bookedRooms: id } })
}

async function getBookedRoom(userId) {
	const userBookRooms = await User.findById(userId).populate('bookedRooms')
	return userBookRooms
}

async function deleteBooking(userId, roomId) {
	await Room.findByIdAndUpdate(roomId, { isAvailable: true })
	await User.findByIdAndUpdate(userId, { $pull: { bookedRooms: roomId } })
}

async function deleteReservationAdmin(roomId) {
	const user = await User.findOne({ bookedRooms: roomId })

	if (user) {
		await User.findByIdAndUpdate(user._id, {
			$pull: { bookedRooms: roomId }
		})

		await Room.findByIdAndUpdate(roomId, { isAvailable: true })
	}
}

async function changeRoomPrice(roomId, newPrice) {
	await Room.findByIdAndUpdate(roomId, { price: newPrice }, { new: true })
}

module.exports = { getRooms, getRoom, bookRoom, getBookedRoom, deleteBooking, deleteReservationAdmin, changeRoomPrice }