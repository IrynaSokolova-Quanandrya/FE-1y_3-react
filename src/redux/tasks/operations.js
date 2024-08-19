import { createAsyncThunk } from "@reduxjs/toolkit";
import  axios  from "axios";


export const getTasks = createAsyncThunk('tasks/getTasks', async () => {
    try {
        const res = await axios.get('/tasks')
        return res.data
    } catch (error) {
        console.log(error);
    }
})

export const addTask = createAsyncThunk('tasks/addTask', async(text)=>{
    try{
        const newTask = await axios.post('/tasks', {text} )
        return newTask
    }catch(error){
        console.log(error)
    }
})

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (task, thunkAPI) => {
      try {
        const res = await axios.delete(`/tasks/${task.id}`);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const toggleCompleted = createAsyncThunk(
    'tasks/toggleCompleted',
    async (task, thunkAPI) => {
      try {
        const res = await axios.put(`/tasks/${task.id}`, {
          completed: !task.completed,
        });
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

// 3 actions
// 'tasks/getTasks/pending'
// 'tasks/getTasks/fullfield'
// 'tasks/getTasks/rejected'
