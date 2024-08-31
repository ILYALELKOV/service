const mongoose = require('mongoose')
const roles = require('../constans/roles')

const UserSchema = mongoose.Schema({
	login: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: Number,
		default: roles.USER
	},
	bookedRooms: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Room',
		required: true
	}]
}, { timestamps: true })

const User = mongoose.model('User', UserSchema)

module.exports = User
