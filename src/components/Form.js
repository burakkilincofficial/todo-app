import React, {useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {

        useEffect(() => {
            if (editTodo !== null) {
                setInput(editTodo.text);
            } else {
                setInput('');
            }
        }, [setInput, editTodo]);

        const onInputChange = (event) => {
            setInput(event.target.value);
        }


        const onFormSubmit = (event) => {
            event.preventDefault()
            if (!editTodo) {
                setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
                setInput("");
            } else {
                setTodos(todos.map(todo => (todo.id === editTodo.id ? {...todo, title: input} : todo)))
                setEditTodo(null)
            }
        }

        return (
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder="Enter a Todo..." className="task-input" value={input} required
                       onChange={onInputChange}/>
                <button className="button-add" type="submit"> {editTodo ? "OK" : "Add"}</button>
            </form>
        );
    }
;

export default Form;