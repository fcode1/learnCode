import React from 'react';
import {Route,Redirect} from 'react-router-dom';

//导航属性校验
const PrivateRoute = ({component:Component, ...props}) => {
  return (
    <Route {...props} render={()=>{
      const isLogin = document.cookie.includes('login=true');
      if(isLogin) {
        return <Component></Component>
      }else{
        alert('您还没有登录，请在登录页进行登录')
        return <Redirect to="./login"></Redirect>
      }
    }}></Route> 
  )
}

export default PrivateRoute;