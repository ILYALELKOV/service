const express = require('express')

const router = express.Router({ mergeParams: true })

router.use('/', require('./user'))
router.use('/rooms', require('./rooms'))
router.use('/room', require('./room'))

module.exports = router
