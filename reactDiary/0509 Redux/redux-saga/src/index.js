import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import TodoList from './components/TodoList'
import Counter from './components/Counter'

// Provider组件 提供store功能，代替store
render(
<Provider store = {store}>
  <Counter/> 
  <TodoList />
</Provider>, 
  document.getElementById('root')); 