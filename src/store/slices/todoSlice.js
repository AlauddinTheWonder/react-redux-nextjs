import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    todos: [],
}

const reducers = {
    setTodoLoading: (state, action) => {
        state.loading = action.payload
    },
    setTodos: (state, action) => {
        state.todos = action.payload
    }
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers,
})

export const { setTodoLoading, setTodos } = todoSlice.actions

export default todoSlice.reducer
