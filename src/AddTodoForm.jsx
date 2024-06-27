import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AddTodoForm () {
    const handleAddTodo = (event) => {
        event.preventDefault()

        // step 3 in "Handle 'add todo form' submit"
        // aka retrieve value of the title...
    }
    return (
        <form>
            <label htmlFor="todoTitle">Title </label>            
            <input name="title" type="text" id="todoTitle"></input>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm