import { FaTimes } from 'react-icons/fa' //this is for the icon we download using npm i react-icons
const Task = ({task, onDelete}) => {
    return (
        <div className='task'>
            <h3>{task.text} <FaTimes className='x-icon' title={'Delete'} onClick={() => onDelete(task.id)}/></h3> {/*the onclick function will get the id that will be click to delete*/}
            
            <p>{task.day}</p>
        </div>
    )
}

export default Task
