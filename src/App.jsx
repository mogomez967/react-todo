import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'
import TodoListItem from './TodoListItem'

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState('');

  return (
    <main>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>{newTodo}</p>
      <TodoList todoList={setTodoList}/>
    </main>
  )
}

export default App
