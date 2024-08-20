const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const chalk = require('chalk')
const { register } = require('./controllers/user')

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

mongoose.connect('mongodb+srv://Ilya:Ilyaasasin99@cluster0.buslwrr.mongodb.net/metroluxe?retryWrites=true&w=majority&appName=Cluster0')
	.then(() => {
		app.listen(port, () => {
			console.log(chalk.green(`Server started on port:${port}`))
		})
	})
	.catch((error) => {
		console.log(chalk.bgRed(error))
	})