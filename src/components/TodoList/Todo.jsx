import {Item, Text, Button} from './TodoList.styled';

export const Todo = ({text, completed}) => {
    return(
        <Item>
        <input type="checkbox" checked={completed}/>    
        <Text>{text}</Text>
        <Button>Delete</Button>
      </Item>
    )
}