
const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label className='label-task'>Task</label>
                <input type='text' placeholder='Add task' />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Day & Time' />
            </div>
            <div className='form-control'>
                <label>Reminder</label>
                <input type='checkbox' placeholder='Add task' className='checkbox'/>
            </div>
            <input type='submit' value='Save Task' className='btn-save'/>
        </form>
    )
}

export default AddTask
