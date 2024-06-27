import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import TodoListItem from './TodoListItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </main>
  )
}

export default App
