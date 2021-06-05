//doing this can save codes and can reuse by time
import PropTypes from 'prop-types'


const Button = ({color, text, onClick}) => {
    //onClick events here are just being passed from header.js
    return <button onClick={onClick}style={{ backgroundColor: color}} className='btn'>{text}</button>
}

Button.defaultProps = { //this will be the color if there is no value passed from the header component
    color: 'steelblue',
}
Button.propType = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button

