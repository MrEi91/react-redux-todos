import * as ActionTypes from './constants'

export const getTodos = todos => {
  return {
    type: ActionTypes.GET_TODOS,
    payload:todos
  }
}

export const actionAddTodo = todo => {
  return {
    type: ActionTypes.ADD_TODO,
    payload:todo
  }
}

export const fetchTodos = () => {
  return (dispatch) => {
    fetch('http://localhost:4000/todos',{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(todos => todos.json())
    .then(todos => dispatch(getTodos(todos)))
  }
}

export const addTodo = (todo) => {
  return (dispatch) => {
    fetch('http://localhost:4000/todos',{
      method:'POST',
      body:JSON.stringify({
        title:todo,
        is_completed: false
      }),
      headers:{
        'Content-Type' : 'application/json'
      }
    })
    .then(response => response.json())
    .then(todo => dispatch(actionAddTodo(todo)))
  }
}
