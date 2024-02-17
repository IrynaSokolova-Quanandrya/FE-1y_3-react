import { Item, Text } from './TodoList.styled';
import { Button } from '../Button/Button.styled';

export const Todo = ({ todoId, text, completed, onDelete, onToggleCompleted }) => {
  
  const handleDelete = () => {
    onDelete(todoId)
  }

  const handleChange = () => {
    onToggleCompleted(todoId)
  }
    return(
        <Item>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleChange} />    
        <Text>{text}</Text>
        <Button onClick={handleDelete}>Delete</Button>
      </Item>
    )
}