import style from './loader.module.css'

const Loader = () => {
	return (
		<section className={style.wrapper}>
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
			<h1>Загрузка...</h1>
		</section>
	)
}

export default Loader
