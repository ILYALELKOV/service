import React, { useEffect, useState } from 'react'
import { request } from '../../utils/request.js'
import { useSelector } from 'react-redux'
import { selectUserRole } from '../../redux/selectors/index.js'
import { NoAccessAdmin } from '../../components/noAccessAdminPage/noAccessAdmin.jsx'
import { ROLE } from '../../constans/index.js'
import Loader from '../../components/loader/loader.jsx'
import style from './usersList.module.css'

export const UsersList = () => {

	const [users, setUsers] = useState([])
	const [message, setMessage] = useState('')

	const userRole = useSelector(selectUserRole)

	useEffect(() => {
		request('/get-users-list')
			.then(data => setUsers(data))
	}, [])

	const handleDeleteUser = (userId) => {
		request(`/delete-user/${userId}`, 'POST')
			.then((newData) => setUsers(newData))
			.then(() => setMessage('Пользователь был удален'))
			.finally(() => {
				setTimeout(() => {
					setMessage('')
				}, 3000)
			})
	}

	return (
		userRole === ROLE.ADMIN ? (
			<>
				<table className={style.users_table}>
					<thead className={style.table_head}>
					<tr>
						<th>Логин</th>
						<th>Роль</th>
						<th>Забронировано комнат</th>
						<th>ID</th>
						<th>Действие</th>
					</tr>
					</thead>
					<tbody>
					{users && users.length > 0 ? (
						users.map(user => (
							<tr key={user.id} className={style.table_road}>
								<td>{user.login}</td>
								<td>{user.role === 0 ? 'ADMIN' : 'USER'}</td>
								<td>{user.rooms.length}</td>
								<td>{user.id}</td>
								<td>
									<button
										className={style.delete_user_button}
										onClick={() => handleDeleteUser(user.id)}
									>
										Удалить пользователя
									</button>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="5">
								<Loader />
							</td>
						</tr>
					)}
					</tbody>
				</table>
				{message && <p className={style.message}>{message}</p>}
			</>) : (<NoAccessAdmin />)
	)
}
