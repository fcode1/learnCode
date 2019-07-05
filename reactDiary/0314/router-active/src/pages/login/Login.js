import React, { Component } from 'react';
import './style.css'

class Login extends Component {
  state = {
    isLogin:document.cookie.includes('login=true')//查看是否包含login=true，为登录状态
  }

  render () {
    return (
      <div className="login">
        <button className="login-btn" onClick={this.handleClick}>
          {this.state.isLogin?'退出':'登录'}
        </button>
      </div>
    )
  }

  handleClick = () =>{
    const isLogin = this.state.isLogin;

    if(isLogin){
      this.setCookie('login','',-1)//清除cookie
    }else{
      this.setCookie('login',true,300)//设置cookie
      this.jumpBack()//跳转回首页
    }
    
    this.setState({
      isLogin:!isLogin
    })
  }

  setCookie = (key,value,day)=>{
    const expires = day * 24 * 60 * 60 * 1000;
    const date = new Date(+new Date() + expires);
    
    document.cookie = `${key}=${value};expires=${date.toUTCString()}`
  }

  jumpBack = () =>{
    const { location,history} = this.props;
    const from = location.state && location.state.from;

    if(from === '/') {
      history.push({
        pathname:from,
        state:{
          article:location.state.article
        }
      })
    }
  }

}

export default Login;