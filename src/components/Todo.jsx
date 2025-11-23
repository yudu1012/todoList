import AddTaskForm from './AddTaskForm'
import SearchTaskForm from './SearchTaskForm'
import TodoInfo from './TodoInfo'
import TodoList from './TodoList'
import {useState} from "react";

const Todo = () => {
    let[tasks,setTasks] = useState([
        {id:1,title:"make hospital",isDone:false},
        {id:2,title:"grow up son",isDone:false},
    ])
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo done={tasks.filter((task)=>task.isDone !== false).length} total={tasks.length} />
      <TodoList tasks={tasks} />
    </div>
  )
}

export default Todo
