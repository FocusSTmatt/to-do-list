import { useState } from 'react'
import './App.css'

function App(e) {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    }
    setTodoList([...todoList, task]);
    console.log(todoList)
  }

  const removeTaskItem = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }


  
  return (
    <>
      <div className='App'>
        <h1>My Task List</h1>
        <div className='addTask'>
          <input onChange={handleChange} />
          <button className='addTaskBtn' onClick={addTask}>Add Task</button>
        </div>
        <div className='list'>
          {todoList.map(( task ) => {
            return (
            <div className='task' key={task}>
              <h1>{task.taskName}</h1>
              <button onClick={() => removeTaskItem(task.id)}> X </button>
            </div>  
            )
          })}
        </div>
        
      </div>
    </>
  )
}

export default App
