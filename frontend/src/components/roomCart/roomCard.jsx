import style from './roomCard.module.css'

export const RoomCard = ({ url, price, amenities, size, name, id }) => {

	return (
		<div className={style.card} onClick={() => onClickRoom(id)}>
			<div>
				<img className={style.card_img} src={url} alt="room" />
			</div>
			<div className={style.card_description}>
				<p>{name}</p>
				<p>Цена: {price}$</p>
				<p>Площадь: {size}</p>
				<button className={style.card_button}>Арендовать</button>
			</div>
		</div>
	)
}
