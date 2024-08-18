import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { selectTaskCounter} from "redux/tasks/selectors";

export const TaskCounter = () => {
  const {active, completed} = useSelector(selectTaskCounter)

  return (
    <div>
      <p className={css.text}>Active: { active }</p>
      <p className={css.text}>Completed: { completed}</p>
    </div>
  );
};