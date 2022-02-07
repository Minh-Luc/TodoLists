import Todo from './Todo'

const TodoList = ({todos, setTodos, filter}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filter.map((todo)=>(
                    <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} inputText={todo.text}/>
                ))}
            </ul>
        </div>
  );
};

export default TodoList;
