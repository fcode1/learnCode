import React, { Component } from 'react';
import {Switch,Route,Redirect,Prompt} from 'react-router-dom';
import ActivitiesNav from '../../components/activitesNav/activitesNav'
import Recommended from './recommended/Recommended';
import All from './all/All';
import Articles from './articles/Articles';
import Pins from './pins/Pins';

import './style.css'
class Activities extends Component {

  render () {
    return (
      <>
        <Prompt message={(location)=>{
          console.log(location)//通过此属性，可查看当前访问的路径，然后在判断二级路由是否包含在内，包含在内则不跳转
          if(!location.pathname.includes('/activities')){
            return window.confirm('确定要离开吗?')
          }
          return true;
        }}/>
        <div>
          <ActivitiesNav></ActivitiesNav>
          <div className="acContent">
            <Switch>
                <Route path="/activities/recommended" component={ Recommended }></Route>
                <Route path="/activities/all" component={ All }></Route>
                <Route path="/activities/articles" component={ Articles }></Route>
                <Route path="/activities/pins" component={ Pins }></Route>
                <Redirect to="/activities/recommended"></Redirect>
            </Switch>
          </div>
        </div>
      </>
    )
  }

}

export default Activities;