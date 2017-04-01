import React, { Component } from 'react'

class Header extends Component {
  render(){
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo"><img src="http://www.hrinside.com.au/wp-content/uploads/2009/11/ei-logo-redball.png" alt="logo"/></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">React</a></li>
            <li><a href="#">Redux</a></li>
            <li><a href="#">JavaScript</a></li>
          </ul>
        </div>
     </nav>
    )
  }
}

export default Header
