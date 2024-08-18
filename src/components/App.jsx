import { Layout } from "components/Layout";
import { AppBar } from "components/AppBar/AppBar";
import { TaskForm } from "components/Tasks/TaskForm/TaskForm";
import { TaskList } from "components/Tasks/TaskList/TaskList";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { getTasks } from "redux/tasks/operations";
import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";

export const App = () => {
const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasks())
  }, [dispatch])
  return (
    <Layout>
      <AppBar />

      <Routes>
            <Route index element={<HomePage />} />
      </Routes>
    </Layout>
  );
};