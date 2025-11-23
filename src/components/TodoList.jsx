import TodoItem from './TodoItem'

const TodoList = (props) => {
    let{tasks = [],deleteTask,toggle,locale} = props;
    const hasTasks = true

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>
  }

  return (
    <ul className="todo__list">
        {
            ( locale ?? tasks).map((task)=>
                <TodoItem
                    key={task.id}
                    className={'todo__item'}
                    {...task}
                    deleteTask={deleteTask}
                    toggle={toggle}

                />
            )
        }

    </ul>
  )
}

export default TodoList
