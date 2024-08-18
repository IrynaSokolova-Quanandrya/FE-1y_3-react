import { Task } from "components/Tasks/Task/Task";
import { useSelector } from "react-redux";
import css from "./TaskList.module.css";
import { selectVisibleTasks } from "redux/tasks/selectors";



export const TaskList = () => {  
  const visibleTasks = useSelector(selectVisibleTasks)
  
  return (
    <ul className={css.list}>
      {visibleTasks.map(task => {
        return <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      })}
    </ul>
  );
};