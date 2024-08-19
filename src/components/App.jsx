import { Layout } from "components/Layout";
import { AppBar } from "./Auth/AppBar/AppBar";
import { useDispatch} from "react-redux";
import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { RegisterPage } from "pages/RegisterPage/RegistePage";
import { TasksPage } from "pages/TasksPage/TasksPage";

export const App = () => {

  return (
    <Layout>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/tasks" element={<TasksPage/>}/>
      </Routes>
    </Layout>
  );
};