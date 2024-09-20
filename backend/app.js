const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const chalk = require('chalk')
const routes = require('./routes')
const path = require('path')

const port = 3001
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/', routes)

app.get('*', (req, res) => {
	res.sendFile(path.resolve('..', 'frontend', 'index.html'))
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