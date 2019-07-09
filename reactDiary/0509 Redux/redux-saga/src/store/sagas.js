import { takeEvery, put} from 'redux-saga/effects';
import * as Types from './action';
import axios from 'axios';
import * as actions from './actionCreators'  ;

function* mySaga () {
  yield takeEvery(Types.GET_TODO_DATA, getTodoData)//两个参数，第一个是要触发的类型，第二个是要执行的函数
  yield takeEvery(Types.ADD_TODO_ITEM, addItem)
}

function* addItem () {
  console.log('add')
}

function* getTodoData () {
  try {//做一步请求失败的处理
    const data = yield axios.get('list.json');
    // console.log(data.data.data)
    const action = actions.getInitList(data);
    yield put(action);//相当于dispatch派发
  } catch (err) {
    console.log(err)
  }
}

export default mySaga;