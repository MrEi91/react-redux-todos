import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchTodos, deleteTodo, updateTodo, searchTodo } from '../../actions'

class GetTodos extends Component {
  constructor(){
    super()
    this.state = ({
      isEditingStatus: false,
      editValue: '',
      index: 0
    })
  }

  componentDidMount (){
    this.props.fetchTodos()
  }

  changeEditingStatus(index) {
    this.setState({
      isEditingStatus: true,
      index: index
    })
  }

  handleChange(event) {
    this.setState({
      editValue: event.target.value
    })
  }

  render(){
    return (
      <div className="container">
        <div style={{ float: 'right' }}>
          <form>
            <i className="material-icons">search</i>
            <input className="input-field col s10" type="text" placeholder="Search your task . . ." onChange={ (event) => this.props.searchTodo(event.target.value)}/>
          </form>
        </div>
        <table className="striped responsive-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.todos.map((todo, index) => {
                return (
                  <tr key={index}>
                    <td>{todo.id}</td>
                    <td>
                      {
                        this.state.isEditingStatus && this.state.index === index ?
                        <input type="text" onChange={(event) => this.handleChange(event)} defaultValue={todo.title} autoFocus/> : todo.title
                      }
                    </td>
                    <td>
                      <button className="waves-effect orange btn" type="button" onClick={() => { this.changeEditingStatus(index) }}>Edit</button>
                      <button className="waves-effect orange btn" type="button" onClick={() => { this.props.deleteTodo(todo.id) }}>Delete</button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    updateTodo: (id, todo) => dispatch(updateTodo(id, todo)),
    searchTodo: (todo) => dispatch(searchTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetTodos)
