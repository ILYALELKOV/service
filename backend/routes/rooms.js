const express = require('express')
const {
	getRooms
} = require('../controllers/room')

const router = express.Router({ mergeParams: true })

router.get('/', async (req, res) => {
	const rooms = await getRooms()
	res.send(rooms)
})

module.exports = router