import {ADD_COUNT} from './action';

const initState = {
  count:0
}

export default (state = initState ,action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type){
    case ADD_COUNT:
      newState.count = newState.count + action.n
      return newState
  }

  return state;
}
