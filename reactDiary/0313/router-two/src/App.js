import React, { Component } from 'react';
import Nav from './components/nav/Nav'
class App extends Component {

  render () {
    return (
      <>
        <Nav></Nav>
        <div className="content">
          {this.props.children}
        </div>
      </>
    )
  }

}

export default App;