const { getRoom, bookRoom, deleteReservationAdmin, changeRoomPrice } = require('../controllers/room')
const express = require('express')
const authenticated = require('../middlewares/authenticated')

const router = express.Router({ mergeParams: true })

router.get('/:id', async (req, res) => {
	const room = await getRoom(req.params.id)
	res.send(room)
})

router.use(authenticated)

router.post('/:id/booked', async (req, res) => {
	const { id, userId } = req.body
	await bookRoom(id, userId)
})

router.post('/:roomId/delete-reservation-admin', async (req, res) => {
	const { roomId } = req.params
	await deleteReservationAdmin(roomId)
	res.send({ success: true })
})

router.patch('/:roomId/update-price', async (req, res) => {
	const { newPrice } = req.body
	const { roomId } = req.params
	await changeRoomPrice(roomId, newPrice)
	res.send({ success: true })
})

module.exports = router