import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from "next-redux-wrapper";
import todoReducer from './slices/todoSlice'

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
