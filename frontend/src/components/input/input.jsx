import { forwardRef } from 'react'
import PropTypes from 'prop-types'

export const Input = forwardRef(({ text, type = 'text', styleClass, ...props }, ref) => {
	return (
		<>
			<input placeholder={text} type={type} className={styleClass.input} {...props} ref={ref} />
		</>
	)
})

Input.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.oneOf(['text', 'number', 'password']),
	styleClass: PropTypes.object.isRequired
}
