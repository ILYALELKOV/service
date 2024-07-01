import React from 'react'
import style from './loader.module.css'

const Loader = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.grid_loader}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div className={style.grid_loader}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div className={style.grid_loader}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div className={style.grid_loader}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<h1>Loading...</h1>
		</div>
	)
}

export default Loader
