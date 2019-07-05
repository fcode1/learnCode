import React, { Component } from 'react';
import store from '../store'
import {CHANGE_INPUT_VAL,ADD_TODO_ITEM,DELETE_TODO_ITEM} from '../store/action';
import * as action from '../store/actionCreators'
import {connect} from 'react-redux';

class TodoList extends Component {

  // state = store.getState();//获取当前reducer里的数据

  // componentDidMount(){//订阅reducer里的更改
  //   store.subscribe(this.handleStoreChange)
  // }

  render () {
    const {inpVal,list} = this.props;
    return (
      <>
        <div>
          <input value={inpVal} onChange={this.handleChange}></input>
          <button onClick={this.handleAdd}>添加</button>
        </div>
        <div>
          <ul>
            {
              list.map((item,index)=>(
                <li key={item+index}>
                  {item}<button onClick={()=>{this.handleDelete(index)}}>X</button>
                </li>
              ))
            }
          </ul>
        </div>
      </>
    )
  }
  handleChange=(e)=>{
    // const action ={
    //   type:CHANGE_INPUT_VAL,
    //   value:e.target.value
    // }
    // const action = Action.getTodoChangeInputValAction(e.target.value)
    // store.dispatch(action);
    this.props.changeVal(e.target.value)
  }

  handleAdd=()=>{
    // const action ={
    //   type:ADD_TODO_ITEM,
    //   value:this.state.inpVal
    // }
    // const action = Action.getTodoAddItemAction(this.state.inpVal)
    // store.dispatch(action);
    this.props.addItem(this.props.inpVal)
  }

  handleDelete=(index)=>{
    // const action ={
    //   type:DELETE_TODO_ITEM,
    //   index
    // }
    // const action = Action.getTodoDeleteItemAction(index)    
    // store.dispatch(action);
    this.props.deleteItem(index)
  }


  handleStoreChange=()=>{  //更新数据函数，在subscribe中订阅
    this.setState(store.getState())
  }

}

  const mapStateToProps = (state) => ({
    inpVal:state.inpVal,
    list:state.list
  })
  // const mapDispatchToProps = (dispatch) => ({
  //   changeVal:(val) => {
  //     dispatch(Action.getTodoChangeInputValAction(val))
  //   },
  //   addItem:(val) =>{
  //     dispatch(Action.getTodoAddItemAction(val))
  //   },
  //   deleteItem:(index) =>{
  //     dispatch(Action.getTodoDeleteItemAction(index))
  //   }
  // })

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default connect(mapStateToProps, action)(TodoList);
