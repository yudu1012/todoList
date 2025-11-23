import Field from "./Field.jsx";

const SearchTaskForm = () => {
    return (
    <form className="todo__form">
        <Field id={'search-task'} className={'todo__field'} label={'Search task'} type={'search'}/>

    </form>
  )
}

export default SearchTaskForm
