import React from 'react';
import {List} from './TodoList.styled';
import { Todo } from './Todo';

export const TodoList = ({ todos, onDelete, onToggleCompleted }) => (
  <List>
    {todos.map(({ id, text, completed }) => (
      <Todo
        key={id}
        text={text}
        completed={completed}
        onDelete={onDelete} 
        todoId={id}
        onToggleCompleted={onToggleCompleted}
      />
    ))}
  </List>
);
