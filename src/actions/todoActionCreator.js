import * as ActionTypes from './constants'

export const searchTodo = todo => {
  return {
    type: 'SEARCH_TODO',
    payload: todo
  }
}

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

export const actionUpdateTodo = (id, todo) => {
  return {
    type: ActionTypes.UPDATE_TODO,
    payload:{
      id:id,
      title:todo
    }
  }
}

// export const actionUpdateCompleteTodo = is_completed => {
//   return {
//     type: ActionTypes.UPDATE_COMPLETE_TODO,
//     payload: is_completed
//   }
// }

export const actionDeleteTodo = id => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload:id
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

export const updateTodo = (id, title) => {
  return (dispatch) => {
    fetch('http://localhost:4000/todos/' + id,{
      method:'PUT',
      body:JSON.stringify({
        title: title,
        is_completed: false
      }),
      headers:{
        'Content-Type' : 'application/json'
      }
    })
    .then(response => response.json())
    .then((id, todo) => dispatch(actionUpdateTodo(id, todo)))
    .catch(err =>  console.log(err))
  }
}

// export const updateCompleteTodo = (id, title, is_completed) => {
//
//   let isTrueSet = (is_completed === "true")
//   let getStatus = (isTrueSet) ? "false" : "true"
//
//   return (dispatch) => {
//     fetch('http://localhost:4000/todos/' + id,{
//       method:'PUT',
//       body:JSON.stringify({
//         id: id,
//         title: title,
//         is_completed: getStatus
//       }),
//       headers:{
//         'Content-Type' : 'application/json'
//       }
//     })
//     .then(response => response.json())
//     .then(todo => dispatch(actionUpdateCompleteTodo(id, todo)))
//   }
// }

export const deleteTodo = (id) => {
  return (dispatch) => {
    fetch('http://localhost:4000/todos/' + id,{
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(todo => dispatch(actionDeleteTodo(id)))
    .catch(err => console.log(err))
  }
}
