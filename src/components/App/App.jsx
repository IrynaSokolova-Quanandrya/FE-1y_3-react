import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import initialTodos from '../../todos.json';
import { TodoEditor } from '../TodoEditor/TodoEditor';
import { TodoList } from '../TodoList/TodoList';
import { Modal } from '../Modal/Modal';
import { Btn } from "../Button/Button";
import { GlobalStyle } from '../../GlobalStyle.styled';


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
    this.toggleModal()
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
        <Btn type="button" onClick={this.toggleModal}><FaPlus size={30}/></Btn>
       
        {this.state.showModal && <Modal onClose={this.toggleModal}>
          <Btn type="button" onClick={this.toggleModal}><IoMdClose /></Btn>
                  <TodoEditor addTodo={this.addTodo}/>
        </Modal>}
      
        {this.state.todos.length > 0 && <TodoList todos={this.state.todos} onDelete={this.deleteTodo} onToggleCompleted={this.toggleCompleted} />}
      <GlobalStyle/>
      </>
    );
  }
};