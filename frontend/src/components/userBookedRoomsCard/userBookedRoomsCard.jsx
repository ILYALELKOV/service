import PropTypes from 'prop-types'
import style from './userBookedRoomsCard.module.css'

export const UserBookedRoomsCard = ({ img, name, size, amenities, onDeleteBooking, id }) => {

	return (
		<section className={style.room_container}>
			<div>
				<img src={img} alt="комната" className={style.room_image} />
			</div>
			<div className={style.room_description}>
				<h3>{name}</h3>
				<ul className={style.amenities}>
					{amenities.map((item, index) => (
						<li key={index} className={style.description_amenities}>{item}</li>
					))}
				</ul>
				<h3>{size}</h3>
				<button onClick={() => onDeleteBooking(id)} className={style.room_description_button}>Отменить бронь</button>
			</div>
		</section>
	)
}

UserBookedRoomsCard.propTypes = {
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	size: PropTypes.string,
	amenities: PropTypes.array,
	onDeleteBooking: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired
}


