import Field from './Field'
import Button from './Button'

const AddTaskForm = (props) => {
    let{addTask,newTaskTitle,setNewTaskTitle,newInputRef} = props;
    let onSubmit = (event) =>{
        event.preventDefault();
        addTask();
    }
    return (
    <form className="todo__form" onSubmit={onSubmit} >
      <Field value={newTaskTitle}  ref={newInputRef} onInput={(event)=> setNewTaskTitle(event.target.value)} id={'new-task'} label={'new task'} className={'todo__field'} />
      <Button type={'submit'}>add task</Button>
    </form>
  )
}

export default AddTaskForm
