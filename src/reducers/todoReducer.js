import * as ActionTypes from '../actions/constants'

const initialState = {todos:[], filterTodos:[]}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TODOS:
      return Object.assign({}, state, {
        todos:action.payload,
        filterTodos: action.payload
      })
    case ActionTypes.ADD_TODO:
      return Object.assign({}, state, {
        todos:[...state.todos, action.payload],
        filterTodos:action.payload
      })
    case ActionTypes.DELETE_TODO:
      let newState = state.todos.filter((todo) => {
        return todo.id !== action.payload
      })
      return Object.assign({}, state, {
        todos: newState,
        filterTodos: newState
      })
    case ActionTypes.UPDATE_TODO:

      return
    case ActionTypes.SEARCH_TODO:
      const filterTodos = state.todos.filter((todo, index) => {
        const patternFilter = new RegExp(action.payload, 'gi')
        return patternFilter.test(todo.title)
      })
      return Object.assign({}, state, {filterTodos})
    default:
      return state
  }
}

export default todoReducer
