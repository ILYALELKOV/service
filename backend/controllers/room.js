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

module.exports = { getRooms, getRoom, bookRoom, getBookedRoom }