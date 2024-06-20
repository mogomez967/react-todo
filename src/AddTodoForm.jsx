import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function AddTodoForm () {
    return (
        <form>
            <label htmlFor="todoTitle">Title </label>            
            <input type="text" id="todoTitle"></input>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm