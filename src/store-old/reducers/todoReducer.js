import { TODOS_LOADING, TODOS_SET } from "../actions/todoAction"

const initialState = {
    loading: false,
    todos: []
}

export default function reducer(state = initialState, action) {
    switch(action?.type) {
        case TODOS_SET:
            return {
                ...state,
                todos: action.payload,
            }
        case TODOS_LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        default:
            return state
    }
}