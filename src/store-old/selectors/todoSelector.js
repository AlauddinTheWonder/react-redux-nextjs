import { createSelector } from 'reselect'

const todoSelector = state => state.todo

export const selectTodos = createSelector(todoSelector, state => state.todos)
export const selectCompletedTodos = createSelector(todoSelector, state => state.todos.filter(todo => todo.completed))
export const selectTodoLoading = createSelector(todoSelector, state => state.loading)
