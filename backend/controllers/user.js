const bcrypt = require('bcrypt')
const User = require('../models/User')
const { generate } = require('../helpers/token')


async function register(login, password) {
	if (!password) {
		throw new Error('Пароль пустой')
	}

	const passwordHash = await bcrypt.hash(password, 10)

	const user = await User.create({ login, password: passwordHash })

	const token = generate({ id: user.id })

	return { user, token }
}

async function login(login, password) {
	const user = await User.findOne({ login })

	if (!user) {
		throw new Error('Пользователь не найден')
	}

	const isPasswordMatch = await bcrypt.compare(password, user.password)

	if (!isPasswordMatch) {
		throw new Error('Неверный пароль')
	}

	const token = generate({ id: user.id })

	return { user, token }
}

async function getUsers() {
	const usersData = await User.find()
	return usersData
}

async function deleteUser(userId) {
	await User.deleteOne({ _id: userId })
}


module.exports = { register, login, getUsers, deleteUser }