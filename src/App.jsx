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

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Todo List</h1>
    </main>
  )
}

export default App
