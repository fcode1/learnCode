import React from 'react';
import ReactDOM from 'react-dom';
import {
   BrowserRouter as Router,//引用浏览器路由并取名Router
   Route, //启用路由路径
   Switch,//暂停向下匹配路由,配合exact使用-》严格匹配，包含的就不会在匹配，除非完全包含
   Redirect,//重定向
   Link,//路由跳转
   NavLink,//带样式的路由跳转
  } from 'react-router-dom';
import Home from './pages/home/Home';
import Activities from './pages/activities/Activities';
import Topics from './pages/topics/Topics';
import Login from './pages/login/Login';
import App from './App';
import './styles/index.css'

ReactDOM.render(
  <Router>
    <>
      <App>
        <Switch>
            <Route path = '/' exact component = { Home }></Route>
            <Route path = '/activities' component = {Activities}></Route>
            <Route path = '/topics' component = {Topics}></Route>
            <Route path = '/login' component = {Login}></Route>
            <Redirect to='/'></Redirect>
          </Switch>
      </App>
      
    </>
  </Router>,
  document.getElementById('root')
 );

