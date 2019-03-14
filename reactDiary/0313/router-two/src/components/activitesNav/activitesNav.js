import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './acNav.css'
class activitiesNav extends Component {

  render () {
    return (
      <div className="acNav">
        <NavLink to="/activities/recommended">推荐</NavLink>
        <NavLink to="/activities/all">综合</NavLink>
        <NavLink to="/activities/articles">文章</NavLink>
        <NavLink to="/activities/pins">沸点</NavLink>
      </div>
    )
  }

}

export default activitiesNav;