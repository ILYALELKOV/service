import { useSelector } from 'react-redux'
import { selectUserRole } from '../../redux/selectors/index.js'
import { ROLE } from '../../constans/index.js'
import { NoAccess } from '../../components/noAccess/noAccess.jsx'

export const Admin = () => {

	const userRole = useSelector(selectUserRole)

	return (
		<div>
			{userRole !== ROLE.ADMIN
				? <NoAccess />
				: <h1>Hello from admin page!</h1>
			}
		</div>
	)
}
