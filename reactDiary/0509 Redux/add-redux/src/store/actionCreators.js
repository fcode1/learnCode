import {ADD_COUNT} from './action';

export const add = (n) =>{
  return {
    type:ADD_COUNT,
    n
  }
}