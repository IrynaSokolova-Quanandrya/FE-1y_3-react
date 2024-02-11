import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from '../../GlobalStyle.styled';
import initialTodos from '../../todos.json';
import { TodoEditor } from '../TodoEditor/TodoEditor';
import { TodoList } from '../TodoList/TodoList';
import { Modal } from '../Modal/Modal';

export class App extends Component {  
  state={
    todos: initialTodos,
    showModal: false
  }

   componentDidMount() {
    const todos = localStorage.getItem('todos')
    const parsedTodos = JSON.parse(todos)
   
    if (parsedTodos) {
      this.setState({
      todos: parsedTodos
    })
    }
  }

  componentDidUpdate(prevProps, prevState) {
       if (prevState.todos !== this.state.todos) {
      window.localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }      
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

  toggleModal = () => {
    this.setState(prev=>({showModal: !prev.showModal}))
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.toggleModal}>Відкрити модалку</button>
        {this.state.showModal && <Modal>
          <button type="button" onClick={this.toggleModal}>Закрити</button>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi omnis molestiae explicabo esse illum vitae vero natus repudiandae ipsum delectus facere eaque in tempore ad incidunt officiis veritatis magni, mollitia dolorum laudantium earum. Excepturi praesentium ea perferendis vitae vel, numquam commodi unde non dignissimos ut nam error, odit rerum odio?</p>
        </Modal>}
      {/* <TodoEditor addTodo={this.addTodo}/>
        {this.state.todos.length > 0 && <TodoList todos={this.state.todos} onDelete={this.deleteTodo} onToggleCompleted={this.toggleCompleted} />} */}
      <GlobalStyle/>
      </>
    );
  }
};