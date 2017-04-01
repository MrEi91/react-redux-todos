import React, { Component } from 'react'

import FormTodo from './FormTodo'
import GetTodos from './GetTodos'

class Todos extends Component {
  render (){
    return (
      <div className="row" style={{ marginTop:50 }}>
        <div className="col s6 offset-s3">
          <div className="card">
            <div className="card-content ">
              <span className="card-title center teal-text">TODO REACT REDUX</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <FormTodo></FormTodo>
            <GetTodos></GetTodos>
          </div>
        </div>
      </div>
    )
  }
}

export default Todos
