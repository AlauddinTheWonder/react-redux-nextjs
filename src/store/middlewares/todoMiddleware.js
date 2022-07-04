import { fetchJson } from "../../utils"
import { setTodos, setTodoLoading } from '../slices/todoSlice'


export const getTodoList = () => async (dispatch) => {
    try {
        dispatch(setTodoLoading(true))
        const data = await fetchJson('https://jsonplaceholder.typicode.com/todos')
        dispatch(setTodos(data))
        dispatch(setTodoLoading(false))
    } catch (e) {
        console.error(e)
        dispatch(setTodoLoading(false))
    }
}