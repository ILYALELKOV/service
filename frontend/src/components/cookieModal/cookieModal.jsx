import { useState, useEffect } from 'react'
import style from './cookieModal.module.css'


export const CookieModal = () => {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const cookiesAccepted = localStorage.getItem('cookiesAccepted')
		if (!cookiesAccepted) {
			setIsOpen(true)
		}
	}, [])

	const handleAccept = () => {
		localStorage.setItem('cookiesAccepted', 'true')
		setIsOpen(false)
	}

	if (!isOpen) return null

	return (
		<section className={style.modal}>
			<div className={style.modalContent}>
				<h2 className={style.modalHeader}>Мы используем cookies</h2>
				<p className={style.modalText}>Мы используем cookies для улучшения работы сайта. Продолжая пользоваться сайтом,
					вы соглашаетесь с нашей
					политикой использования cookies</p>
				<button className={style.modalButtonAgreement} onClick={handleAccept}>Принять</button>
				<button className={style.modalButtonRefusal} onClick={handleAccept}>Отказаться</button>
			</div>
		</section>
	)
}
