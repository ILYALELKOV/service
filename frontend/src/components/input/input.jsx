export const Input = ({ text, type = 'text', styleClass }) => {
	return (
		<>
			<input placeholder={text} type={type} className={styleClass.input} />
		</>
	)
}
