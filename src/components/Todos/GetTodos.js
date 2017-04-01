import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchTodos } from '../../actions'

class GetTodos extends Component {
  // constructor(props){
  //   super(props)
  //   this.setState = ({
  //
  //   })
  // }

  componentDidMount (){
    this.props.fetchTodos()
  }

  render(){
    return (
      <div>
        <ul className="collection with-header">
          {
            this.props.todos.map((item, index) => {
              return (
                <li className="collection-item" key={index}>
                  {/*<div>
                    <form className="completed-checkbox">
                      <p style={{ display: 'inline-block' }}>
                        {item.is_completed}
                        <input type="checkbox" checked={item.is_completed === "true" ? "checked" : ""}/>
                      </p>
                    </form>
                  </div>*/}
                  {item.title}, {JSON.stringify(item.is_completed)}
                </li>
              )
            })
          }
        </ul>
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
    fetchTodos: () => dispatch(fetchTodos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetTodos)
