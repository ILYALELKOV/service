const mongoose = require('mongoose')

const RoomSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	price: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: false
	},
	photos: {
		type: [String],
		required: true
	},
	amenities: {
		type: [String],
		required: true
	},
	size: {
		type: String,
		required: true
	},
	isAvailable: {
		type: Boolean,
		default: true
	}
}, { timestamps: true })

const Room = mongoose.model('Room', RoomSchema)

module.exports = Room
