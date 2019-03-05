import React from 'react';
import ReactDOM from 'react-dom';
// import Control from './components/Control'
// import UnControl from './components/UnControl'
import Person from './components/Person'

//受控组件
// ReactDOM.render(<Control></Control>, document.getElementById('root'));
//非受控组件
// ReactDOM.render(<UnControl></UnControl>, document.getElementById('root'));
//属性校验

const person = {
    // name: 'alice',
    age: 18,
    sex: '男',
    figure: {
      weight: 95,
      height: 165
    },
    hobby: ['读书', '看报'],
    salary: 100
  }

ReactDOM.render(<Person {...person}></Person>, document.getElementById('root'));


