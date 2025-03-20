import React, { useState } from 'react'
import { PlusCircle, Trash2 } from 'lucide-react'

interface TodoItem {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [inputValue, setInputValue] = useState('')

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    setTodos([...todos, { id: Date.now(), text: inputValue }])
    setInputValue('')
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <form onSubmit={addTodo} className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-2 border rounded mr-2"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          <PlusCircle size={24} />
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center p-2 border-b">
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} className="text-red-500">
              <Trash2 size={24} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
