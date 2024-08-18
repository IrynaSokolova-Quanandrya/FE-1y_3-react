import { createSlice } from "@reduxjs/toolkit";
import { getTasks, addTask, deleteTask, toggleCompleted } from "./operations";
 
export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
    .addCase(getTasks.pending, (state) => {
                state.isLoading = true
            })
    .addCase(getTasks.fulfilled, (state, action) => {
            state.isLoading = false,
            state.error = null    
            state.items = action.payload
            })
    .addCase(getTasks.rejected, (state, action) => {
            state.error = action.payload
    })
    .addCase(addTask.pending, (state) => {
        state.isLoading = true
    })
    .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false,
        state.error = null
        state.items.push(action.payload.data)
    })
    .addCase(addTask.rejected, (state, action) => {
        state.error = action.payload
    })
        .addCase(deleteTask.pending, (state) => {
        state.isLoading = true
    })
    .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false,
        state.error = null
         const idx = state.items.findIndex((item) => item.id === action.payload.id)
              state.items.splice(idx, 1)
    })
    .addCase(deleteTask.rejected, (state, action) => {
        state.error = action.payload
    })
        .addCase(toggleCompleted.pending, (state) => {
        state.isLoading = true
    })
    .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false,
        state.error = null
        const idx = state.items.findIndex((item) => item.id === action.payload.id)
              state.items.splice(idx, 1, action.payload)
    })
    .addCase(toggleCompleted.rejected, (state, action) => {
        state.error = action.payload
    })
    }
})


export const taskReducer = taskSlice.reducer

