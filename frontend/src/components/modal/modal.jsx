import { useState } from 'react'
import style from './modal.module.css'

export const Modal = ({ closeModal, savePrice }) => {
	const [price, setPrice] = useState('')

	const handlePriceChange = (e) => {
		setPrice(e.target.value)
	}

	return (
		<div className={style.modal}>
			<div className={style.modal_content}>
				<h2>Изменить цену</h2>
				<input
					className={style.text_price}
					placeholder="Введите новую цену"
					value={price}
					onChange={handlePriceChange}
					type="number"
				/>
				<button onClick={() => savePrice(Number(price))}>Сохранить</button>
				<button onClick={closeModal}>Закрыть</button>
			</div>
		</div>
	)
}
