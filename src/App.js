import './App.css';
import {useState, useEffect} from 'react'
import Header from './Components/Header/Header'
import Tabs from './Components/Tabs/Tabs'
import TodoInput from './Components/TodoInput/TodoInput'
import Todos from './Components/Todos/Todos'
import DeleteButton from './Components/DeleteButton/DeleteButton'

function App() {
  const [activeTab, setActiveTab] = useState("All")
  const [todos, setTodos] = useState([])

  const handleClick = (name) => {
    setActiveTab(name)
  }

  const addTodo = (todo) => {
    const newTodos = [...todos, todo]
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }

  const completeTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
        return todo
      }
      return todo
    })

    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }

  const deleteTodo = (id) => {
    const newTodos = todos?.filter(todo => todo.id !== id)

    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }

  const deleteAllTodos = () => {
    const newTodos = todos.filter(todo => todo.completed === false)
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }

  useEffect(() => {
    const newTodos = JSON.parse(localStorage.getItem("todos"))
    
    setTodos(!!newTodos ? newTodos : [])
  }, [])


  return (
    <div className="App">
      <Header />
      <Tabs activeTab={activeTab} handleClick={handleClick}/>
      {activeTab === "Completed" ? null : <TodoInput addTodo={addTodo}/> }
      <Todos todos={todos} completeTodo={completeTodo} activeTab={activeTab} deleteTodo={deleteTodo}/>
      {
        activeTab === "Completed" && todos.some(todo => todo.completed === true) ? 
          <DeleteButton deleteAllTodos={deleteAllTodos}/>
        : null
      }
    </div>
  );
}

export default App;
