import React, { Component } from 'react';

import Header from './components/Header'
import Todos from './components/Todos'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Todos></Todos>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
