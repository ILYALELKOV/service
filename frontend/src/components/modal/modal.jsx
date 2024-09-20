import { useState } from 'react'
import style from './modal.module.css'
import PropTypes from 'prop-types'

export const Modal = ({ closeModal, savePrice, errorPrice }) => {
	const [price, setPrice] = useState('')

	const handlePriceChange = (e) => {
		setPrice(e.target.value)
	}

	return (
		<section className={style.modal}>
			<div className={style.modal_content}>
				<h2>Изменить цену</h2>
				<input
					className={style.text_price}
					placeholder="Введите новую цену"
					value={price}
					onChange={handlePriceChange}
					type="number"
				/>
				<button className={style.save_button} onClick={() => savePrice(Number(price))}>Сохранить</button>
				<button className={style.close_button} onClick={closeModal}>Закрыть</button>
				{errorPrice && (
					<p className={style.error_price}>{errorPrice}</p>
				)}
			</div>
		</section>
	)
}

Modal.propTypes = {
	closeModal: PropTypes.func.isRequired,
	savePrice: PropTypes.func.isRequired,
	errorPrice: PropTypes.string
}

