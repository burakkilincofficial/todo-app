import React from 'react';

const TodosList = ({todos, setTodos, setEditTodo}) => {
    const handleDelete = (todo) => {
        setTodos(todos.filter(t => t.id !== todo.id));
    }

    const handleComplete = (todo) => {
        setTodos(todos.map(t => {
            if (t.id === todo.id) {
                t.completed = !t.completed;
            }
            return t;
        }));
    }

    const handleEdit = (todo) => {
        const findTodo = todos.find(t => t.id === todo.id);
        setEditTodo(findTodo);
    }

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li className="list-item" key={todo.id}>
                        <input
                            type="text"
                            value={todo.title}
                            className={`list ${todo.completed ? 'complete' : ''}`}
                            onChange={(event) => event.preventDefault()}/>
                        <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodosList;