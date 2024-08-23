const Room = require('../models/Room')

async function getRooms() {
	return Room.find()
}


module.exports = { getRooms }