import React, { Component } from 'react';
import {NavLink,withRouter} from 'react-router-dom'
import './nav.css'
import MenuLink from '../MenuLink';
class Nav extends Component {

  render () {
    return (
      <div className="nav">
        <span className="logo" onClick={ this.handleClick }>前端教育</span>
        {/* <NavLink to='/' exact>首页</NavLink>
        <NavLink to='/activities'>动态</NavLink>
        <NavLink to='/topics'>话题</NavLink>
        <NavLink to='/login'>登录</NavLink> */}
      {
        // MenuLink代替NavLink
      }
        <MenuLink to='/' exact>首页</MenuLink>
        <MenuLink to='/activities'>动态</MenuLink>
        <MenuLink to='/topics'>话题</MenuLink>
        <MenuLink to='/login'>登录</MenuLink>
      </div>
    )
  }

  handleClick = () => {
    this.props.history.push('/');
  }

}

export default withRouter(Nav);//把不是通过路由切换过来的组件中，将react-router 的 history、location、match 三个对象传入props对象上，需要包裹一下