import style from './userBookedRoomsCard.module.css'

export const UserBookedRoomsCard = ({ img, name, size, amenities, onDeleteBooking, id }) => {

	return (
		<div className={style.room_container}>
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
		</div>
	)
}
