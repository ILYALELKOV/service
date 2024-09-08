module.exports = function(userData) {
	return userData.map(user => ({
		id: user._id,
		login: user.login,
		role: user.role,
		rooms: user.bookedRooms
	}))
}
