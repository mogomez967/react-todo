import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoListItem from './TodoListItem'

const todoList = [
    {
      id: 1,
      title: "Kilter Board"
    },
    {
      id: 2,
      title: "Muay Thai"
    },
    {
      id: 3,
      title: "Kickboxing"
    }
]

const TodoList = () => {
    return (
      <ul>
        {
          todoList.map(todo => (
            <TodoListItem key={todo.id} todo={todo} />
          ))
        }
      </ul>
    )
}

export default TodoList