const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const path = require('path')
const chalk = require('chalk')
const { register, login } = require('./controllers/user')

const port = 3001
const app = express()

app.use(express.json())
app.use(cookieParser())

app.post('/register', async (req, res) => {
	try {
		const user = await register(req.body.login, req.body.password)
		res.send({ error: null, user })
	} catch (error) {
		res.send({ error: error.message || 'Unknown error' })
	}
})

app.post('/login', async (req, res) => {
	try {
		const { user, token } = await login(req.body.login, req.body.password)

		res.cookie('token', token, { httpOnly: true })
			.send({ error: null, user })
	} catch (error) {
		res.send({ error: error.message || 'Unknown error' })
	}
})

app.post('/logout', (req, res) => {
	res.send({})
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