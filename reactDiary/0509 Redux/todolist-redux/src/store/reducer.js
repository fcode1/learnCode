import {CHANGE_INPUT_VAL,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './action';
import {ADD_COUNT} from './action'
const initState ={
  inpVal:'',
  list:[],

  count:0
}

export default (state=initState ,action) =>{
  const newState = JSON.parse(JSON.stringify(state));

  switch(action.type){
    case CHANGE_INPUT_VAL:
      newState.inpVal = action.value;
      return newState;
    case ADD_TODO_ITEM:
        newState.list.push(action.value);
        newState.inpVal = '';
        return newState;
    case DELETE_TODO_ITEM:
        newState.list.splice(action.index,1)
        return newState;
      
    case ADD_COUNT:
        newState.count = newState.count + action.n
        return newState
  }

  return state;
}