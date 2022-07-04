// Action Types
export const TODOS_GET = 'Todos.Get';
export const TODOS_SET = 'Todos.Set';
export const TODOS_ERROR = 'Todos.Error'
export const TODOS_LOADING = 'Todos.Loading'


// Actions
export const todosError = (error) => ({
    type: TODOS_ERROR,
    payload: error,
})

export const setTodos = (payload) => ({
    type: TODOS_SET,
    payload,
})

export const setTodoLoading = (payload) => ({
    type: TODOS_LOADING,
    payload,
})
