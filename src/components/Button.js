//doing this can save codes and can reuse by time
import PropTypes from 'prop-types'


const Button = ({color, text}) => {
    //define onClick function
        const onClick = () => {
        console.log('Clicked!')
    }
    return <button onClick={onClick}style={{ backgroundColor: color}} className='btn'>{text}</button>
}

Button.defaultProps = {
    color: 'steelblue',
}
Button.propType = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button

