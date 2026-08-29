function ToDoItem(props) {
    return <li>{props.todo}</li>
}

function Key(props) {
    if(!props.todos) {
        return <div>Loading...</div>
    }

    return (
        <ul>
            {props.todos.map((todo) => {
                return <ToDoItem key={todo.id} todo={todo.task}/>
            })}
        </ul>
    )
}

export default Key;