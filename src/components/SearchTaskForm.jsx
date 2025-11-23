import Field from "./Field.jsx";

const SearchTaskForm = (props) => {
    let{newSearchTitle,setNewSearchTitle} = props;
    return (
    <form className="todo__form">
        <Field id={'search-task'} value={newSearchTitle}  onInput={(event)=>setNewSearchTitle(event.target.value)} className={'todo__field'} label={'Search task'} type={'search'}/>

    </form>
  )
}

export default SearchTaskForm
