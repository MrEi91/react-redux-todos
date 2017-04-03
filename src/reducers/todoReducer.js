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
      const id = action.payload.id
      const title = action.payload.title
      console.log('haloooo ' +  action.payload.id + ' ' + action.payload.title);
      const arrayID = state.todos.map(todo => todo.id)
      const updatedTodoIndex = arrayID.indexOf(id)
      const updatedState = state.todos.map((todo, index) => {
        if (index === updatedTodoIndex)
          return Object.assign({}, state[updatedTodoIndex], title)
        else
          return todo
      })
      return Object.assign({}, state, {updatedState})
    case ActionTypes.SEARCH_TODO:
      const filterTodos = state.todos.filter((todo, index) => {
        return todo.title.search(action.payload) !== -1
      })
      return Object.assign({}, state, {filterTodos})
    default:
      return state
  }
}

export default todoReducer
