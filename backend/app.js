const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const path = require('path')
const chalk = require('chalk')
const mapUser = require('./helpers/mapUser')
const { register, login } = require('./controllers/user')
const { getRooms } = require('./controllers/room')

const port = 3001
const app = express()

app.use(express.json())
app.use(cookieParser())

app.post('/register', async (req, res) => {
	try {
		const { user, token } = await register(req.body.login, req.body.password)

		res.cookie('token', token, { httpOnly: true })
			.send({ error: null, user: mapUser(user) })
	} catch (error) {
		res.send({ error: error.message || 'Unknown error' })
	}
})

app.post('/login', async (req, res) => {
	try {
		const { user, token } = await login(req.body.login, req.body.password)

		res.cookie('token', token, { httpOnly: true })
			.send({ error: null, user: mapUser(user) })
	} catch (error) {
		res.send({ error: error.message || 'Unknown error' })
	}
})

app.post('/logout', (req, res) => {
	res.cookie('token', '', { httpOnly: true })
		.send({})
})

app.get('/rooms', async (req, res) => {
	const rooms = await getRooms()
	res.send(rooms)
})

mongoose.connect('mongodb+srv://Ilya:Ilyaasasin99@cluster0.buslwrr.mongodb.net/metroluxe?retryWrites=true&w=majority&appName=Cluster0')
	.then(() => {
		app.listen(port, () => {
			console.log(chalk.green(`Server started on port:${port}`))
		})
	})
	.catch((error) => {
		console.log(chalk.bgRed(error))
	})