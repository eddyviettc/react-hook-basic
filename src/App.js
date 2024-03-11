import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js'
import { useState, useEffect } from 'react';
import Todo from './views/Todo.js';
import User from './views/User.js';
import { Countdown, NewCountDown } from './views/Countdown.js';
import Blog from './views/Blog.js';
import DetailBlog from './views/DetailBlog.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"


function App() {
  const [input, setInput] = useState('Reverie')
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'loving reverie', type: 'Love' },
    { id: 'todo2', title: `working hard for reverie's future`, type: 'Work' },
    { id: 'todo3', title: `sending give for reverie`, type: 'Send' },
    { id: 'todo4', title: 'loving reverie more than yesterday', type: 'Love' },

  ])
  useEffect(() => {
  }, [input]);
  useEffect(() => {
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
  const onTimesup = () => {
    // alert('het gio')
  }
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/" exact>
            <User />
          </Route>
          <Route path="/timer">
            <Countdown onTimesup={onTimesup} />
            <span>----------------</span>
            <NewCountDown onTimesup={onTimesup} />
          </Route>
          <Route path="/todo">
            <Todo
              todos={todos}
              title={'Moc'}
              handleDelete={handleDelete}
            />
            <input type='text' value={input} onChange={(event) => handleChangeInputName(event)}></input>
            <button type='button' onClick={() => handleEventClick()}>Click me</button>
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/blog/:id" >
            <DetailBlog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
