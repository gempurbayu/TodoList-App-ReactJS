import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "reading a book"
      },
      {
        id: 2,
        title: "cooking"
      },
    ]
  }
  deleteTask = id => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    })
    alert("delete ok")
  }

  addTask = data => {
    const id = this.state.todos.length
    const newData = {
      id: id + 1,
      title: data

    }

    this.setState({
      todos: [...this.state.todos, newData]
    })
    alert("add ok")
  }

  render(){
    const { todos } = this.state;

    return (
      <div className='app'>
        <div className='logo'>
          <img src={logo} alt='logo'/>
          <h3>Task List</h3>
        </div>
        <div className='list'>
          {todos.map(item =>
            <TodoItem key={item.id} todo={item} del={this.deleteTask}/>
          )}
        </div>
        <div className='input-form'>
          <FormInput add={this.addTask}/>
        </div>
      </div>
    )
  }
}

export default App;
