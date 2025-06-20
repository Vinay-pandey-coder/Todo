import { useState, useEffect } from 'react'
import Header from './Header'
import List from './List'
import Input from './Input'

const App = () => {
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

    useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  return (
    <div className="container">
      <Header />
      <Input todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
      <List todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
    </div>
  )
}

export default App