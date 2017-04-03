import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { fetchTodos } from './actions'
import App from './App';
import Header from './components/Header'
import Todos from './components/Todos'
import Footer from './components/Footer'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore({todos: { filterTodos: [] }})

describe('TESTING <App/>', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow (<App />)
  })

  //TESTING COMPONENTS
  it('should render Header, Todos and Footer without crashing', () => {
    expect(wrapper.containsAllMatchingElements([
      <Header></Header>,
      <Todos></Todos>,
      <Footer></Footer>
    ])).to.be.true
  })

  //TESTING REDUX
  describe('TESTING REDUX', () => {
    let wrapper
    beforeEach (() => {
      wrapper = mount (
        <Provider store = { store }>
          <App/>
        </Provider>
      )
    })
    it('should render with store as props', (done) => {
      expect(wrapper).to.have.length(1)
      done()
    })
  })
})
