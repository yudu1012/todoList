import Field from './Field'
import Button from './Button'

const AddTaskForm = () => {
  return (
    <form className="todo__form">
      <Field id={'new-task'} label={'new task'} className={'todo__field'} />
      <Button type={'submit'}>add task</Button>
    </form>
  )
}

export default AddTaskForm
