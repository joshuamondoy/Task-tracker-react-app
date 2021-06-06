import Button from './Button'
import PropTypes from 'prop-types' //this is for what kind of data types a prop will be
const Header = ({title}) => { //props are use to pass values from one components to another
    const onClick = () => {
        console.log('Clicked!')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='royalblue' text='Add' onClick={onClick}/> {/*this is the Button component file we created*/}
            {/* <Button color='royalblue' text='Hi'/> now this is the reusablitity
            <Button color='coral' text='Sup'/> */}
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string, //this will check the prop type value passed and gives an error if the passed value is not a string
}
// create a variable to declare style
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',

// }
export default Header
