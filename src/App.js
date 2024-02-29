import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js'
import { useState, useEffect } from 'react';
import Todo from './views/Todo.js';
import User from './views/User.js';

function App() {
  const [input, setInput] = useState('Reverie')
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'loving reverie', type: 'Love' },
    { id: 'todo2', title: `working hard for reverie's future`, type: 'Work' },
    { id: 'todo3', title: `sending give for reverie`, type: 'Send' },
    { id: 'todo4', title: 'loving reverie more than yesterday', type: 'Love' },

  ])
  useEffect(() => {
    console.log('run useEffect if input change')
  }, [input]);
  useEffect(() => {
    console.log('run useEffect if input todos')
  }, [todos]);
  const handleEventClick = () => {
    if (!input) {
      alert('missing input')
      return
    }
    let todo = { id: Math.floor(Math.random() * 100), title: input, type: 'Love' }
    setTodos([...todos, todo])
  }
  const handleChangeInputName = (event) => {
    setInput(
      event.target.value
    )
  }
  const handleDelete = (id) => {
    let cloneTodos = []
    cloneTodos = todos.filter(todo => todo.id !== id)
    setTodos(cloneTodos)
  }
  let name = 'Reverie'
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {name} from Eddy</h1>
        <User />
        {/* <Todo
          todos={todos.filter(item => item.type === 'Work')}
          title={'Moc'}
          handleDelete={handleDelete}
        />
        <Todo
          todos={todos.filter(item => item.type === 'Love')}
          title={'Eddy'}
          handleDelete={handleDelete}
        />
        <input type='text' value={input} onChange={(event) => handleChangeInputName(event)}></input>
        <button type='button' onClick={() => handleEventClick()}>Click me</button> */}
      </header>
    </div>
  );
}

export default App;
