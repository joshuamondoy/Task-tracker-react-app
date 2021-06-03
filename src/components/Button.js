//doing this can save codes and can reuse by time
import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    return <button style={{ backgroundColor: color}} className='btn'>{text}</button>
}

Button.defaultProps = {
    color: 'steelblue',
}
Button.propType = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button

