import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../../actions'

class FormTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTodo:''
    }
  }

  handleChange (event) {
    this.setState({
      currentTodo: event.target.value
    })
  }

  submitTodo (event) {
    event.preventDefault()
    if (this.state.currentTodo === '') {
      alert('Please input your todo')
    }else {
      this.props.addTodo(this.state.currentTodo)
      this.setState({
        currentTodo:''
      })
    }
  }

  render(){
    return (
      <form onSubmit={(event) => this.submitTodo(event) }>
        <div className="row">
          <div className='input-field col s6'>
            <input  className="validate" type="text" placeholder="Input here . . ." onChange={(event) => this.handleChange(event)} value={this.state.currentTodo}/>
            <label className="active">Add Item</label>
          </div>
          <div className="input-field col s6">
            <button className="waves-effect waves-light btn" type="submit">
              <i className="material-icons left">input</i>Add
            </button>
          </div>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo))
  }
}

export default connect(null, mapDispatchToProps)(FormTodo)
