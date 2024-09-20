const express = require('express')
const { register, login, getUsers, deleteUser } = require('../controllers/user')
const { getBookedRoom, deleteBooking } = require('../controllers/room')
const mapUser = require('../helpers/mapUser')
const mapUserData = require('../helpers/mapUserData')

const router = express.Router({ mergeParams: true })

router.post('/register', async (req, res) => {
	try {
		const { user, token } = await register(req.body.login, req.body.password)

		res.cookie('token', token, { httpOnly: true })
			.send({ error: null, user: mapUser(user) })
	} catch (error) {
		res.send({ error: error.message || 'Unknown error' })
	}
})

router.post('/login', async (req, res) => {
	try {
		const { user, token } = await login(req.body.login, req.body.password)

		res.cookie('token', token, { httpOnly: true })
			.send({ error: null, user: mapUser(user) })
	} catch (error) {
		res.send({ error: error.message || 'Unknown error' })
	}
})

router.post('/logout', (req, res) => {
	res.cookie('token', '', { httpOnly: true })
		.send({})
})

router.get('/get-users-list', async (req, res) => {
	const users = await getUsers()
	res.send(mapUserData(users))
})

router.post('/delete-user/:userId', async (req, res) => {
	const { userId } = req.params
	await deleteUser(userId)
	const users = await getUsers()
	res.send(mapUserData(users))
})

router.get('/user/:userId/booked-rooms', async (req, res) => {
	const { userId } = req.params

	const userBookedRooms = await getBookedRoom(userId)

	res.send(userBookedRooms)
})

router.post('/user/:userId/room/:roomId/delete-booking', async (req, res) => {
	const { userId, roomId } = req.params
	await deleteBooking(userId, roomId)
	res.send({ status: 'ok' })
})

module.exports = router