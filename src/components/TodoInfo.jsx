const TodoInfo = (props) => {
    let{done,total,deleteAll} = props;
    return (
    <div className="todo__info">
      <div className="todo__total-tasks">done: {done} from:{total}</div>
      <button className="todo__delete-all-button" onClick={deleteAll} type="button">Delete all</button>
    </div>
  )
}

export default TodoInfo