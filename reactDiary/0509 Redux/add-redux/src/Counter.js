import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as action from './store/actionCreators';


class Counter extends Component {

  render () {
    return (
      <div>
        {
          this.props.count
        }<button onClick={this.handleAdd}>add</button>
      </div>
    )
  }

  handleAdd = (n) =>{
    this.props.add(1)
  }
}
  const mapStateToProps = (state) =>({
      count:state.count
  })

export default connect(mapStateToProps,action)(Counter);