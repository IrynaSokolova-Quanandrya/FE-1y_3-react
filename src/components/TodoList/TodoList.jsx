import React from 'react';
import {List} from './TodoList.styled';
import { Todo } from './Todo';

export const TodoList = ({ todos }) => (
  <List>
    {todos.map(({ id, text, completed }) => (
      <Todo key={id} text={text} completed={completed}/>
    ))}
  </List>
);

