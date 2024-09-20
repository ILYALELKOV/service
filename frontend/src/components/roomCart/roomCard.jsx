import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../redux/selectors/index.js'
import style from './roomCard.module.css'
import PropTypes from 'prop-types'

export const RoomCard = ({ url, price, size, name, id, isAvailable }) => {

	const navigate = useNavigate()
	const theme = useSelector(selectTheme)

	const handleClick = (id) => {
		navigate(`/room/${id}`)
	}

	return (
		<>
			{isAvailable && (
				<section className={theme === 'light' ? style.card_light : style.card_dark} onClick={() => handleClick(id)}>
					<div>
						<img className={style.card_img} src={url} alt="room" />
					</div>
					<div className={theme === 'light' ? style.card_description_light : style.card_description_dark}>
						<p>{name}</p>
						<p>Площадь: {size}</p>
						<p className={theme === 'light' ? style.room_price_light : style.room_price_dark}>Цена: {price}$</p>
					</div>
				</section>
			)}
		</>
	)
}

RoomCard.propTypes = {
	url: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	size: PropTypes.string,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	isAvailable: PropTypes.bool.isRequired
}
