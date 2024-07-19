import { createSlice } from "@reduxjs/toolkit";

const initialState = {status: "all"};

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {status: "all"},
    reducers: {
    setStatusFilter(state, action){
        state.status = action.payload
    }
    }
})


export const { setStatusFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer