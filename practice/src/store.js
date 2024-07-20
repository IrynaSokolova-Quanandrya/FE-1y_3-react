import { legacy_createStore as createStore} from 'redux'
import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 5 },
    reducers: {
        increment(state, action) {
          return  {
                ...state,
                value: state.value + action.payload 
            }
        }
    }
})

export const store = configureStore({reducer: counterSlice.reducer})