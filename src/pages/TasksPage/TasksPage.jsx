import { TaskForm } from "components/Tasks/TaskForm/TaskForm";
import { TaskList } from "components/Tasks/TaskList/TaskList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTasks } from "redux/tasks/operations";

export function TasksPage() {
    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasks())
  }, [dispatch])
    return (
        <>
        <TaskForm />
            <TaskList />
        </>
    )
}