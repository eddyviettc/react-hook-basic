const Todo = ({ todos, title, handleDelete }) => {
    // Todo = (props) => {}
    // const todos = props.todos
    // const { todos, title } = props;
    const handeClickDelete = (id) => {
        handleDelete(id)
    }
    return (
        <div className='todo-container'>
            <div className="title">
                {title}
            </div>
            <div className='todo-child'>
                {todos.map(todo => {
                    return (
                        <div key={todo.id}>
                            <li>{todo.id} -- {todo.title}
                                <span onClick={() => handeClickDelete(todo.id)}>&nbsp;x</span>
                            </li>
                        </div>
                    )
                })}
            </div>
            <hr />

        </div>
    )
}

export default Todo