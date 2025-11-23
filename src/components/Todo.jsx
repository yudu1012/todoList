import AddTaskForm from './AddTaskForm'
import SearchTaskForm from './SearchTaskForm'
import TodoInfo from './TodoInfo'
import TodoList from './TodoList'
import {useEffect, useRef, useState} from "react";

const Todo = () => {
    const [tasks, setTasks] = useState(()=>{
        let save = localStorage.getItem("tasks");
        if (save){
            return JSON.parse(save);
        }
        return [
            { id: 'task-1', title: 'drink sode', isDone: false },
            { id: 'task-2', title: 'walk', isDone: true }
        ]
    })
    let [newTaskTitle,setNewTaskTitle] = useState('');
    let [newSearchTitle,setNewSearchTitle] = useState('');
    let newInputRef = useRef(null)
    let deleteAll = ()=>{
        let isConfirmed = confirm("do yo wanna delete every task");
        if (isConfirmed){
            setTasks([])
        }
    }
    let deleteTask = (id) =>{
        setTasks(tasks.filter((task)=> task.id !== id));

    }
    let toggle = (id,isDone) =>{
        setTasks(tasks.map((task)=>{
            if (task.id === id){
                return {...task,isDone};
            }
            return  task;
        }))
    }
    let addTask = () =>{
        let newTask = {
            id:crypto?.randomUUID() ?? Date.now().toString(),
            title:newTaskTitle,
            isDone:false
        }
        setTasks([...tasks,newTask]);
        setNewTaskTitle('')
        newInputRef.current.focus();

    }
    useEffect(() => {
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }, [tasks]);
    useEffect(() => {
        newInputRef.current.focus();
    }, []);

    let clear = newSearchTitle.trim().toLowerCase();
    let locale  = clear.length > 0 ? tasks.filter((task)=> task.title.toLowerCase().includes(clear)) : null;
    return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm newInputRef={newInputRef} addTask={addTask} newTaskTitle={newTaskTitle} setNewTaskTitle={setNewTaskTitle} />
      <SearchTaskForm newSearchTitle={newSearchTitle} setNewSearchTitle={setNewSearchTitle} />
      <TodoInfo deleteAll={deleteAll} done={tasks.filter((task)=>task.isDone !== false).length} total={tasks.length} />
      <TodoList locale={locale} toggle={toggle} deleteTask={deleteTask} tasks={tasks} />
    </div>
  )
}

export default Todo
