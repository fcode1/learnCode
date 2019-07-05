import * as Types from './action';
import Axios from 'axios';

export const changeVal = (value) =>{
  return {
    type:Types.CHANGE_INPUT_VAL,
    value
  }
}

export const addItem = (value) =>{
  return {
    type:Types.ADD_TODO_ITEM,
    value
  }
}

export const deleteItem = (index) =>{
  return {
    type:Types.DELETE_TODO_ITEM,
    index
  }
}

export const add = (n) =>{
  return {
    type:Types.ADD_COUNT,
    n
  }
}


export const getInitList = (list) =>{
  // return {
  //   type:Types.GET_INIT_LIST,
  //   list
  // }

  //redux-thunk方法
  // return dispatch => {
  //   Axios.get('list.json').then(res =>{
  //     dispatch({
  //       type:Types.GET_INIT_LIST,
  //       list:res
  //     })
  //   })
  // }

  //redux-promise方法
  return new Promise((resolve,reject) => {
    Axios.get('list.json').then(res =>{
      resolve({
        type:Types.GET_INIT_LIST,
        list:res
      })
    })
  })

}