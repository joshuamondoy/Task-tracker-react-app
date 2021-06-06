import { FaTimes } from 'react-icons/fa' //this is for the icon we download using npm i react-icons
const Task = ({task}) => {
    return (
        <div className='task'>
            <h3>{task.text} <FaTimes className='x-icon'/></h3>
            
            <p>{task.day}</p>
        </div>
    )
}

export default Task
