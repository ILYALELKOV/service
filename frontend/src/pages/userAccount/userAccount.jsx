import { ROLE } from '../../constans/index.js'
import { selectUserRole } from '../../redux/selectors/index.js'
import { useSelector } from 'react-redux'
import { NoAccessUserAccount } from '../../components/noAccessUserAccount/noAccessUserAccount.jsx'
import style from './userAccount.module.css'

export const UserAccount = () => {

	const userRole = useSelector(selectUserRole)

	return (
		<>
			{userRole !== ROLE.USER
				? (<NoAccessUserAccount />)
				: (<div className={style.container}>
					<h1>Мои забронированные номера</h1>
				</div>)}
		</>
	)
}
