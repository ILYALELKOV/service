import { useNavigate } from 'react-router'
import style from './roomCard.module.css'

export const RoomCard = ({ url, price, size, name, id, isAvailable }) => {

	const navigate = useNavigate()

	const handleClick = (id) => {
		navigate(`/room/${id}`)
	}

	return (
		<>
			{isAvailable && (
				<div className={style.card} onClick={() => handleClick(id)}>
					<div>
						<img className={style.card_img} src={url} alt="room" />
					</div>
					<div className={style.card_description}>
						<p>{name}</p>
						<p>Площадь: {size}</p>
						<p className={style.room_price}>Цена: {price}$</p>
					</div>
				</div>
			)}
		</>
	)
}
