import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTodos, selectTodoLoading } from '../store/selectors/todoSelector'
import { getTodoList } from '../store/middlewares/todoMiddleware'
import styles from '../styles/Todos.module.css'

// export async function getServerSideProps() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const data = await res.json()
//     return {
//         props: {
//             todos: data
//         }
//     }
// }

export default function Todos() {
    const dispatch = useDispatch()
    const todos = useSelector(selectTodos)
    const isLoading = useSelector(selectTodoLoading)

    useEffect(() => {
        console.log('did mount')
        if (!todos || todos.length === 0) {
            dispatch(getTodoList())
        }
    }, [dispatch, todos])

    return (
        <div className={styles.main}>
            <h1>Todo List: {isLoading ? 'Loading...' : ''}</h1>
            <ul className={styles.list}>
                {todos.length > 0 && todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}