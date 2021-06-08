import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
function App() {
  //this was just initialize here to be accessible to other sub components
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 5th at 1:30 pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Grocery',
        day: 'Feb 5th at 2:30 pm',
        reminder: false,
    },
]
)
//delete task function
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => 
    task.id !== id
  ))
}

//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task)  => 
  task.id === id ? {...task, reminder: 
  !task.reminder } : task
    )
  )
}
  return (
    //remember to always wrap every element in one parent element else it will throw an erro
    <div className='container'>
      <Header/> {/*this is the Header component file we created*/}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>: 'No task to show'}
    </div>
  );
}

export default App;
