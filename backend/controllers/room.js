const Room = require('../models/Room')

async function getRooms() {
	return Room.find()
}

function getRoom(id) {
	return Room.findById(id)
}


module.exports = { getRooms, getRoom }