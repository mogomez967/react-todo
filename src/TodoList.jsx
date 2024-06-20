import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

var todoList = [
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

function TodoList () {
    return (
      <ul>
        {
          todoList.map(function(item) {
            return <li key={item.id}>{item.title}</li>
          })
        }
      </ul>
    )
}

export default TodoList