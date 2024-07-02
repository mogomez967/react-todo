import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AddTodoForm () {
    const [todoTitle, setTodoTitle] = useState('');

    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.elements.title.value;
        console.log(todoTitle);
        setTodoTitle('');
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title </label>            
            <input name="title" type="text" id="todoTitle" value={todoTitle} onChange={(e)=>setTodoTitle(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;