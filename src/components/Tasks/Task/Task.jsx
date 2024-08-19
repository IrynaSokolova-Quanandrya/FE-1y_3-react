import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "redux/tasks/operations";

export const Task = ({ task }) => {
  const dispatch = useDispatch()
  const handleDelete = () => dispatch(deleteTask(task));
   const handleToggle = () => dispatch(toggleCompleted(task));
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle} 
      />
      <p className={css.text}>{task.text}</p>
       <button type="button" onClick={handleDelete}>
       Delete
     </button>
    </div>
  );
};