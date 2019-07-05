import React, { Component } from 'react';
import store from '../store'
import {CHANGE_INPUT_VAL,ADD_TODO_ITEM,DELETE_TODO_ITEM} from '../store/action';
import * as action from '../store/actionCreators'
import {connect} from 'react-redux';
import axios from 'axios';

axios.interceptors.response.use(res =>{
  if(res.data.code === 0){
    return res.data.data;
  }
  return Promise.reject('请求出错');
})

class TodoList extends Component {

  componentDidMount () {
    axios.get('./list.json').then(res =>{
      this.props.getInitList(res);
    })
  }

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
    this.props.changeVal(e.target.value)
  }

  handleAdd=()=>{
    this.props.addItem(this.props.inpVal)
  }

  handleDelete=(index)=>{
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

export default connect(mapStateToProps, action)(TodoList);
