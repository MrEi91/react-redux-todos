import * as ActionTypes from '../actions/constants'

const initialState = {todos:[], todosFilter:[]}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TODOS:
      return Object.assign({}, state, {
        todos:action.payload,
        todosFilter: action.payload
      })
    case ActionTypes.ADD_TODO:
      return Object.assign({}, state, {
        todos:[...state.todos, action.payload],
        todosFilter:action.payload
      })
    default:
      return state
  }
}

export default todoReducer
