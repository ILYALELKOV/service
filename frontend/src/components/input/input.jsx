import { forwardRef } from 'react'

export const Input = forwardRef(({ text, type = 'text', styleClass, ...props }, ref) => {
	return (
		<>
			<input placeholder={text} type={type} className={styleClass.input} {...props} ref={ref} />
		</>
	)
})
