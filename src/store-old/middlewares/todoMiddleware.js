import { fetchJson } from "../../utils"
import { setTodos, todosError, setTodoLoading } from '../actions/todoAction'


export const getTodoList = () => async (dispatch) => {
    try {
        dispatch(setTodoLoading(true))
        const data = await fetchJson('https://jsonplaceholder.typicode.com/todos')
        dispatch(setTodos(data))
        dispatch(setTodoLoading(false))
    } catch (e) {
        dispatch(setTodoLoading(false))
        dispatch(todosError(e))
    }
}