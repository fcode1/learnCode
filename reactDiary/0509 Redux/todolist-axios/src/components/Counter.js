import React, { Component } from 'react';
import * as action from '../store/actionCreators';
// import store from '../store';
import {connect} from 'react-redux';

class Counter extends Component {

  // state = {
  //  count: store.getState().count
  // }

  // componentDidMount(){
  //   store.subscribe(()=>{
  //     this.setState({
  //       count:store.getState().count
  //     })
  //   })
  // }

  render () {
    return (
      <div>
        {/* { this.state.count } */}
        {this.props.count}
        <button onClick={this.AddCount}>add</button>
      </div>
    )
  }

  AddCount=()=>{
    // const action = AddCountAction(1)
    // store.dispatch(action)
    this.props.add(1)
  }
}

const  mapStateToProps = (state) =>({//store中的state-->将store中的state转变到props中
  count: state.count
})

// const mapDispatchToProps = (dispatch) =>({//store中的dispatch
//   add: (val) => {
//     dispatch(AddCountAction(val))
//   }
// })

export default connect(mapStateToProps,action)(Counter);