import React,{useState ,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filter, setFilter] = useState([])

  useEffect (()=>{
    getLocal()
  },[])

  useEffect(()=>{
    filterHandler()
    saveLocal()
  },[todos,status])

  const filterHandler = () =>{
    switch(status){
      case "completed":
        setFilter(todos.filter((todo)=>todo.completed === true))
        break;
      case "uncompleted":
        setFilter(todos.filter((todo)=>todo.completed === false))
        break;
      default:
        setFilter(todos)
        break;
    }
  }

  const saveLocal = ()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocal = ()=>{
    if (localStorage.getItem("todos")=== null){
      localStorage.setItem("todos", JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO LIST</h1>
      </header>
      <Form setStatus={setStatus} inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
      <TodoList filter={filter} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
