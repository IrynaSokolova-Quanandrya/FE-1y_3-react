import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from '../../GlobalStyle.styled';
import initialTodos from '../../todos.json';
import { TodoEditor } from '../TodoEditor/TodoEditor';
import {TodoList} from '../TodoList/TodoList';

export class App extends Component {  
  state={
    todos: initialTodos,
  }
  

  addTodo = (text)=>{
    const newTodo = {
      id: nanoid(),
      text,
      completed: false
    }
    
  this.setState((prevState)=>{
    return {
      todos: [newTodo, ...prevState.todos]
    }
  })
  }

  deleteTodo = (todoId) => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter(todo=>todo.id !== todoId)
      }
    })
  }

  toggleCompleted = (todoId) => {
    this.setState(prevState => (
      {
        todos: prevState.todos.map(todo =>
          todo.id === todoId
            ? { ...todo, completed: !todo.completed }
            : todo
      )}
    ))
  }

  render(){
    return (
      <>
      <TodoEditor addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} onDelete={this.deleteTodo} onToggleCompleted={this.toggleCompleted} />
      <GlobalStyle/>
      </>
    );
  }
};